import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/i18n/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import saudiIcon from "../../../assets/icons/saudi-arabia.svg"
import z from "zod";

interface IProps {}

const LoginValidation: React.FC<IProps> = ({}) => {
  const [checked, setChecked] = useState(false);
   const v = useTranslations("auth.login.validation-errors");

const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(9, { message: v("phone.validation-msg") })
    .max(9, { message: v("phone.validation-msg") }),

  password: z
    .string()
    .min(6, { message: v("password.validation-msg") })
    .max(64, { message: v("password.validation-msg") }),
});

  type ILogin = z.infer<typeof loginSchema>;
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ILogin>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(data);
  };
  const t = useTranslations("auth.login.form-labels");
  const formLabels = t.raw("labels") as {
    id: string;
    label: string;
    type: string;
    placeholder: string;
  }[];
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-xl">
        <FormField
          icon={saudiIcon}
          showDivider={true}
          rightElement="966+"
          label={formLabels[2].label}
          type={formLabels[2].type}
          placeholder={formLabels[2].placeholder}
          hasError={!!errors.phoneNumber}
          errorMessage={errors.phoneNumber?.message}
          {...register("phoneNumber", { required: true })}
        />
        <PasswordField
          label={formLabels[1].label}
          placeholder={formLabels[1].placeholder}
          hasError={!!errors.password}
          errorMessage={errors.password?.message}
          {...register("password", { required: true })}
        />
        {/* remember me */}
        <div className="flex justify-between">
          <div className="flex items-center gap-md">
            <Checkbox
              checked={checked}
              onCheckedChange={() => setChecked((prev) => !prev)}
              id="remember"
            />
            <span>{t("remember-me")}</span>
          </div>
          <Link href="/forget-password" className="text-brand-blue">
            {t("forget-pass")}
          </Link>
        </div>
        <Button disabled={isSubmitting} type="submit">
          {t("header")}
        </Button>
      </form>
    </>
  );
};

export default LoginValidation;
