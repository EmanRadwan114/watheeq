"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IProps {
  label: string;
  text: string;
  className?: string;
}

const AuthButton: React.FC<IProps> = ({ label, text, className }) => {
  return (
    <Button
      type="submit"
      aria-label={label}
      className={cn(
        "w-[408px] h-[54px] rounded-[4px] bg-secondary text-white text-sm font-medium cursor-pointer hover:bg-secondary opacity-[100%]",
        className,
      )}
    >
      {text}
    </Button>
  );
};

export default AuthButton;
