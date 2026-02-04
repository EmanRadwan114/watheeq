"use client";

import * as React from "react";
import { RadioGroup } from "@/components/ui/radio-group";

interface RadioCardGroupProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  label,
  value,
  onChange,
  children,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}

      <RadioGroup
        value={value}
        onValueChange={onChange}
        className={`grid grid-cols-4 gap-3 ${className}`}
      >
        {children}
      </RadioGroup>
    </div>
  );
};

export default RadioCardGroup;
