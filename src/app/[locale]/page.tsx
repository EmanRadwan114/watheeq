"use client"
import LoginCompanies from "@/features/auth/components/LoginCompanies";
import LoginButton from "@/features/auth/components/LoginContainer/loginButton";
import LoginIndividualsInputs from "@/features/auth/components/LoginContainer/LoginIndividualsInputs";
import LoginIndividuals from "@/features/auth/components/LoginIndividuals";

export default function Home() {
  return (
    <>
      {/* <LoginIndividualsInputs />
      <LoginButton /> */}
      <LoginCompanies/>
      <LoginIndividuals/>
    </>
  );
}
