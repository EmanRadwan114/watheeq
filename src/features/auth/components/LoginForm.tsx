"use client";

import React, { useState } from "react";
import LoginSwitch from "./LoginSwitch";

const LoginForm: React.FC = () => {
    const [type, setType] = useState("type1");
  
  return (
    <div className="flex-1">
      <LoginSwitch type={type} setType={setType} />

      <section>
        {type === "type2"
          ? "component for companies"
          : "component for individuals"}
      </section>
    </div>
  );
};

export default LoginForm;
