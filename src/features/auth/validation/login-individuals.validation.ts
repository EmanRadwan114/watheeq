import { useTranslations } from "next-intl";
import { z } from "zod";
import { getSaudiPhoneSchema } from "./saudi-phone.validation";


export const getLoginIndividualsSchema = (
  t: ReturnType<typeof useTranslations<"auth.login">>,
) => {
  return z.object({
    phoneNumber: getSaudiPhoneSchema(t),

    password: z.string().regex(
      /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      t("validation-errors.password.validation-msg"),
    ),
  });
};

export type TLoginIndividualsInput = z.input<
  ReturnType<typeof getLoginIndividualsSchema>
>;
