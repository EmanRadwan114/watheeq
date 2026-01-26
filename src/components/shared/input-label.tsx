"use client";

import * as React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { COUNTRIES, Country } from "../constants/countries";

interface AuthPhoneInputProps {
  label: string;
  value?: string;
  onChange?: (value: string, country: Country) => void;
}

const AuthPhoneInput: React.FC<AuthPhoneInputProps> = ({
  label,
  value = "",
  onChange,
}) => {
  const [country, setCountry] = React.useState<Country>(COUNTRIES[0]);

  return (
    <div className="flex flex-col gap-1.5">
      {/* Label */}
      <label className="text-[11px] leading-[16px] text-gray-600">
        {label}
      </label>

      {/* Container */}
      <div
        className="
          flex items-center gap-2
          h-[48px]
          w-[408px]
          rounded-[4px]
          border border-gray-200
          bg-white
          px-3
          focus-within:border-secondary
          transition-colors
        "
      >
        {/* Country Select */}
        <select
          value={country.code}
          onChange={(e) =>
            setCountry(
              COUNTRIES.find((c) => c.code === e.target.value)!
            )
          }
          className="
            flex items-center gap-1
            bg-transparent
            text-sm
            outline-none
            cursor-pointer
          "
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.dialCode}
            </option>
          ))}
        </select>

        {/* Flag */}
        <Image
          src={country.flag}
          alt={country.code}
          width={24}
          height={24}
        />

        {/* Divider */}
        <span className="h-5 w-px bg-gray-300" />

        {/* Phone Input */}
        <Input
          type="tel"
          
          placeholder={country.placeholder}
          onChange={(e) =>
            onChange?.(e.target.value, country)
          }
          className={cn(
            "flex-1 h-full border-none bg-transparent px-2 ",
            "text-sm leading-5 placeholder:text-gray-400",
            "focus-visible:ring-0 focus-visible:ring-offset-0"
          )}
        />
      </div>
    </div>
  );
};

export default AuthPhoneInput;
