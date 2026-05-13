import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

/**
 * Deeply serializes an object to ensure it can be passed from a Server Component
 * to a Client Component. Specifically handles Prisma Decimals.
 */
export function deepSerialize<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
