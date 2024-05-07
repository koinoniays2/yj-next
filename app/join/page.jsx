import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Join() {
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
            <form className="flex flex-col gap-y-4">
              <Input type="text" placeholder="아이디" required />
              <Input type="text" placeholder="이메일" required />
              <Input type="password" placeholder="비밀번호" required />
              <Input type="password" placeholder="비밀번호 확인" required />
              <Button type="submit" className="w-full">회원가입</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}