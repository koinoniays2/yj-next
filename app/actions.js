import prisma from "@/lib/db";
import getSession from "@/lib/session";

export async function getUser() {
  const session = await getSession();

  if(session.id) {
    const user = await prisma.user.findUnique({
      where: {
        id: session.id,
      },
      select: {
        id: true,
        username: true,
        email: true,
        avatar: true
      }
    });
    if(user) return user;
  }
  return;
};