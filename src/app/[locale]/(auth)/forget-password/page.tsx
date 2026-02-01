import React from "react";
import AuthDesign from "@/features/auth/components/shared/AuthDesign";
import ForgetPasswordHeader from "@/features/auth/components/ForgetPassword/HeaderPassword";
import ForgetPasswordForm from "@/features/auth/components/ForgetPassword/FormPassword";
import HeaderWithBack from "@/features/auth/components/shared/HeaderWithBack";

const ForgetPassword: React.FC = () => {
  return (
    <AuthDesign>
      <div className="md:px-4xl md:py-4xl w-full bg-white">
        <div className="h-full flex items-center justify-center">
          <div className="w-full space-y-6">
            {/* <ForgetPasswordHeader /> */}
            <HeaderWithBack translationKey="forgetPassword" />
            <ForgetPasswordForm />
          </div>
        </div>
      </div>
    </AuthDesign>
  );
};

export default ForgetPassword;
