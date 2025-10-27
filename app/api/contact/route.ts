// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // or use 465 for secure connection
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Sender address
      to: process.env.EMAIL_USER, // Recipient's email
      subject: `New Contact Form Portfolio From ${name} - ${subject}`, // Subject line
      text: message, // Plain text body
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
