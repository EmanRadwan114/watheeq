import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const LoginCompanies: React.FC = () => {
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
      <form className="flex flex-col gap-xl">
        <FormField
          label={formLabels[0].label}
          type={formLabels[0].type}
          placeholder={formLabels[0].placeholder}
        />
        <PasswordField
          label={formLabels[1].label}
          placeholder={formLabels[1].placeholder}
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
        {/* submit */}
        <Button type="submit">{t("header")}</Button>
      </form>

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

export default LoginCompanies;
