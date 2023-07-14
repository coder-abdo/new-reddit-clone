import { PrismaClient as Client } from "@prisma/client";
declare global {
  namespace NodeJS {
    interface Global {
      prisma: Client;
    }
  }
}
