"use client";

import React, { useState } from "react";
import FormHeader from "./FormHeader";
import LoginCompanies from "./LoginCompanies";
import LoginIndividuals from "./LoginIndividuals";
import LoginSwitch from "./LoginSwitch";

const LoginForm: React.FC = () => {
  const [type, setType] = useState("type1");

  return (
    <div className="w-full lg:max-w-[78%]">
      <FormHeader />

      <section className="py-5 px-7.5 shadow rounded-sm">
        <LoginSwitch type={type} setType={setType} />

        <div>
          {type === "type2" ? <LoginCompanies /> : <LoginIndividuals />}
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
