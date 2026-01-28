"use client";
import * as React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";

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
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      <Label className={` ${labelClassName}`}>{label}</Label>
      <div
        className={`
          flex items-center gap-2
          rounded-sm
          border border-gray-200
          bg-white
          p-lg
          focus-within:border-secondary
          transition-colors
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
    </div>
  );
};

FormField.displayName = "FormField";

export default FormField;
