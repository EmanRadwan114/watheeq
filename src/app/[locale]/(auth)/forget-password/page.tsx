import React from "react";
import { useLocale } from "next-intl";
import AuthDesign from "@/features/auth/components/shared/AuthDesign";
import ForgetPasswordHeader from "@/features/auth/components/ForgetPassword/HeaderPassword";
import ForgetPasswordForm from "@/features/auth/components/ForgetPassword/FormPassword"

interface IProps {}

const ForgetPassword: React.FC<IProps> = ({}) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <AuthDesign>
      <div dir={isRTL ? "rtl" : "ltr"} className="md:px-4xl md:py-4xl w-full bg-white">
        <div className="h-full flex items-center justify-center">
          <div className="w-full space-y-6">
            <ForgetPasswordHeader />
            <ForgetPasswordForm />
          </div>
        </div>
      </div>
    </AuthDesign>
  );
};

export default ForgetPassword;
