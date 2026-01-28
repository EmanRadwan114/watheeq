import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import AuthPhoneInput from "@/components/shared/input-label";
import AuthDesign from "@/features/auth/components/shared/AuthDesign";
import LogoImage from "@/components/shared/LogoImage";
import { Button } from "@/components/ui/button";
const ForgetPassword: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <AuthDesign>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="md:px-4xl md:py-4xl  w-full bg-white"
      >
        <div className="h-full flex items-center justify-center ">
          <div className="w-full space-y-6">
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
              <LogoImage />
            </div>

            <div className={isRTL ? "text-right" : "text-left"}>
              <h1 className="heading-4 text-fourth-foreground">
                {t("forgetPassword.title")}
              </h1>
              <p className="mt-2 text-sm text-third-foreground">
                {t("forgetPassword.description")}
              </p>
            </div>

            <div className="space-y-4 ">
              <AuthPhoneInput label={t("forgetPassword.phoneLabel")} />
              <Button className="w-full bg-secondary">
                {t("forgetPassword.next")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthDesign>
  );
};

export default ForgetPassword;
