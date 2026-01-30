"use client";
import FormField from "./FormField";
import eyeOpenIcon from "@/assets/icons/eye-open.svg";
import eyeClosedIcon from "@/assets/icons/eye-slash.svg";
import { useState } from "react";

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
  showDivider?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  hasError?: boolean;
  errorMessage?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  icon = eyeClosedIcon,
  showDivider = false,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  wrapperClassName = "",
  hasError = false,
  errorMessage,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      type={showPassword ? "text" : "password"}
      label={label}
      icon={showPassword ? eyeOpenIcon : icon}
      onIconClick={() => setShowPassword((prev) => !prev)}
      showDivider={showDivider}
      containerClassName={containerClassName}
      labelClassName={labelClassName}
      inputClassName={inputClassName}
      wrapperClassName={wrapperClassName}
      hasError={hasError}
      errorMessage={errorMessage}
      {...props}
    />
  );
};

export default PasswordField;
