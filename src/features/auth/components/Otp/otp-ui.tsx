"use client";

import * as React from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export function OtpForm({ value, onChange, maxLength = 6 }: IProps) {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <InputOTP maxLength={maxLength} value={value} onChange={onChange} className="w-full flex justify-center">
        <InputOTPGroup className="gap-3">
          {Array.from({ length: maxLength }).map((_, index) => (
            <InputOTPSlot
              key={index}
              index={index}
              className="h-13 w-13 rounded-md border border-dark-700 text-xl font-semibold text-secondary-foreground"
            />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
