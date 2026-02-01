"use client";

import { OtpForm } from "@/features/auth/components/Otp/otp-ui";
import { useState } from "react";
import { useTranslations } from "next-intl";
import AuthDesign from "@/features/auth/components/shared/AuthDesign";
import { Button } from "@/components/ui/button";
import OtpExpireTimer from "@/components/ui/otp-expire-timer";
import OtpHeader from "@/features/auth/components/Otp/FormHeaderOtp";
import { useRouter } from "@/i18n/navigation";

const OTP: React.FC = () => {
  const t = useTranslations("otp");
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [startSignal, setStartSignal] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isOtpDisabled, setIsOtpDisabled] = useState(false);
  const isOtpComplete = otp.length === 6;

  const handleVerify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/reset-password");

    if (!isOtpComplete) return;
    console.log("OTP:", otp);
    setStartSignal((s) => s + 1);
    setOtp("");
  };

  const handleResend = async () => {
    try {
      //  Resend OTP API
      setOtp("");
    } catch (err) {
      console.error("Resend OTP failed:", err);
    }
  };

  return (
    <AuthDesign>
      <div className="w-full bg-white">
        <div className="h-full flex items-center justify-center">
          <div className="w-full space-y-6">
            <OtpHeader />

            <form onSubmit={handleVerify} className="w-full space-y-4">
              <OtpForm value={otp} onChange={setOtp} disabled={isOtpDisabled} />

              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  className="w-90 center bg-secondary"
                  disabled={isButtonDisabled}
                >
                  {t("login")}
                </Button>
              </div>

              <OtpExpireTimer
                durationSeconds={60}
                autoStart={true}
                startSignal={startSignal}
                onResend={handleResend}
                onFinished={() => {
                  setIsButtonDisabled(false);
                  setIsOtpDisabled(false);
                }}
                storageKey="otp_end_at_verify"
              />
            </form>
          </div>
        </div>
      </div>
    </AuthDesign>
  );
};

export default OTP;
