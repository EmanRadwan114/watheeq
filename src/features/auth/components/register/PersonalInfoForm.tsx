import React, { useState } from "react";
import AuthSwitch from "../shared/AuthSwitch";
import RegisterIndividuals from "./RegisterIndividuals";
import RegisterCompanies from "./RegisterCompanies";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface IProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const PersonalInfoForm: React.FC<IProps> = ({ setCurrentStep }) => {
  const registerTypeParam = useSearchParams().get("type");

  const [type, setType] = useState(() =>
    registerTypeParam === "2" ? "type2" : "type1",
  );

  const t = useTranslations("auth.register.register-form");

  return (
    <div className="flex flex-col gap-xl">
      {/* form header */}
      <div className="flex flex-col gap-2.5 items-center">
        <h2 className="heading-6 text-center">{t("heading")}</h2>
        <div className="w-[40%]">
          <AuthSwitch type={type} setType={setType} />
        </div>
      </div>

      {/* forms */}
      {type === "type2" ? (
        <RegisterCompanies setCurrentStep={setCurrentStep} />
      ) : (
        <RegisterIndividuals setCurrentStep={setCurrentStep} />
      )}
    </div>
  );
};

export default PersonalInfoForm;
