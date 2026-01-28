"use client";
import { OtpForm } from "@/features/auth/components/otp-ui";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import AuthDesign from "@/features/auth/components/shared/AuthDesign";
import LogoImage from "@/components/shared/LogoImage";
import { Button } from "@/components/ui/button";
import OtpExpireTimer from "@/components/ui/otp-expire-timer";

interface IProps {}

const OTP: React.FC<IProps> = ({}) => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [timerKey, setTimerKey] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [canResend, setCanResend] = useState(false);

  const handleVerify = async () => {
    // هنا تعمل Verify OTP API لو عندك
    // await verifyOtp()

    // ابدأ العداد بعد الضغط
    setTimerKey((k) => k + 1);
    setTimerRunning(true);
    setCanResend(false);
  };
  const handleTimerComplete = () => {
    setTimerRunning(false);
    setCanResend(true);
  };

  const handleResend = async () => {
    if (!canResend) return;

    // هنا تعمل Resend OTP API
    // await resendOtp()

    // بعد الإرسال، ابدأ عداد جديد واقفل الزر
    setTimerKey((k) => k + 1);
    setTimerRunning(true);
    setCanResend(false);
  };
  return (
    <>
      <AuthDesign>
        <div dir={isRTL ? "rtl" : "ltr"} className="w-full  bg-white">
          <div className="h-full flex items-center justify-center">
            <div className="w-full space-y-6">
              <LogoImage />

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
              <div className="space-y-4  text-center flex flex-col justify-center items-center">
                <OtpForm />
                <Button className="w-1vh bg-secondary">
                  {" "}
                  {t("otp.login")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AuthDesign>
    </>
  );
};

export default OTP;
