"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import AuthSwitch from "../shared/AuthSwitch";
import RegisterIndividuals from "./RegisterIndividuals";
import RegisterCompanies from "./RegisterCompanies";
import { Link } from "@/i18n/navigation";
import RegisterSteps from "./RegisterSteps";

const RegisterForm: React.FC = () => {
  const registerTypeParam = useSearchParams().get("type");

  const [type, setType] = useState(() =>
    registerTypeParam === "2" ? "type2" : "type1",
  );

  const t = useTranslations("auth.register.register-form");

  return (
    <div className="flex flex-col gap-2xl">
      {/* steps */}
      <section className="p-xl bg-white border border-gray-100 rounded-lg -translate-y-6 shadow">
        <RegisterSteps />
      </section>

      {/* register form */}
      <section className="py-2xl px-3xl bg-white border border-gray-100 rounded-lg shadow">
        <div className="flex flex-col gap-xl">
          {/* form header */}
          <div className="flex flex-col gap-2.5 items-center">
            <h2 className="heading-6 text-center">{t("heading")}</h2>
            <div className="w-[40%]">
              <AuthSwitch type={type} setType={setType} />
            </div>
          </div>

          {/* forms */}
          {type === "type2" ? <RegisterCompanies /> : <RegisterIndividuals />}
        </div>
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
