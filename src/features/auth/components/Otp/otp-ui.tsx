"use client";

import * as React from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  disabled?: boolean;
}

export function OtpForm({ value, onChange, maxLength = 6 ,disabled=false}: IProps) {
  const handleChange = (v: string) => {
    if (disabled) return;
    const onlyDigits = v.replace(/\D/g, "").slice(0, maxLength);
    onChange(onlyDigits);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <InputOTP
        maxLength={maxLength}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className="w-full flex justify-center"
      >
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
