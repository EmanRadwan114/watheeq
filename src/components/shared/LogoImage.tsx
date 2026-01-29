import React from "react";
import logo from "@/assets/images/watheeq.webp";
import Image from "next/image";

interface IProps {
  className?: string;
}

const LogoImage: React.FC<IProps> = ({ className }) => {
  return (
    <>
      <div className="flex justify-center mt-sm">
        <Image
          src={logo}
          alt="Watheeq Logo"
          className={`w-57.5 ${className}`}
          priority
        />
      </div>
    </>
  );
};

export default LogoImage;