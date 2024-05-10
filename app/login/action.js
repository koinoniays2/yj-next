"use server";

import prisma from "@/lib/db";
import bcrypt from 'bcrypt';
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const user = await prisma.user.findUnique({
    where: {
      username: username
    },
    select: { // 필요한 필드만 가져오는 것
      id: true,
      password: true
    }
  });

  if(user) { // 입력된 패스워드, db 패스워드
    const ok = await bcrypt.compare(password, user.password); // bcrypt는 await

    if(ok) { // 서버 쿠키
      const session = await getIronSession(cookies(), {
        cookieName: "cococookie",
        password: process.env.COOKIE_PASSWORD // 40자 이상 비밀번호
      });
      session.id = user.id;
      await session.save();

      return redirect("/settings");
    }
  }
  console.log(username, password);
}