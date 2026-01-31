import { useTranslations } from "next-intl";
import { z } from "zod";

export const getSaudiPhoneSchema = (
  t: ReturnType<typeof useTranslations<"auth.login">>,
) =>
  z
    .string()
    .trim()
    .min(1, t("validation-errors.phone.required")) 
    .regex(/^5\d{8}$/, t("validation-errors.phone.validation-msg"));
