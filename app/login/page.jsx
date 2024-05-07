import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
  return (
    <div className="custom-width my-10">
      <div className="w-full max-w-screen-sm mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>회원이 아니신가요? <Link href="/join" className="hover:text-primary hover:font-bold
            hover:border-b border-blue-400">회원가입</Link></CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-y-4">
              <Input type="text" placeholder="아이디" required />
              <Input type="password" placeholder="비밀번호" required />
              <Button type="submit" className="w-full">로그인</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}