'use client' ;
import React from "react";
import BackBtn from "./BackBtn";
import LogoImage from "@/components/shared/LogoImage";
import { useTranslations } from "next-intl";

interface IProps {
  translationKey: string;
}

const HeaderWithBack: React.FC<IProps> = ({ translationKey }) => {
  const t = useTranslations("auth");

  return (
    <div className="flex flex-col gap-xl">
      <BackBtn />
      <div className="flex flex-col gap-xl mb-xl">
        <LogoImage />
        <h1 className="heading-4">{t(`${translationKey}.title`)}</h1>
        <p className="text-third-foreground body-lg-medium leading-loose">
          {t(`${translationKey}.description`)}
        </p>
      </div>
    </div>
  );
};

export default HeaderWithBack;
