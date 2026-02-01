"use client";

import * as React from "react";
import { Controller, type Control } from "react-hook-form";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import type { TOtpInput } from "@/features/auth/validation/otp.validation";
import ValidationErrorMsg from "@/components/shared/ValidationErrorMsg";

interface IProps {
  control: Control<TOtpInput>;
  maxLength?: number;
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

export function OtpForm({
  control,
  maxLength = 6,
  disabled = false,
  hasError = false,
  errorMessage = "",
}: IProps) {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Controller
        name="otp"
        control={control}
        render={({ field }) => {
          const handleChange = (v: string) => {
            if (disabled) return;
            const onlyDigits = v.replace(/\D/g, "").slice(0, maxLength);
            field.onChange(onlyDigits);
          };

          return (
            <InputOTP
              maxLength={maxLength}
              value={(field.value as string) ?? ""}
              onChange={handleChange}
              disabled={disabled}
              className="w-full"
            >
              <InputOTPGroup className="gap-3">
                {Array.from({ length: maxLength }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className={`
                      h-13 w-13 rounded-md border text-xl font-semibold
                      ${hasError ? "border-red-500" : "border-dark-700"}
                      ${
                        disabled
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "text-secondary-foreground"
                      }
                    `}
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          );
        }}
      />

      {hasError && !!errorMessage && (
        <div className="w-full flex ">
        <ValidationErrorMsg errorMessage={errorMessage} />
        </div>
      )}
    </div>
  );
}
