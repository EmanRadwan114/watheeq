"use client";
import * as React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import passwordIcon from "@/assets/icons/eye-open.svg";

interface AuthPhoneInputProps {
  label: string;
  value?: string;
  src: string;
  num: string;
  placeholder: string;
  showDivider: boolean;
  type: string;
}

const AuthPhoneInput: React.FC<AuthPhoneInputProps> = ({
  label,
  src,
  num,
  placeholder,
  showDivider,
  type,
  value = "",
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const isPassword = type === "password";
  return (
    <div className="flex flex-col gap-1.5 ps-3xl pe-3xl  ">
      <label className="text-body-lg body-lg-bold leading-[16px">{label}</label>
      <div
        className="
      flex items-center gap-2
      h-12 w-full
      rounded-sm
      border border-gray-200
      bg-white
      ps-2xl pe-2xl
      focus-within:border-secondary
      transition-colors
    "
      >
        <Input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className="flex-1 h-full border-none bg-transparent px-1.5"
        />

        {showDivider && <span className="h-5 w-px bg-gray-300" />}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <Image
              src={showPassword ? passwordIcon : src}
              alt="toggle password"
              width={20}
              height={20}
            />
          </button>
        )}

        {!isPassword && src && (
          <Image src={src} alt="icon" width={20} height={20} />
        )}
        <span>{num}</span>
      </div>
    </div>
  );
};

export default AuthPhoneInput;
