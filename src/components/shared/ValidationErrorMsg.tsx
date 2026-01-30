import React from "react";
import errorImg from "@/assets/icons/danger.svg";
import Image from "next/image";

interface IProps {
  errorMessage: string;
}

const ValidationErrorMsg: React.FC<IProps> = ({ errorMessage }) => {
  return (
    <span className=" text-red-500 text-[12px] flex gap-1">
      <Image src={errorImg} alt="danger" width={16} height={16} />
      {errorMessage}
    </span>
  );
};

export default ValidationErrorMsg;
