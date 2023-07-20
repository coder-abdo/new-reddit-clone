import { PrismaClient } from "@prisma/client";
let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    errorFormat: "pretty",
  });
} else {
  prisma = new PrismaClient({
    errorFormat: "pretty",
  });
}

export const db = prisma;
