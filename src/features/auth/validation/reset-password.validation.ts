import * as z from "zod";
import { useTranslations } from "next-intl";

export const getResetPassSchema = (
  t: ReturnType<typeof useTranslations<"auth.reset-password">>,
) => {
  return z
    .object({
      newPassword: z
        .string()
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
          t("validation-errors.new-password.validation-msg"),
        ),
      confirmPassword: z
        .string()
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
          t("validation-errors.confirm-password.validation-msg"),
        ),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t("validation-errors.password-match.validation-msg"),
      path: ["confirmPassword"],
    });
};

export type TResetPassSchemaInput = z.input<
  ReturnType<typeof getResetPassSchema>
>;
