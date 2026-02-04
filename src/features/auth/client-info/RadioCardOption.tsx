"use client";

import * as React from "react";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Check } from "lucide-react";

interface RadioCardOptionProps {
  value: string;
  label: string;
}

const RadioCardOption: React.FC<RadioCardOptionProps> = ({ value, label }) => {
  return (
    <label
      className="
        relative flex items-center justify-center
        h-12 px-10
        rounded-md cursor-pointer
        border border-gray-200
        bg-gray-100
        text-sm font-medium text-gray-700
        transition-all
      "
    >
      {/* radio */}
      <RadioGroupItem
        value={value}
        className="peer absolute inset-0 opacity-0 cursor-pointer"
      />

      {/* label */}
      <span className="text-center">{label}</span>

      {/* check icon */}
      <div
        className="
          absolute right-3 top-1/2 -translate-y-1/2
          hidden
          peer-data-[state=checked]:flex
          h-5 w-5
          items-center justify-center
          rounded-full
          bg-green-500
          text-white
        "
      >
        <Check size={12} strokeWidth={3} />
      </div>

      {/* selected border */}
      <span
        className="
          absolute inset-0 rounded-md
          border border-transparent
          peer-data-[state=checked]:border-[#C8A16A]
        "
      />
    </label>
  );
};

export default RadioCardOption;
