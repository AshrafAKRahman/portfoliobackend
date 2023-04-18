// import pkg from "pg";
// const { Pool } = pkg;
// export const pool = new Pool({
//   connectionString: process.env.POSTGRESQL_CONNECTION_URL,
// });

// export function query(text, params) {
//   return pool.query(text, params);
// }
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.post('/send_email', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New message from your portfolio site',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});