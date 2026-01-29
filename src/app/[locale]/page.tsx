"use client"
import LoginCompanies from "@/features/auth/components/LoginCompanies";
import LoginButton from "@/features/auth/components/LoginContainer/loginButton";
import LoginIndividualsInputs from "@/features/auth/components/LoginContainer/LoginIndividualsInputs";
import LoginIndividuals from "@/features/auth/components/LoginIndividuals";
import LoginValidation from "@/features/auth/FormValidation/LoginValidation";
import ForgetPassword from "./(auth)/forget-password/page";
import LoginForm from "@/features/auth/components/LoginForm";

export default function Home() {
  return (
    <>
{/* <LoginValidation/> */}
<ForgetPassword/>
{/* <LoginForm/> */}
    </>
  );
}
