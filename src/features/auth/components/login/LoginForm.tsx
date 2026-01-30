"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import LoginCompanies from "./LoginCompanies";
import LoginIndividuals from "./LoginIndividuals";
import LoginSwitch from "./LoginSwitch";
import { useSearchParams } from "next/navigation";

const LoginForm: React.FC = () => {
  const loginTypeParam = useSearchParams().get("type");

  const [type, setType] = useState(() =>
    loginTypeParam === "2" ? "type2" : "type1",
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="w-full lg:max-w-[95%] xl:max-w-[80%]">
      <FormHeader />

      <section className="py-5 px-xl sm:px-7.5 shadow rounded-sm">
        <LoginSwitch type={type} setType={setType} />

        <div>
          {type === "type2" ? <LoginCompanies /> : <LoginIndividuals />}
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
