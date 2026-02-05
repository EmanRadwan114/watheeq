"use client";

import React, { useEffect, useRef } from "react";
import FormHeader from "./FormHeader";
import LoginCompanies from "./LoginCompanies";
import LoginIndividuals from "./LoginIndividuals";
import LoginSwicth from "./LoginSwitch";
import { useAppSelector } from "@/redux-toolkit/hooks";

const LoginForm: React.FC = () => {
  const clientType = useAppSelector((state) => state.login.clientType);

  const screenWidth = useRef(1024);

  useEffect(() => {
    if (typeof window != undefined) {
      screenWidth.current = window.screen.width;
      console.log(screenWidth.current);

      if (screenWidth.current >= 1024) {
        document.body.style.overflow = "hidden";
      }
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="w-full lg:max-w-[95%] xl:max-w-[80%]">
      <FormHeader />

      <section className="py-5 px-xl sm:px-7.5 shadow rounded-sm">
        <LoginSwicth />

        <div>
          {clientType === "2" ? <LoginCompanies /> : <LoginIndividuals />}
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
