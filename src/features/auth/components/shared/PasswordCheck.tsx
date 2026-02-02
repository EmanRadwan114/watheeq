import CheckIconUI from "@/components/icons/CheckIcon";
import React from "react";

interface IProps {
  checkInfo: string;
  isValid: boolean;
}

const PasswordCheck: React.FC<IProps> = ({ checkInfo, isValid }) => {
  return (
    <div className="flex gap-2.5 items-center">
      <div
        className={`size-xl rounded-full flex items-center justify-center ${isValid ? "bg-brand-green" : "border border-dark-400"} `}
      >
        {isValid && <CheckIconUI className="size-2 stroke-0 fill-white" />}
      </div>
      <span className="body-md-regular">{checkInfo}</span>
    </div>
  );
};

export default PasswordCheck;
