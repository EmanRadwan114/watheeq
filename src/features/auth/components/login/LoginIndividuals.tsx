import React from "react";
import LoginValidation from "../../FormValidation/LoginValidation";
import RegisterLink from "../shared/RegisterLink";

const LoginIndividuals: React.FC = () => {
  return (
    <div className="flex flex-col gap-xl">
      <LoginValidation />

      {/* register */}
      <RegisterLink />
    </div>
  );
};

export default LoginIndividuals;
