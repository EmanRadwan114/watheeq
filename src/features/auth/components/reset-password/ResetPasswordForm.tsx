import React from "react";
import HeaderWithBack from "../shared/HeaderWithBack";
import { useTranslations } from "next-intl";
import PasswordField from "@/components/shared/PasswordField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

const ResetPasswordForm: React.FC = () => {
  const t = useTranslations("auth.reset-password");

  // react-hook-form & zod
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    // resolver: zodResolver(),
    mode: "onChange",
  });

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

  return (
    <div className="w-full lg:max-w-[80%] xl:max-w-[65%]">
      <HeaderWithBack translationKey="reset-password.header" />

      <form className="flex flex-col gap-xl">
        {newPassword && (
          <PasswordField
            label={newPassword.label}
            placeholder={newPassword.placeholder}
          />
        )}

        {confirmPassword && (
          <PasswordField
            label={confirmPassword.label}
            placeholder={confirmPassword.placeholder}
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
