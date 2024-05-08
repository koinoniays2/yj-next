"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { createAccount } from "./action";
import { useFormState } from "react-dom"; // 클라이언트용

export default function Join() {
  const [state, formAction] = useFormState(createAccount, null); // 유효성 검사, 폼 가로채기 -> createAccount로 넘김
  return (
    <div className="custom-width my-10">
      <div className="w-full max-w-screen-sm mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
            <CardDescription className="">이미 회원이신가요? <Link href="/login" className="hover:text-primary hover:font-bold
            hover:border-b border-blue-400">
              로그인</Link></CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="flex flex-col gap-y-4">
              <Input name="username" type="text" placeholder="아이디" required />
              {state?.fieldErrors.username && (
                <span className="text-red-500 text-sm">{state.fieldErrors.username}</span>
              )}
              <Input name="email" type="text" placeholder="이메일" required />
              {state?.fieldErrors.email && (
                <span className="text-red-500 text-sm">{state.fieldErrors.email}</span>
              )}
              <Input name="password" type="password" placeholder="비밀번호" required />
              <Input name="password2" type="password" placeholder="비밀번호 확인" required />
              {state?.formErrors && (
                <span className="text-red-500 text-sm">{state.formErrors}</span>
              )}
              <Button type="submit" className="w-full">회원가입</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}