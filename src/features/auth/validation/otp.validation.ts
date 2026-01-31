import { useTranslations } from "next-intl";
import { z } from "zod";

export const getOtpSchema = (
  t: ReturnType<typeof useTranslations<"auth">>,
  maxLength = 6
) => {
  const otpRegex = new RegExp(`^\\d{${maxLength}}$`);

  return z.object({
    otp: z
      .string()
      .trim()
      .min(1, { message: t("otp.errors.required") })
      .refine((val) => otpRegex.test(val), {
        message: t("otp.errors.invalid"), // لازم يكون ارقام وبالطول المطلوب
      }),
  });
};

export type TOtpInput = z.input<ReturnType<typeof getOtpSchema>>;
