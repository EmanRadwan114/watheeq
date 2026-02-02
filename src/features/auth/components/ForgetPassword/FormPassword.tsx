"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/shared/FormField";
import { Button } from "@/components/ui/button";
import {
  getForgetPasswordSchema,
  TForgetPasswordInput,
} from "../../validation/forget-password.validation";
import { Link } from "@/i18n/navigation";
import saudiIcon from "@/assets/icons/saudi-arabia.svg";

interface IProps {
  onSubmitSuccess?: (phone: string) => void;
}

const ForgetPasswordForm: React.FC<IProps> = ({ onSubmitSuccess }) => {
  const tLogin = useTranslations("auth.login");
  const tLabels = useTranslations("auth.login.form-labels");
  const tForget = useTranslations();

  const schema = getForgetPasswordSchema(tLogin);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TForgetPasswordInput>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { phoneNumber: "" },
  });

  const formLabels = tLabels.raw("labels") as {
    id: string;
    label?: string;
    text?: string;
    type: string;
    placeholder: string;
  }[];

  const phoneField = formLabels.find((x) => x.id === "phoneNum");

  const onSubmit: SubmitHandler<TForgetPasswordInput> = async (data) => {
    const fullPhone = `966${data.phoneNumber}`;
    console.log("ForgetPassword:", { ...data, fullPhone });
    onSubmitSuccess?.(data.phoneNumber);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {phoneField && (
        <FormField
          icon={saudiIcon}
          showDivider={true}
          rightElement="+966"
          label={(phoneField.label ?? phoneField.text) as string}
          type={formLabels[2].type}
          placeholder={phoneField.placeholder}
          hasError={!!errors.phoneNumber?.message}
          errorMessage={errors.phoneNumber?.message}

          {...register("phoneNumber")}

        />
      )}

      <Link href={"/otp"}>
        <Button
          type="submit"
          className="w-full bg-secondary"
          disabled={!isValid}
        >
          {tForget("forgetPassword.next")}
        </Button>
      </Link>
    </form>
  );
};

export default ForgetPasswordForm;
