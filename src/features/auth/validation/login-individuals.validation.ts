import { useTranslations } from "next-intl";
import { z } from "zod";

export const getLoginIndividualsSchema = (
  t: ReturnType<typeof useTranslations<"auth.login">>,
) => {
  return z.object({
    phoneNumber: z
      .string()
      .trim()
      .regex(/^5\d{8}$/, t("validation-errors.phone.validation-msg")),

    password: z
      .string()
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        t("validation-errors.password.validation-msg"),
      ),
  });
};

export type TLoginIndividualsInput = z.input<
  ReturnType<typeof getLoginIndividualsSchema>
>;
