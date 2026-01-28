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
  return <> 
  <AuthDesign>
      <div dir={isRTL ? "rtl" : "ltr"} className="w-full  bg-white">
        <div className="h-full flex items-center justify-center">
          <div className="w-full space-y-6">
              <LogoImage />
          
            <div className={` flex-col justify-center items-center${isRTL ? "text-right" : "text-left"}`}>
              <h1 className="heading-4 text-fourth-foreground">
                {t("otp.title")}
              </h1>
              <p className="mb-lg mt-xl text-sm text-third-foreground">
                {t("otp.description")}
              </p>
              <span className="block text-center text-sm text-third-foreground">**********212</span>
            </div>
            {/* Form */}
            <div className="space-y-4  text-center flex flex-col justify-center items-center" >
               <OtpForm />
              <AuthButton
                label={t("otp.login")}
                text={t("otp.login")}
                className="w-1vh bg-secondary"
              />
            </div>
          </div>
        </div>
      </div>
  </AuthDesign>
 
  </>;
};

export default OTP;
