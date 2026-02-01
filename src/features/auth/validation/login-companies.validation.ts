import { useTranslations } from "next-intl";
import * as z from "zod";

// login schema for companies
export const getLoginCompaniesSchema = (
  t: ReturnType<typeof useTranslations<"auth.login">>,
) => {
  return z.object({
    unifiedNum: z.coerce
      .number({
        error: t("validation-errors.unified-num.validation-msg"),
      })
      .int()
      .min(1, t("validation-errors.phone.required"))
      .min(7000000000, t("validation-errors.unified-num.validation-msg"))
      .max(7999999999, t("validation-errors.unified-num.validation-msg")),
    password: z
      .string()
      .min(1, t("validation-errors.phone.required"))

      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
        t("validation-errors.password.validation-msg"),
      ),
  });
};

export type TLoginSchemaInput = z.input<
  ReturnType<typeof getLoginCompaniesSchema>
>;
