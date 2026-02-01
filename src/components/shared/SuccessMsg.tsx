import React from "react";
import CheckIconUI from "../icons/CheckIcon";

interface IProps {
  title: string;
  description: string;
}

const SuccessMsg: React.FC<IProps> = ({ title, description }) => {
  return (
    <section className="flex items-center gap-2.5">
      <div className="bg-success flex items-center justify-center rounded-full p-xl">
        <CheckIconUI className="size-7 stroke-1" />
      </div>
      <div className="flex flex-col gap-sm">
        <p className="body-xl-bold">{title}</p>
        <span className="body-lg-regular text-third-foreground">
          {description}
        </span>
      </div>
    </section>
  );
};

export default SuccessMsg;
