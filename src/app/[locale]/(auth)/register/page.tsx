import RegisterForm from "@/features/auth/components/register/RegisterForm";
import RegisterHeader from "@/features/auth/components/register/RegisterHeader";
import React from "react";

const Register: React.FC = () => {
  return (
    <>
      <RegisterHeader />
      <main className="bg-light-gray min-h-screen pb-5xl px-xl lg:px-0">
        <div className="lg:w-4/5 m-auto">
          <RegisterForm />
        </div>
      </main>
    </>
  );
};

export default Register;
