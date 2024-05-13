"use server";

import prisma from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/dist/server/api-utils";

export async function updateUserInfo(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const session = await getSession();

  // 로그인이 돼있으면
  if(session.id) {
    const user = await prisma.user.findUnique({
      where: {
        id: session.id
      },
      select: {
        // 가지고 올 데이터 : true
        id: true,
        username: true,
        email: true,
        avatar: true
      }
    });
    
    if(!user) {
      return redirect("/login");
    }

    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        name,
        email
      }
    });
  };

  
};
