"use client";

import React, { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import OtpExpireTimer from "@/components/shared/OtpCounter";
import { OtpForm } from "@/features/auth/components/Otp/OtpForm";
import {
  getOtpSchema,
  type TOtpInput,
} from "@/features/auth/validation/otp.validation";

interface Props {
  durationSeconds?: number;
  storageKey?: string;
  onResend?: () => Promise<void> | void;
  onVerify?: (otp: string) => Promise<void>;
  className?: string;
}

const OtpVerifyForm: React.FC<Props> = ({
  durationSeconds = 60,
  storageKey = "otp_end_at_otp_page",
  onResend,
  onVerify,
  className = "",
}) => {
  const t = useTranslations("otp");

  const otpSchema = useMemo(() => getOtpSchema(t, 6), [t]);
  const [forceExpired, setForceExpired] = useState(false);

  const {
    control,
    handleSubmit,
    resetField,
    clearErrors,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TOtpInput>({
    resolver: zodResolver(otpSchema),
    mode: "onChange",
    defaultValues: { otp: "" },
  });

  const hasOtpError = !!errors.otp?.message;

  const onSubmit: SubmitHandler<TOtpInput> = async (data) => {
    console.log("OTP:", data.otp);
    setForceExpired(true);
    await onVerify?.(data.otp);
    resetField("otp");
    clearErrors("otp");
  };

  const handleResend = async () => {
    await onResend?.();
    setForceExpired(false);
    resetField("otp");
    clearErrors("otp");
  };

   const handleTimerFinished = () => {
    setForceExpired(true);
  };

  
  return (
    <div className={`w-full flex flex-col items-center gap-xl ${className}`}>
      <form className="flex flex-col gap-xl" onSubmit={handleSubmit(onSubmit)}>
        <OtpForm
          control={control}
          disabled={isSubmitting}
          hasError={hasOtpError}
          errorMessage={errors.otp ? String(errors.otp.message) : ""}
        />

        <Button type="submit"  disabled={!isValid || isSubmitting}>
          {t("login")}
        </Button>
      </form>

      <OtpExpireTimer
        durationSeconds={durationSeconds}
        autoStart
        onResend={handleResend}
        storageKey={storageKey}
        hidden={hasOtpError}
        forceExpired={forceExpired}
        onFinished={handleTimerFinished}
      />
    </div>
  );
};

export default OtpVerifyForm;
