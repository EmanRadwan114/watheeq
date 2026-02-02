"use client";

import React from "react";
import {  useTranslations } from "next-intl";
import LogoImage from "@/components/shared/LogoImage";
interface IProps {
  maskedPhone?: string;
}

const OtpHeader: React.FC<IProps> = ({ maskedPhone = "****212" }) => {
  const t = useTranslations();
 


  return (
    <>
      <LogoImage />

      <div
        className='flex flex-col justify-center items-center' 
      >
        <h1 className="heading-4 text-fourth-foreground">{t("otp.title")}</h1>

        <p className="mb-lg mt-xl text-sm text-third-foreground">
          {t("otp.description")}
        </p>

        <span className="block text-center text-sm text-third-foreground">
          {maskedPhone}
        </span>
      </div>
    </>
  );
};

export default OtpHeader;