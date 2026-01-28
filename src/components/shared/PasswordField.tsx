"use client";
import * as React from "react";
import FormField from "./FormField";
import eyeOpenIcon from "@/assets/icons/eye-open.svg";
import eyeClosedIcon from "@/assets/icons/eye-slash.svg";

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
  showDivider?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  icon = eyeClosedIcon,
  showDivider = false,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  wrapperClassName = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

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
      {...props}
    />
  );
};

export default PasswordField;
