import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export class EmailService {
  static async createEmail(data: { sender: string; subject: string; body: string }) {
    return prisma.email.create({ data });
  }

  static async getAllEmails() {
    return prisma.email.findMany({ orderBy: { receivedAt: 'desc' } });
  }

  static async getEmailById(id: number) {
    return prisma.email.findUnique({ where: { id } });
  }

  static async updateEmail(id: number, data: { sender?: string; subject?: string; body?: string }) {
    return prisma.email.update({
      where: { id },
      data,
    });
  }

  static async deleteEmail(id: number) {
    return prisma.email.delete({ where: { id } });
  }
}

