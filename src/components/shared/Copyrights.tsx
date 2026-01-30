"use client"
import { useTranslations } from "next-intl";
import React, { useRef } from "react";

const Copyrights: React.FC = () => {
  const t = useTranslations("auth");
  const date = useRef(new Date());
  return (
    <p className="absolute text-md-regular text-white end-5 bottom-6">
      {t("welcome.copyrights")} {date.current.getFullYear()}
    </p>
  );
};

export default Copyrights;
