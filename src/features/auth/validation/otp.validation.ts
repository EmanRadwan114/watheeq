import { z } from "zod";
import { useTranslations } from "next-intl";

export const getOtpSchema = (
  t: ReturnType<typeof useTranslations<"otp">>,
  maxLength = 6
) => {
  return z.object({
    otp: z
      .string()
      .trim()
      .min(1, { message: t("errors.required") })
      .regex(new RegExp(`^\\d{${maxLength}}$`), {
        message: t("errors.invalid"),
      }),
  });
};

export type TOtpInput = z.infer<ReturnType<typeof getOtpSchema>>;