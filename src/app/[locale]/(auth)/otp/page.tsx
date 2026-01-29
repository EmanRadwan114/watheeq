"use client";
import { OtpForm } from "@/features/auth/components/Otp/otp-ui";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import AuthDesign from "@/features/auth/components/shared/AuthDesign";
import LogoImage from "@/components/shared/LogoImage";
import { Button } from "@/components/ui/button";
import OtpExpireTimer from "@/components/ui/otp-expire-timer";
import OtpHeader from "@/features/auth/components/Otp/FormHeaderOtp";


interface IProps {}

const OTP: React.FC<IProps> = ({}) => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [timerKey, setTimerKey] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [canResend, setCanResend] = useState(false);
 const [otp, setOtp] = useState("");
  const isOtpComplete = otp.length === 6;

const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isOtpComplete) return;

    // ✅ Verify OTP API
    // await verifyOtp({ otp })
  };

  const handleResend = async () => {
    // ✅ Resend OTP API
    // await resendOtp()

    // (اختياري) تفريغ الخانات بعد resend
    setOtp("");
  };
  return (
    <>
      <AuthDesign>
        <div dir={isRTL ? "rtl" : "ltr"} className="w-full  bg-white">
          <div className="h-full flex items-center justify-center">
            <div className="w-full space-y-6">
              <OtpHeader  />
              <form onSubmit={handleVerify} className="w-full  space-y-4">
                <OtpForm value={otp}  onChange={setOtp}/>
                <div className="flex items-center justify-center">
                <Button  type="submit" className="w-90 center bg-secondary">
                  {t("otp.login")}
                </Button>
                </div>

                <OtpExpireTimer
                durationSeconds={60}
                autoStart={true}
                onResend={handleResend}
              />
              </form>
            </div>
          </div>
        </div>
      </AuthDesign>
    </>
  );
};

export default OTP;
