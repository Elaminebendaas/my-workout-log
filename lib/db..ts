import { PrismaClient } from '@prisma/client';

declare global {
	var prisma: PrismaClient | undefined;
}

const db = new PrismaClient();
/* if (process.env.NODE_ENV !== 'production') globalThis.prisma = db; */

export default db;
