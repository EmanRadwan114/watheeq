import ResetPasswordForm from "@/features/auth/components/reset-password/ResetPasswordForm";
import AuthDesign from "@/features/auth/components/shared/AuthDesign";
import React from "react";

const ResetPassword: React.FC = () => {
  return (
    <AuthDesign>
      <ResetPasswordForm />
    </AuthDesign>
  );
};

export default ResetPassword;
