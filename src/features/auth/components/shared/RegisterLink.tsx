import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const RegisterLink: React.FC = () => {
  const t = useTranslations("auth.login.form-labels");

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-stretch gap-sm sm:justify-center">
      <span>{t("no-account")}</span>
      <Link href="/register" className="text-brand-blue">
        {t("create-account")}
      </Link>
    </div>
  );
};

export default RegisterLink;
