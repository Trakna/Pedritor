import { PrismaClient, Email as PrismaEmail } from '../generated/prisma';

const prisma = new PrismaClient();

export class ContactEmail {
  id: number | null;
  email: string;
  subject: string;
  body: string;
  receivedAt: Date;

  constructor(data: {
    id?: number | null;
    email: string;
    subject: string;
    body: string;
    receivedAt?: Date;
  }) {
    this.id = data.id ?? null;
    this.email = data.email;
    this.subject = data.subject;
    this.body = data.body;
    this.receivedAt = data.receivedAt ?? new Date();
  }

  static fromPrisma(email: PrismaEmail): ContactEmail {
    return new ContactEmail({
      id: email.id,
      email: email.sender,
      subject: email.subject,
      body: email.body,
      receivedAt: email.receivedAt,
    });
  }
}

export class ContactEmailService {
  async get(id: number): Promise<ContactEmail | null> {
    const email = await prisma.email.findUnique({ where: { id } });
    return email ? ContactEmail.fromPrisma(email) : null;
  }

  async update(id: number, contactEmail: Partial<ContactEmail>): Promise<ContactEmail | null> {
    const updated = await prisma.email.update({
      where: { id },
      data: {
        sender: contactEmail.email,
        subject: contactEmail.subject,
        body: contactEmail.body,
      },
    });
    return ContactEmail.fromPrisma(updated);
  }

  async add(contactEmail: ContactEmail): Promise<ContactEmail> {
    const created = await prisma.email.create({
      data: {
        sender: contactEmail.email,
        subject: contactEmail.subject,
        body: contactEmail.body,
      },
    });
    return ContactEmail.fromPrisma(created);
  }

  async remove(id: number): Promise<ContactEmail | null> {
    const deleted = await prisma.email.delete({ where: { id } });
    return deleted ? ContactEmail.fromPrisma(deleted) : null;
  }

  async getAll(): Promise<ContactEmail[]> {
    const emails = await prisma.email.findMany({ orderBy: { receivedAt: 'desc' } });
    return emails.map(ContactEmail.fromPrisma);
  }
}