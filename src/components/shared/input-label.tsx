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
    <div className="flex flex-col gap-1.5 ps-3xl pe-3xl  ">
      <label className=" text-body-lg body-lg-bold leading-[16px] text-gray-600">
        {label}
      </label>

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
        <span>+966</span>
        <Image
          src="/icons/saudi-arabia.svg"
          alt="SA"
          width={24}
          height={24}
          className="object-cover"
        />

        <span className="h-5 w-px bg-gray-300" />

        <Input
          type="tel"
          placeholder="5xxxxxxxxx"
          className="flex-1 h-full border-none bg-transparent px-1.5 text-sm leading-5 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
    </div>
  );
};

export default AuthPhoneInput;
