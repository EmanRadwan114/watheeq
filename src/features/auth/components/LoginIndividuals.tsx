import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import LoginValidation from "../FormValidation/LoginValidation";

const LoginIndividuals: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const t = useTranslations("auth.login.form-labels");
  const formLabels = t.raw("labels") as {
    id: string;
    label: string;
    type: string;
    placeholder: string;
  }[];

  return (
    <div className="flex flex-col gap-xl">
   <LoginValidation/>

      {/* register */}
      <div className="flex gap-sm justify-center">
        <span>{t("no-account")}</span>
        <Link href="/register" className="text-brand-blue">
          {t("create-account")}
        </Link>
      </div>
    </div>
  );
};

export default LoginIndividuals;
