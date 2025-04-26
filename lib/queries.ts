// lib/queries.ts
import { prisma } from "@/lib/prisma";

export async function getUserSummaries(email: string) {
  return await prisma.summary.findMany({
    where: {
      user: {
        email,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
