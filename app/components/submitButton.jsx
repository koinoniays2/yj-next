"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  // 로딩 확인
  const { pending } = useFormStatus();
  return (
    <> {pending ? (
      <Button disabled>
        <Loader2 className="size-4 animate-spin" />
        loading...
      </Button>
    ) : (
      <Button type="submit">변경</Button>
    )}
    </>
  )
};