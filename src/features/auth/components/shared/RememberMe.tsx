import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const RememberMe: React.FC<IProps> = ({ children }) => {
  const t = useTranslations("auth.login.form-labels");

  return (
    <div className="flex flex-col sm:flex-row gap-sm justify-between">
      <div className="flex items-center gap-md">
        {children}
        <span>{t("remember-me")}</span>
      </div>
      <Link href="/forget-password" className="text-brand-blue">
        {t("forget-pass")}
      </Link>
    </div>
  );
};

export default RememberMe;
