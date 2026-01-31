import { useTranslations } from "next-intl";
import { z } from "zod";
import { getSaudiPhoneSchema } from "./saudi-phone.validation";
export const getForgetPasswordSchema = (
  t: ReturnType<typeof useTranslations<"auth.login">>,
) => {
  return z.object({
    phoneNumber: getSaudiPhoneSchema(t),
  });
};

export type TForgetPasswordInput = z.input<
  ReturnType<typeof getForgetPasswordSchema>
>;
