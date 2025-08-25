import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ContactEmail, ContactEmailService } from '@/providers/contact-email-provider';

export async function POST(request: Request) {
  const { nome, email, mensagem } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: `"Formulário do site" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Novo contato do site',
    text: `
      Nome: ${nome}
      Email: ${email}
      Mensagem: ${mensagem}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    const contactEmail = new ContactEmail({
      email,
      subject: nome,
      body: mensagem,
    });
    const service = new ContactEmailService();
    await service.add(contactEmail);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const service = new ContactEmailService();
    const emails = await service.getAll();
    return NextResponse.json(emails);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}