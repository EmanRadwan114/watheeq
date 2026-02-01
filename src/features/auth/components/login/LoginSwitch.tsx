import React from "react";
import { useTranslations } from "use-intl";
import { Label } from "@/components/ui/label";
import AuthSwitch from "../shared/AuthSwitch";

interface IProps {
  type: string;
  setType: (type: string) => void;
}

const LoginSwitch: React.FC<IProps> = ({ type, setType }) => {
  const t = useTranslations("auth");

  return (
    <div className="flex-1 flex flex-col gap-2.5 mb-2xl">
      <Label>{t("login.form-labels.switch-type")}</Label>
      <AuthSwitch type={type} setType={setType} />
    </div>
  );
};

export default LoginSwitch;
