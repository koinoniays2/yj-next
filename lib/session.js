"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export default async function getSession() {
    return await getIronSession(cookies(), {
      cookieName: "cococookie", // 쿠키 이름 설정
      password: process.env.COOKIE_PASSWORD // 40자 이상 비밀번호
    });
}