import nodemailer from "nodemailer"
import config from "../config/config.js"

export const sendEmail = async (to, subject, html) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: config.mail.email,
            pass: config.mail.password
        }
    })

    await transporter.sendMail({
        from: config.mail.email,
        to,
        subject,
        html
    })

}