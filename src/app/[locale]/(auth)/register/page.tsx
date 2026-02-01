import RegisterForm from "@/features/auth/components/register/RegisterForm";
import RegisterHeader from "@/features/auth/components/register/RegisterHeader";
import RegisterSteps from "@/features/auth/components/register/RegisterSteps";
import React from "react";

const Register: React.FC = () => {
  return (
    <>
      <RegisterHeader />
      <main className="bg-light-gray min-h-screen pb-5xl">
        <div className="w-4/5 m-auto">
          <RegisterForm />
        </div>
      </main>
    </>
  );
};

export default Register;
