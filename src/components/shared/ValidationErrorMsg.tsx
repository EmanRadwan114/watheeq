import React from "react";
import Image from "next/image";
import AlertIcon from "../icons/AlertIcon";

interface IProps {
  errorMessage: string;
}

const ValidationErrorMsg: React.FC<IProps> = ({ errorMessage }) => {
  return (
    <span className=" text-red-500 body-sm-regular flex gap-1">
      <AlertIcon className="size-4" />
      {errorMessage}
    </span>
  );
};

export default ValidationErrorMsg;
