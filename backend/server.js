const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const sequelize = require('./config/db');
const Contact = require('./modules/contact');
const app = express();
const PORT = 3035;

// Middleware for CORS
app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'https://api.speedhousedesign.com', 'https://speedhousedesign.com'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: { rejectUnauthorized: false }
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, telephone, subject, message } = req.body;

  if (!name || !email || !telephone || !subject || !message) {
    return res.status(400).json({ success: false, error: 'Required fields missing' });
  }

  try {
    // Save to DB
   await Contact.create({
  name,
  email,
  telephone, // ✅ Correct
  subject,
  message
});
    // Admin mail
   await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: 'saleh@luminatewebsol.com',
  replyTo: email,
  subject: `Contact Form: ${subject || 'No Subject'}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${telephone || 'N/A'}</p> <!-- ✅ Fixed -->
    <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
    <p><strong>Message:</strong><br>${message}</p>
  `
});

    // Auto reply
    await transporter.sendMail({
      from: `"Speed House Engineering" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Speed House Engineering",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color:#1E40AF;">Thank you, ${name}!</h2>
          <p>We’ve received your message and will get back to you shortly.</p>
          <p style="background-color:#f0f0f0;padding:10px;border-left:4px solid #1E40AF;">
            ${message}
          </p>
          <p style="margin-top:20px;">Warm regards,<br><strong>Speed House Engineering Team</strong></p>
          <p style="font-size:12px;color:#888;">Golf Park Building #205, Al Garhoud, Dubai, UAE</p>
        </div>
      `
    });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Contact error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message', detail: error.message });
  }
});

// Test Route
app.get('/test-email', async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'yourpersonalemail@example.com',
      subject: 'Test Email',
      text: 'This is a test email from Speed House backend.',
    });
    res.send('✅ Test email sent!');
  } catch (error) {
    console.error('❌ Test email failed:', error);
    res.status(500).send('❌ Failed to send test email.');
  }
});

// Start server
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected');
    return sequelize.sync();
  })
  .then(() => {
    console.log('✅ Models synced');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Database error:', err);
  });
