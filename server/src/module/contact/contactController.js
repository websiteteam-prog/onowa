import { createContact } from "./contactService.js";
import { sendContactMail } from "./sendMail.js";

export const submitContact = async (req, res) => {

  try {

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Required fields missing"
      });
    }

    // Save in database
    await createContact({ name, email, phone, message });

    // Send email to admin
    await sendContactMail({ name, email, phone, message });

    res.status(201).json({
      message: "Message sent successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};