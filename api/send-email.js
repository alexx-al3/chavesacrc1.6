// ══════════════════════════════════════════════════════
// ACRC Imóveis — Email API (Nodemailer via Vercel Functions)
// Preencha as variáveis de ambiente no painel do Vercel:
//   GMAIL_USER  →  email@gmail.com
//   GMAIL_PASS  →  senha-de-app-16-caracteres
//   EMAIL_DEST  →  destinatario@acrcimoveis.com.br
// ══════════════════════════════════════════════════════

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // ── Se as credenciais não estão configuradas, simula sucesso ──
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.log("[EMAIL SIMULADO]", JSON.stringify(req.body, null, 2));
    return res.status(200).json({ ok: true, simulated: true });
  }

  const { subject, html, pdfBase64, pdfName } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"ACRC Imóveis — Controle de Chaves" <${process.env.GMAIL_USER}>`,
    to: process.env.EMAIL_DEST || process.env.GMAIL_USER,
    subject: subject || "Relatório de Movimentação — ACRC Imóveis",
    html,
    attachments: pdfBase64
      ? [{ filename: pdfName || "comprovante.pdf", content: pdfBase64, encoding: "base64" }]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[EMAIL ERROR]", err.message);
    return res.status(500).json({ error: err.message });
  }
}
