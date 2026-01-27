"use client";

import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function OtpForm() {
  const [value, setValue] = React.useState("");

  return <>
    <div dir="rtl" className="flex flex-col items-center gap-6">
     
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
      >
        <InputOTPGroup className="gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <InputOTPSlot
              key={index}
              index={index}
              className="
                h-11 w-11
                rounded-md 
                border border-dark-700 
                text-xl font-semibold text-secondary-foreground focus:outline-none
                focus:ring-0  focus-visible:ring-0"
            />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  </>
}
