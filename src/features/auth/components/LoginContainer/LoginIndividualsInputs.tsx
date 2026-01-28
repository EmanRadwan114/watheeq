import eyeClosedIcon from "@/assets/icons/eye-slash.svg";
import React from "react";
import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";

interface IProps {}

const LoginIndividualsInputs: React.FC<IProps> = ({}) => {
  return (
    <>
      <div className="container">
        <div className="inner flex flex-col gap-xl">
          <FormField
            type="tel"
            showDivider
            placeholder="5XXXXXXXX"
            rightElement="+966"
            icon="/icons/saudi-arabia.svg"
            label="رقم الجوال"
          />
          <PasswordField
            showDivider={false}
            placeholder="*******"
            label="كلمة المرور"
          />
        </div>
      </div>
    </>
  );
};

export default LoginIndividualsInputs;
