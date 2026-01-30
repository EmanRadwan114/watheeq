"use client";
import LoginCompanies from "@/features/auth/components/login/LoginCompanies";
import LoginButton from "@/features/auth/components/LoginContainer/loginButton";
import LoginIndividualsInputs from "@/features/auth/components/LoginContainer/LoginIndividualsInputs";
import LoginIndividuals from "@/features/auth/components/login/LoginIndividuals";
import LoginValidation from "@/features/auth/FormValidation/LoginValidation";
import ForgetPassword from "./(auth)/forget-password/page";
import LoginForm from "@/features/auth/components/login/LoginForm";

export default function Home() {
  return (
    <>
      {/* <LoginValidation/> */}
      <ForgetPassword />
      {/* <LoginForm/> */}
    </>
  );
}
