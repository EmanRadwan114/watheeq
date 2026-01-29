import LogoImage from "@/components/shared/LogoImage";
import { useTranslations } from "next-intl";
import React from "react";

const FormHeader: React.FC = () => {
  const t = useTranslations();
  return (
    <div
                className={` flex-col justify-center items-center${isRTL ? "text-right" : "text-left"}`}
              >
                <h1 className="heading-4 text-fourth-foreground">
                  {t("otp.title")}
                </h1>
                <p className="mb-lg mt-xl text-sm text-third-foreground">
                  {t("otp.description")}
                </p>
                <span className="block text-center text-sm text-third-foreground">
                  **********212
                </span>
              </div>
  );
};

export default FormHeader;
