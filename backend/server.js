const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields.",
    });
  }

  try {
    // Email to ZeroPoint Labs
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Message: ${subject || "No Subject"}`,
      text: `
New message from ZeroPoint Labs Contact Form

Name: ${name}
Email: ${email}
Subject: ${subject || "No Subject"}

Message:
${message}
      `,
    });

    // Automatic confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting ZeroPoint Labs",
      text: `
Hi ${name},

Thank you for contacting ZeroPoint Labs!

We have received your message successfully.

Our team will review your message and get back to you as soon as possible.

Best regards,
ZeroPoint Labs
Chennai, Tamil Nadu, India
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});