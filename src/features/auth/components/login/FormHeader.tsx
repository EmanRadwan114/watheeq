import LogoImage from "@/components/shared/LogoImage";
import { useTranslations } from "next-intl";
import React from "react";

const FormHeader: React.FC = () => {
  const t = useTranslations("auth.login");
  return (
    <div className="flex flex-col gap-xl mb-xl">
      <LogoImage />
      <h1 className="heading-4 text-center">{t("form-labels.header")}</h1>
      <p className="text-third-foreground body-lg-medium leading-loose text-center">
        {t("form-labels.description")}
      </p>
    </div>
  );
};

export default FormHeader;
