"use client";
import * as React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import ValidationErrorMsg from "./ValidationErrorMsg";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
  rightElement?: React.ReactNode;
  onIconClick?: () => void;
  showDivider?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  hasError?: boolean;
  errorMessage?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  icon,
  rightElement,
  onIconClick,
  showDivider = false,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  wrapperClassName = "",
  hasError = false,
  errorMessage,

  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      <Label className={` ${labelClassName}`}>{label}</Label>
      <div
        className={`
    flex items-center gap-2
    rounded-sm
    border
    bg-white
    p-lg
    transition-colors

    ${
      hasError
        ? "border-red-500 focus-within:border-red-500"
        : "border-gray-200 focus-within:border-secondary"
    }

    ${wrapperClassName}
  `}
      >
        <Input className={`${inputClassName}`} {...props} />

        {showDivider && <span className="h-5 w-px bg-gray-300" />}
        
        {icon && (
          <button
            type="button"
            onClick={onIconClick}
            className={onIconClick ? "cursor-pointer" : ""}
          >
            <Image src={icon} alt="field icon" width={20} height={20} />
          </button>
        )}
        {rightElement}
      </div>
      {/* Error Message */}
      {hasError && errorMessage && (
        <ValidationErrorMsg errorMessage={errorMessage} />
      )}
    </div>
  );
};

export default FormField;
