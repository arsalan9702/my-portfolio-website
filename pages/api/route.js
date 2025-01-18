import nodemailer from 'nodemailer';

// Basic email validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'arsalansayed9702@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email. Please try again later.' });
  }
}