
import React from "react";
import logo from "@/assets/icons/watheeq.svg" 
import Image from "next/image";

interface IProps {}

const LogoImage: React.FC<IProps> = ({}) => {
  return <>
  <div className="flex justify-center mt-sm">
  <Image
    src={logo}
    alt="Watheeq Logo"
    className="w-[40%] h-auto"
    priority
  />
</div>
  </>;
};

export default LogoImage;