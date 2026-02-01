import { useTranslations } from "next-intl";
import * as z from "zod";

// register schema for individuals
export const getRegisterIndividualsSchema = (
  t: ReturnType<typeof useTranslations<"auth.register.register-form">>,
) => {
  return z.object({
    phoneNum: z
      .string()
      .trim()
      .min(1, t("validation-errors.phone.required"))
      .regex(/^5\d{8}$/, t("validation-errors.phone.validation-msg")),
    nationalId: z
      .string()
      .min(1, t("validation-errors.nationalId.required"))
      .regex(/^[0-9]{10}$/, t("validation-errors.nationalId.validation-msg")),
    password: z
      .string()
      .min(1, t("validation-errors.password.required"))
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
        t("validation-errors.password.validation-msg"),
      ),
    email: z
      .email(t("validation-errors.email.validation-msg"))
      .min(1, t("validation-errors.email.required")),
    birthDate: z
      .string()
      .min(1, t("validation-errors.birthDate.required"))
      .regex(
        /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        t("validation-errors.birthDate.validation-msg"),
      ),
  });
};

export type TRegisterIndividualsSchema = z.input<
  ReturnType<typeof getRegisterIndividualsSchema>
>;

// register schema for companies
export const getRegisterCompaniesSchema = (
  t: ReturnType<typeof useTranslations<"auth.register.register-form">>,
) => {
  return z.object({
    unifiedNum: z.coerce
      .number({
        error: t("validation-errors.unified-num.validation-msg"),
      })
      .int()
      .min(1, t("validation-errors.unified-num.required"))
      .min(7000000000, t("validation-errors.unified-num.validation-msg"))
      .max(7999999999, t("validation-errors.unified-num.validation-msg")),
    nationalId: z
      .string()
      .min(1, t("validation-errors.nationalId.required"))
      .regex(/^[0-9]{10}$/, t("validation-errors.nationalId.validation-msg")),
    password: z
      .string()
      .min(1, t("validation-errors.password.required"))
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
        t("validation-errors.password.validation-msg"),
      ),
    email: z
      .email(t("validation-errors.email.validation-msg"))
      .min(1, t("validation-errors.email.required")),
    birthDate: z
      .string()
      .min(1, t("validation-errors.birthDate.required"))
      .regex(
        /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        t("validation-errors.birthDate.validation-msg"),
      ),
  });
};

export type TRegisterCompaniesSchema = z.input<
  ReturnType<typeof getRegisterCompaniesSchema>
>;
