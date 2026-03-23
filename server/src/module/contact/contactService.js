import Contact from "../../models/contactModel.js";

export const createContact = async (data) => {

  const newContact = await Contact.create({
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message
  });

  return newContact;

};