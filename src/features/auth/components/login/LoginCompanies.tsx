import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import RememberMe from "../shared/RememberMe";
import RegisterLink from "../shared/RegisterLink";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import {
  getLoginCompaniesSchema,
  TLoginSchemaInput,
} from "../../validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginCompanies: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const t = useTranslations("auth.login");

  // react-hook-form & zod
  const loginCompaniesSchema = getLoginCompaniesSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TLoginSchemaInput>({
    resolver: zodResolver(loginCompaniesSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<TLoginSchemaInput> = (data) =>
    console.log(data);

  console.log(errors);

  const formLabels = t.raw("form-labels.labels") as {
    id: string;
    label: string;
    type: string;
    placeholder: string;
  }[];

  const unifiedNum = formLabels.find((item) => item.id === "unifiedNum");
  const passwordLabel = formLabels.find((item) => item.id === "password");

  return (
    <div className="flex flex-col gap-xl">
      <form className="flex flex-col gap-xl" onSubmit={handleSubmit(onSubmit)}>
        {/* form fields */}
        {unifiedNum && (
          <FormField
            label={unifiedNum.label}
            type={unifiedNum.type}
            placeholder={unifiedNum.placeholder}
            hasError={!!errors.unifiedNum?.message}
            errorMessage={errors.unifiedNum ? errors.unifiedNum.message : ""}
            {...register("unifiedNum", { required: true })}
          />
        )}

        {passwordLabel && (
          <PasswordField
            label={passwordLabel.label}
            placeholder={passwordLabel.placeholder}
            hasError={!!errors.password?.message}
            errorMessage={errors.password ? errors.password.message : ""}
            {...register("password", { required: true })}
          />
        )}

        {/* remember me */}
        <RememberMe>
          <Checkbox
            checked={checked}
            onCheckedChange={() => setChecked((prev) => !prev)}
            id="remember"
          />
        </RememberMe>
        {/* submit */}
        <Button type="submit" disabled={!isValid}>
          {t("form-labels.header")}
        </Button>
      </form>

      {/* register */}
      <RegisterLink />
    </div>
  );
};

export default LoginCompanies;
