import { Input } from "@/components/ui/input";

export default function Settings() {
  return (
    <div className="custom-width flex flex-col">
      <div>
        <h1 className="text-2xl font-bold text-primary tracking-tighter">
          프로필 설정
        </h1>
        <p className="text-sm text-muted-foreground">
          설정을 업데이트 해주세요.
        </p>
      </div>
      <div className="flex flex-col">
        <Input type="text" />
      </div>
    </div>
  )
}