"use client";

import React, { useState } from "react";
import HeaderWithBack from "../shared/HeaderWithBack";
import { useTranslations } from "next-intl";
import PasswordField from "@/components/shared/PasswordField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getResetPassSchema,
  TResetPassSchemaInput,
} from "../../validation/reset-password.validation";
import SuccessMsg from "@/components/shared/SuccessMsg";
import { Link } from "@/i18n/navigation";

const ResetPasswordForm: React.FC = () => {
  const [isResetSuccess, setIsResetSuccess] = useState(false);

  const t = useTranslations("auth.reset-password");

  // react-hook-form & zod
  const ResetPasswordSchema = getResetPassSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TResetPassSchemaInput>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TResetPassSchemaInput> = (data) => {
    console.log(data);
    setIsResetSuccess(true);
  };

  // form labels
  const formLabels = t.raw("form-labels") as Array<{
    id: string;
    label: string;
    type: string;
    placeholder: string;
  }>;

  const newPassword = formLabels.find((item) => item.id === "new-password");
  const confirmPassword = formLabels.find(
    (item) => item.id === "confirm-password",
  );

  // show success msg after resetting password
  if (isResetSuccess)
    return (
      <div className="flex flex-col gap-3xl">
        <SuccessMsg
          title={t("success-state.title")}
          description={t("success-state.description")}
        />
        <Link href={"/login"}>
          <Button>{t("login")}</Button>
        </Link>
      </div>
    );

  return (
    <div className="w-full lg:max-w-[80%] xl:max-w-[65%]">
      <HeaderWithBack translationKey="auth.reset-password.header" />

      <form className="flex flex-col gap-xl" onSubmit={handleSubmit(onSubmit)}>
        {newPassword && (
          <PasswordField
            label={newPassword.label}
            placeholder={newPassword.placeholder}
            hasError={!!errors.newPassword?.message}
            errorMessage={
              errors.newPassword?.message ? errors.newPassword.message : ""
            }
            {...register("newPassword", { required: true })}
          />
        )}

        {confirmPassword && (
          <PasswordField
            label={confirmPassword.label}
            placeholder={confirmPassword.placeholder}
            hasError={!!errors.confirmPassword?.message}
            errorMessage={
              errors.confirmPassword?.message
                ? errors.confirmPassword?.message
                : ""
            }
            {...register("confirmPassword", { required: true })}
          />
        )}

        <Button type="submit" disabled={!isValid}>
          {t("submit-text")}
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
