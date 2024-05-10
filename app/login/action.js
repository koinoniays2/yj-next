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
      password: true,
      // username: true
    }
  });

  if(user) { // 입력된 패스워드, db 패스워드
    const ok = await bcrypt.compare(password, user.password); // bcrypt는 await

    if(ok) { // 쿠키
      const session = await getIronSession(cookies(), {
        cookieName: "cococookie", // 쿠키 이름 설정
        password: process.env.COOKIE_PASSWORD // 40자 이상 비밀번호
      });
      session.id = user.id; // 세션(쿠키) 객체에 id 넣기
      // session.nmae = user.username; // test
      console.log(session);
      await session.save(); // 쿠키 저장하기

      return redirect("/settings");
    }
  }
  console.log(username, password);
}