"use client";
import { OtpForm } from "@/features/auth/components/otp-ui";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import AuthButton from "@/components/shared/AuthButton";
import AuthDesign from "@/features/auth/components/shared/AuthDesign";
import LogoImage from "@/features/auth/components/shared/LogoImage";
interface IProps {}

const OTP: React.FC<IProps> = ({}) => {
  const t = useTranslations();
    const locale = useLocale();
    const isRTL = locale === "ar";
  return <> <AuthDesign>
      <section dir={isRTL ? "rtl" : "ltr"} className="h-screen bg-white">
        <div className="h-full flex items-center justify-center ">
          <div className="w-full space-y-6">
            
            

              <LogoImage />
              
          

          
            <div className={isRTL ? "text-right" : "text-left"}>
              <h1 className="heading-4 text-fourth-foreground">
                {t("otp.title")}
              </h1>
              <p className="mt-2 text-sm text-third-foreground">
                {t("otp.description")}
              </p>
              <span className="text-center text-sm text-third-foreground">**********212</span>
            </div>

            {/* Form */}
            <div className="space-y-4">
               <OtpForm />
              <AuthButton
                label={t("otp.login")}
                text={t("otp.login")}
                className="w-full bg-secondary"
              />
            </div>
          </div>
        </div>
      </section>
    </AuthDesign>
 
  </>;
};

export default OTP;
