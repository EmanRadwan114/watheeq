"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import RegisterSteps from "./RegisterSteps";
import PersonalInfoForm from "./PersonalInfoForm";
import VerifyID from "./VerifyID";

const RegisterForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const t = useTranslations("auth.register.register-form");

  return (
    <div className="flex flex-col gap-2xl">
      {/* steps */}
      <section className="p-xl bg-white border border-gray-100 rounded-lg -translate-y-6 shadow">
        <RegisterSteps currentStep={currentStep} />
      </section>

      {/* register form */}
      <section className="py-2xl px-3xl bg-white border border-gray-100 rounded-lg shadow">
        {currentStep === 0 && (
          <PersonalInfoForm setCurrentStep={setCurrentStep} />
        )}

        {currentStep === 1 && <VerifyID setCurrentStep={setCurrentStep} />}
      </section>

      {/* login link */}
      <div className="flex gap-sm justify-center body-md-regular">
        <span>{t("verify-account.label")}</span>
        <Link href={"/login"} className="text-brand-blue">
          {t("verify-account.link-text")}
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
