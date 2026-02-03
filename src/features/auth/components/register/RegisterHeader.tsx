import React from "react";
import logoGoldImg from "@/assets/images/watheeq-gold.svg";
import Image from "next/image";
import style from "./style.module.css";

const RegisterHeader: React.FC = () => {
  return (
    <header
      className={`relative flex justify-between bg-primary py-4xl px-22.5`}
    >
      {/* bg */}
      <div
        className={`absolute start-0 end-0 top-0 bottom-0 bg-no-repeat  ${style["register-header"]} ltr:rotate-180`}
      ></div>
      {/* logo */}
      <Image
        src={logoGoldImg}
        alt="watheeq logo gold"
        width={200}
        height={80}
      />
      {/* img */}
    </header>
  );
};

export default RegisterHeader;
