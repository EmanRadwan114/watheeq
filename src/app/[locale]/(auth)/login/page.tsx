import LoginForm from "@/features/auth/components/login/LoginForm";
import AuthDesign from "@/features/auth/components/shared/AuthDesign";
import React from "react";

const Login: React.FC = () => {
  return (
    <AuthDesign>
      <LoginForm />
    </AuthDesign>
  );
};

export default Login;
