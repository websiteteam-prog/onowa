import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendContactMail = async (data) => {

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,   // admin email
    subject: "New Contact Form Message",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Message:</b> ${data.message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};