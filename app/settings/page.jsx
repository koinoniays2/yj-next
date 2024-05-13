import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { updateUserInfo } from "./action";
import prisma from "@/lib/db";
import { getUser } from "../actions";
import { redirect } from "next/navigation";
import { SubmitButton } from "../components/submitButton";

async function getData(userId) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      username: true,
      name: true,
      avatar: true,
      email: true
    }
  });
  return data;
}

export default async function Settings() {
  const user = await getUser();
  if(!user) return redirect("/login");

  const data = await getData(user?.id);
  return (
    <div className="custom-width flex flex-col">
      <div className="pt-5">
        <h1 className="text-2xl font-bold text-primary tracking-tighter">
          프로필 설정
        </h1>
        <p className="text-sm text-muted-foreground">
          설정을 업데이트 해주세요.
        </p>
      </div>
      {/* 구분선 */}
      <Separator className="my-5" />
      {/* 인풋박스 */}
      <form action={updateUserInfo} className="flex flex-col gap-y-5">
        {/* 프로필 이미지 */}
        <div className="size-32 rounded-full bg-red-500"></div>
        {/* 이름 */}
        <div>
          <Label className="px-1 font-semibold text-lg">이름</Label>
          <Input type="text" name="name" defaultValue={data?.name} />
        </div>
        {/* 이메일 */}
        <div>
          <Label className="px-1 font-semibold text-lg">이메일</Label>
          <Input type="text" name="email" defaultValue={data?.email} />
        </div>
        {/* 버튼 */}
        <div className="flex gap-x-1 w-full justify-end items-center">
          <Link href="/"><Button variant="secondary">취소</Button></Link>
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}