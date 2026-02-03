import Image from "next/image";
import React from "react";
import nafazImg from "@/assets/images/nafaz.jpg";
import { useTranslations } from "next-intl";
import OtpContainerRegister from "./OtpContainerRegister";

const VerifyID: React.FC = () => {
  const t = useTranslations("auth.register.verify-id");
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-xl items-center lg:w-[35%] text-center">
        <Image src={nafazImg} alt="nafaz logo" />
        <h1 className="heading-4 text-blue-950">{t("heading")}</h1>
        <p className="body-lg-medium text-third-foreground">
          {t("description")}
        </p>

        {/* timer code */}
        <OtpContainerRegister />
      </div>
    </div>
  );
};

export default VerifyID;
