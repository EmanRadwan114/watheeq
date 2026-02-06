"use client";
import React from "react";
import OtpHeader from "@/features/auth/components/Otp/FormHeaderOtp";
import OtpVerifyForm from "@/features/auth/components/Otp/OtpVerifyForm";

const OtpContainer: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="h-full flex items-center justify-center">
        <div className="w-full space-y-6">
          <OtpHeader maskedPhone="**********212" />
          <OtpVerifyForm
            durationSeconds={60}
            storageKey="otp_end_at_verify"
            onResend={() => {
              // call resend api here
            }}
            onVerify={async (otp) => {
              // call verify api here
              console.log("OTP from onVerify:", otp);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OtpContainer;
