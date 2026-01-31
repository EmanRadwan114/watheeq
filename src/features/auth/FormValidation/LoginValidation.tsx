"use client";

import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/i18n/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import saudiIcon from "../../../assets/icons/saudi-arabia.svg"
import {
  getLoginIndividualsSchema,
  TLoginIndividualsInput,
} from "../validation/login-individuals.validation";
import { useState } from "react";


interface IProps {}

const LoginValidation: React.FC<IProps> = ({}) => {
  const [checked, setChecked] = useState(false);

 
  const tLogin = useTranslations("auth.login");
  const tLabels = useTranslations("auth.login.form-labels");

  const loginIndividualsSchema = getLoginIndividualsSchema(tLogin);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TLoginIndividualsInput>({
    resolver: zodResolver(loginIndividualsSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TLoginIndividualsInput> = (data) => {
    console.log({
      ...data,
      fullPhone: `966${data.phoneNumber}`,
    });
  };

  const formLabels = tLabels.raw("labels") as {
    id: string;
    label?: string;
    text?: string;
    type: string;
    placeholder: string;
  }[];

  const phoneField = formLabels.find((x) => x.id === "phoneNum");
  const passwordField = formLabels.find((x) => x.id === "password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-xl">
      {phoneField && (
        <FormField
          icon={saudiIcon}
          showDivider={true}
          rightElement={
            '+966'
          }
          label={(phoneField.label ?? phoneField.text) as string}
          type={formLabels[2].type}
          placeholder={phoneField.placeholder}
          errorMessage={errors.phoneNumber?.message}
          hasError={!!errors.phoneNumber?.message}
          {...register("phoneNumber", {
          
            onChange: (e) => {
              e.target.value = e.target.value.replace(/\D/g, "").slice(0, 8);
            },
          })}
        />
      )}

      {passwordField && (
        <PasswordField
          label={(passwordField.label ?? passwordField.text) as string}
          placeholder={passwordField.placeholder}
          errorMessage={errors.password?.message}
            hasError={!!errors.password?.message}
          {...register("password")}
        />
      )}

      <div className="flex justify-between">
        <div className="flex items-center gap-md">
          <Checkbox
            checked={checked}
            onCheckedChange={() => setChecked((prev) => !prev)}
            id="remember"
          />
          <span>{tLabels("remember-me")}</span>
        </div>

        <Link href="/forget-password" className="text-brand-blue">
          {tLabels("forget-pass")}
        </Link>
      </div>

      <Button disabled={!isValid || isSubmitting} type="submit">
        {tLabels("header")}
      </Button>
    </form>
  );
};

export default LoginValidation;