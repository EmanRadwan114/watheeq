import AuthPhoneInput from "@/components/shared/input-label";
import passwordIcon from "@/assets/icons/eye-slash.svg";
import SaudiArabia from "/saudi-arabia.svg";

import React from "react";

interface IProps {}

const LoginInputs: React.FC<IProps> = ({}) => {
  return <>
  <div className="container">
    <div className="inner">
        <AuthPhoneInput type="tel" showDivider placeholder="5XXXXXXXX" num="966+" src="/icons/saudi-arabia.svg" label="رقم الجوال"/>
        <AuthPhoneInput type="password" showDivider={false} placeholder="*******" num="" src={passwordIcon} label="كلمة المرور"/>
    </div>
  </div>
  </>;
};

export default LoginInputs;
