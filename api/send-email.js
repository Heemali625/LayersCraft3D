// Vercel Serverless Function — Email Contact Form
// To switch to client email, just change the TO_EMAIL below
// Deploy: vercel

const TO_EMAIL = 'heemali.smirisys@gmail.com';
const FROM_EMAIL = 'heemali.smirisys@gmail.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: FROM_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Quote Request — ${service} from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0d0e12; color: #f8fafc; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="font-size: 24px; font-weight: 800; letter-spacing: -0.02em; margin: 0;">
              <span style="background: linear-gradient(120deg, #06b6d4, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Layers</span><span style="color: #f8fafc;">Craft</span><span style="background: linear-gradient(120deg, #f59e0b, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">3D</span>
            </h1>
            <p style="color: #94a3b8; font-size: 14px; margin: 4px 0 0;">New Quote Request</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;">Field</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #f8fafc; font-size: 14px;">Value</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #64748b; font-size: 12px; font-weight: 600;">Name</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #f8fafc; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #64748b; font-size: 12px; font-weight: 600;">Email</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #06b6d4; font-size: 14px;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #64748b; font-size: 12px; font-weight: 600;">Phone</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #f8fafc; font-size: 14px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #64748b; font-size: 12px; font-weight: 600;">Service</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #242838; color: #f59e0b; font-size: 14px; font-weight: 600;">${service}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 16px; color: #64748b; font-size: 12px; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 12px 16px; color: #94a3b8; font-size: 14px;">${message}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #242838;">
            <p style="color: #64748b; font-size: 11px; text-align: center;">
              Sent via LayersCraft3D Quick Quote
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}