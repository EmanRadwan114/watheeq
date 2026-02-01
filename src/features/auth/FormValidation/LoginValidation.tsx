"use client";

import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import saudiIcon from "../../../assets/icons/saudi-arabia.svg";
import {
  getLoginIndividualsSchema,
  TLoginIndividualsInput,
} from "../validation/login-individuals.validation";
import { useState } from "react";
import RememberMe from "../components/shared/RememberMe";

const LoginValidation: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const tLogin = useTranslations("auth.login");
  const tLabels = useTranslations("auth.login.form-labels");

  const loginIndividualsSchema = getLoginIndividualsSchema(tLogin);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
          rightElement={"+966"}
          label={(phoneField.label ?? phoneField.text) as string}
          type={formLabels[2].type}
          placeholder={phoneField.placeholder}
          errorMessage={errors.phoneNumber?.message}
          hasError={!!errors.phoneNumber?.message}
          {...register("phoneNumber")}
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

      {/* remember me */}
      <RememberMe>
        <Checkbox
          checked={checked}
          onCheckedChange={() => setChecked((prev) => !prev)}
          id="remember"
        />
      </RememberMe>

      <Button type="submit" disabled={!isValid}>
        {tLabels("header")}
      </Button>
    </form>
  );
};

export default LoginValidation;
