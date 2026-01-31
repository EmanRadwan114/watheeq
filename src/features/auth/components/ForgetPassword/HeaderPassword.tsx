"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import LogoImage from "@/components/shared/LogoImage";

interface IProps {}

const ForgetPasswordHeader: React.FC<IProps> = ({}) => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="space-y-4">
      <div className={isRTL ? "text-right" : "text-left"}>
        <Link
          href="/login"
          className="flex items-center gap-2 body-sm-regular text-primary-foreground"
        >
          {isRTL ? (
            <>
              <ArrowRight className="h-4 w-4" />
              {t("forgetPassword.back")}
            </>
          ) : (
            <>
              <ArrowLeft className="h-4 w-4" />
              {t("forgetPassword.back")}
            </>
          )}
        </Link>

        <Link href="/login">
          <LogoImage />
        </Link>
      </div>

      <div className={isRTL ? "text-right" : "text-left"}>
        <h1 className="heading-4 text-fourth-foreground">
          {t("forgetPassword.title")}
        </h1>
        <p className="mt-2 text-sm text-third-foreground">
          {t("forgetPassword.description")}
        </p>
      </div>
    </div>
  );
};

export default ForgetPasswordHeader;
