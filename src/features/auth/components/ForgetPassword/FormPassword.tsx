"use client";
import React from "react";
import { useTranslations } from "next-intl";
import FormField from "@/components/shared/FormField";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface IProps {
  onSubmitSuccess?: (phone: string) => void;
}

type TForgetPasswordInput = {
  phone: string;
};

const ForgetPasswordForm: React.FC<IProps> = ({ onSubmitSuccess }) => {
  const t = useTranslations();

  // ✅ schema (لو عندك validation file خارجي، استعمله بدل ده)
  const schema = z.object({
    phone: z
      .string()
      .min(9, { message: t("forgetPassword.validation-errors.phone.validation-msg") })
      .max(9, { message: t("forgetPassword.validation-errors.phone.validation-msg") }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TForgetPasswordInput>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { phone: "" },
  });

  const labelsT = useTranslations("auth.login.form-labels");
  const formLabels = labelsT.raw("labels") as {
    id: string;
    label: string;
    type: string;
    placeholder: string;
  }[];

  const phoneField = formLabels[2];

  const onSubmit: SubmitHandler<TForgetPasswordInput> = async (data) => {
    // لو شفناها call API هنا
    console.log("ForgetPassword:", data);

    onSubmitSuccess?.(data.phone);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        icon="/icons/saudi-arabia.svg"
        showDivider={true}
        rightElement={<span className="text-sm text-third-foreground">966+</span>}
        label={phoneField.label}
        type={phoneField.type}
        placeholder={phoneField.placeholder}
        hasError={!!errors.phone}
        errorMessage={errors.phone?.message}
        {...register("phone", { required: true })}
      />

      <Button
        type="submit"
        className="w-full bg-secondary"
        disabled={!isValid || isSubmitting}
      >
        {t("forgetPassword.next")}
      </Button>
    </form>
  );
};

export default ForgetPasswordForm;
