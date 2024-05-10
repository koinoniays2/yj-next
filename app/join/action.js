"use server";

import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

// 중복검사
const checkUniqueUsername = async (username) => {
  const user = await prisma.user.findUnique({
    where: { // 조건절
      username: username //db안의 username이 파라미터에 들어 온 username인것
    },
    select: {
      id: true,
    }
  });
  if(user) {
    return false;
  } else {
    return true;
  }
};

const checkUniqueEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    },
    select: {
      id: true
    }
  });
  return Boolean(!user);
};

const checkPasswords = ({ password, password2 }) => password === password2;

const formSchema = z.object({
  username: z.string()
  .min(2, "2글자 이상 입력해 주세요.")
  .refine(checkUniqueUsername, "입력하신 아이디는 이미 사용중입니다."),
  email: z.string()
  .email("이메일 형식이 아닙니다.")
  .refine(checkUniqueEmail, "입력하신 이메일은 이미 사용중입니다."), // email()=이메일 유효성 검사
  password: z.string(),
  password2: z.string()
}).refine(checkPasswords, "패스워드와 패스워드 확인은 같아야 합니다.");

export async function createAccount(prevState, formData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password : formData.get("password"),
    password2 : formData.get("password2")
  }

  // data 유효성 검사
  const result = await formSchema.safeParseAsync(data);
  // error 확인
  if(!result.success) {
    return result.error.flatten(); // state에 저장되어 클라이언트에서 사용
  }

  /* const username = formData.get("username"); // input type name의 값
  const email = formData.get("email");
  const password = formData.get("password");
  const password2 = formData.get("password2");
  */

  // 암호화 await해줘야함
  const hashdPassword = await bcrypt.hash(result.data.password, 10);

  await prisma.user.create({
    data: {
      username : result.data.username,
      email : result.data.email,
      password: hashdPassword
    }
  }); //npx prisma studio 실행해서 데이터 확인

  return redirect("/settings");
}