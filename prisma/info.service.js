import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createInfo = async (data) => {
  const record = await prisma.info.create({
    data: data,
  });

  return record;
};


