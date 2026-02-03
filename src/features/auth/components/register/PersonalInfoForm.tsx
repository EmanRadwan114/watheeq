import React from "react";
import AuthSwitch from "../shared/AuthSwitch";
import RegisterIndividuals from "./RegisterIndividuals";
import RegisterCompanies from "./RegisterCompanies";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/redux-toolkit/hooks";

const PersonalInfoForm: React.FC = () => {
  const clientType = useAppSelector((state) => state.register.clientType);

  const t = useTranslations("auth.register.register-form");

  return (
    <div className="flex flex-col gap-xl">
      {/* form header */}
      <div className="flex flex-col gap-2.5 items-center">
        <h2 className="heading-6 text-center">{t("heading")}</h2>
        <div className="w-[40%]">
          <AuthSwitch switchType="register" />
        </div>
      </div>

      {/* forms */}
      {clientType === "2" ? <RegisterCompanies /> : <RegisterIndividuals />}
    </div>
  );
};

export default PersonalInfoForm;
