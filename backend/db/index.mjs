import { PrismaClient } from "@prisma/client";

export const dbConnection = () => {
  return new PrismaClient();
};
