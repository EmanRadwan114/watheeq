"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/i18n/navigation";
import RegisterSteps from "./RegisterSteps";
import PersonalInfoForm from "./PersonalInfoForm";
import VerifyID from "./VerifyID";
import ClientType from "./ClientType";
import { useAppSelector } from "@/redux-toolkit/hooks";

const RegisterForm: React.FC = () => {
  const t = useTranslations("auth.register.register-form");
  const currentStep = useAppSelector((state) => state.register.currentStep);

  return (
    <div className="flex flex-col gap-2xl">
      {/* steps */}
      <section className="p-xl bg-white border border-gray-100 rounded-lg -translate-y-6 shadow">
        <RegisterSteps />
      </section>

      {/* register form */}
      <section className="py-2xl px-3xl bg-white border border-gray-100 rounded-lg shadow">
        {currentStep === 0 && <PersonalInfoForm />}

        {currentStep === 1 && <VerifyID />}
        {currentStep === 3 && <ClientType />}
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
