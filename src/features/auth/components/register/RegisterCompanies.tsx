import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";
import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import calenderIcon from "@/assets/icons/calendar.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getRegisterCompaniesSchema,
  TRegisterCompaniesSchema,
} from "../../validation/register.validation";
import PasswordCheck from "../shared/PasswordCheck";
import { useAppDispatch } from "@/redux-toolkit/hooks";
import { changeStep } from "../../store/register.slice";

const RegisterCompanies: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const t = useTranslations("auth.register.register-form");

  const registerCompaniesSchems = getRegisterCompaniesSchema(t);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<TRegisterCompaniesSchema>({
    resolver: zodResolver(registerCompaniesSchems),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TRegisterCompaniesSchema> = (data) => {
    console.log(data);
    dispatch(changeStep(1));
  };

  const formData = t.raw("companies") as Array<{
    id: string;
    type: string;
    label: string;
    placeholder: string;
  }>;

  //   password checks
  const passwordValue = watch("password");
  const passwordChecksData: { key: string; condition: boolean }[] = [
    { key: "password-checks.length", condition: passwordValue?.length >= 8 },
    {
      key: "password-checks.numbers",
      condition: /[0-9]{1,}/g.test(passwordValue),
    },
    {
      key: "password-checks.capital-letter",
      condition: /[A-Z]{1,}/g.test(passwordValue),
    },
    {
      key: "password-checks.symbols",
      condition: /(\$|%|#|\*|&|@|_){1,}/g.test(passwordValue),
    },
    {
      key: "password-checks.small-letter",
      condition: /[a-z]{1,}/g.test(passwordValue),
    },
  ];

  return (
    <form className="flex flex-col gap-xl" onSubmit={handleSubmit(onSubmit)}>
      {/* fields */}
      <div className="w-full grid md:grid-cols-2 gap-3xl">
        {formData.map((item) => {
          const { ref, ...rest } = register(
            item.id as keyof TRegisterCompaniesSchema,
          );
          const fieldId = item.id as keyof TRegisterCompaniesSchema;
          return (
            <div key={fieldId} className="">
              {fieldId === "password" ? (
                <PasswordField
                  label={item.label}
                  placeholder={item.placeholder}
                  hasError={!!errors[fieldId]?.message}
                  errorMessage={errors[fieldId] ? errors[fieldId]?.message : ""}
                  {...register(fieldId, { required: true })}
                />
              ) : fieldId === "birthDate" ? (
                <FormField
                  {...rest}
                  label={item.label}
                  type={item.type}
                  placeholder={item.placeholder}
                  icon={calenderIcon}
                  wrapperClassName="relative"
                  hasError={!!errors[fieldId]?.message}
                  errorMessage={errors[fieldId] ? errors[fieldId]?.message : ""}
                  {...register(fieldId, { required: true })}
                  ref={(e) => {
                    ref(e);
                    dateRef.current = e;
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  onClick={() => {
                    if (dateRef.current) {
                      dateRef.current.type = "date";
                      dateRef.current.showPicker();
                    }
                  }}
                />
              ) : (
                <FormField
                  label={item.label}
                  type={item.type}
                  placeholder={item.placeholder}
                  hasError={!!errors[fieldId]?.message}
                  errorMessage={errors[fieldId] ? errors[fieldId]?.message : ""}
                  {...register(fieldId, { required: true })}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* validation checks */}
      <div className="grid md:grid-cols-2 gap-x-2xl gap-y-lg mb-sm">
        {passwordChecksData.map((item) => (
          <PasswordCheck
            key={item.key}
            checkInfo={t(item.key)}
            isValid={item.condition}
          />
        ))}
      </div>

      {/* accept terms & conditions */}
      <div className="flex items-center gap-md mb-2.5">
        <Checkbox
          checked={checked}
          onCheckedChange={() => setChecked((prev) => !prev)}
          id="accept-terms"
        />
        <span>{t("accept-terms")}</span>
      </div>

      {/* submit */}
      <Button className="w-1/2 m-auto" disabled={!isValid}>
        {t("submit")}
      </Button>
    </form>
  );
};

export default RegisterCompanies;
