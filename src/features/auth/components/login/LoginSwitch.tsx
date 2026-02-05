import React from "react";
import { useTranslations } from "use-intl";
import { Label } from "@/components/ui/label";
import AuthSwitch from "../shared/AuthSwitch";

const LoginSwitch: React.FC = () => {
  const t = useTranslations("auth");

  return (
    <div className="flex-1 flex flex-col gap-2.5 mb-2xl">
      <Label>{t("login.form-labels.switch-type")}</Label>
      <AuthSwitch switchType="login" />
    </div>
  );
};

export default LoginSwitch;
