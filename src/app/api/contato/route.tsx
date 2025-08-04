import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { nome, email, mensagem } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // seu email
      pass: process.env.EMAIL_PASS, // senha de app
    },
  });

  const mailOptions = {
    from: `"Formulário do site" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER, // pra onde vai o email
    subject: 'Novo contato do site',
    text: `
      Nome: ${nome}
      Email: ${email}
      Mensagem: ${mensagem}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
