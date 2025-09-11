"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  // Create a transporter object using the default SMTP transport
  // You'll need to set up environment variables for this.
  // For example, using Gmail, you'd need an App Password.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your email address
      pass: process.env.SMTP_PASS, // Your email password or App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: "kushalmittal2022@gmail.com", // your receiving email address
      subject: `New message from ${name} via portfolio`, // Subject line
      text: message, // plain text body
      html: `
        <h1>New Message from Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      message: "Sorry, something went wrong while sending your message. Please try again later.",
      success: false,
    };
  }
}
