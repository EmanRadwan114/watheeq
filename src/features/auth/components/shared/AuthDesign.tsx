import React, { ReactNode } from "react";
import arabicDesignImg from "@/assets/images/arabic-design.png";
import shadingImg from "@/assets/images/shading.jpg";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitch from "../../../../components/shared/LanguageSwitch";
import saudiFlag from "@/assets/icons/saudi-arabia.svg";

interface IProps {
  children: ReactNode;
}

const AuthDesign: React.FC<IProps> = ({ children }) => {
  const t = useTranslations("auth");
  const local = useLocale();

  const footerItems = t.raw("footer") as Array<{ id: string; label: string }>;

  return (
    <main>
      {/* container */}
      <section className="flex min-h-screen">
        {/* ----------------form */}
        <div className="flex-1">
          <div className="h-full flex flex-col px-md lg:px-16 py-6 gap-3">
            {/* form data */}
            <div className="flex items-center justify-center">{children}</div>

            {/* form footer */}
            <div className="flex flex-col md:flex-row gap-2 mt-auto items-center md:justify-between ">
              {/* items */}
              <ul className="flex gap-x-4 md:gap-x-7 gap-y-1.5 order-1 md:order-0 flex-wrap">
                {footerItems.map((item) => (
                  <li className="body-md-regular cursor-pointer" key={item.id}>
                    {item.label}
                  </li>
                ))}
              </ul>

              {/* language */}
              <LanguageSwitch
                translationKey="auth"
                containerStyle="border border-gray-100 px-lg py-2.5 rounded-md"
                btnStyle="text-third-foreground body-sm-regular"
                icon={
                  <Image className="w-8" src={saudiFlag} alt="Saudi Flag" />
                }
                chevronStyle="text-third-foreground p-0 m-0"
              />
            </div>
          </div>
        </div>

        {/* ----------------img */}
        <div className="relative flex-1 max-h-screen overflow-hidden hidden lg:block">
          <Image
            src={shadingImg}
            alt="towers and high buildings in saudi arabia"
            className="w-full object-cover h-full"
          />

          {/* overlay img */}
          <Image
            src={arabicDesignImg}
            alt="arabic design"
            className={`absolute top-[28%] start-[37%] 2xl:start-[45%]! ${local === "en" ? "rotate-240" : "rotate-0"} `}
          />

          {/* welcome msg */}
          <div className="absolute start-8 top-1/2 text-white -translate-y-1/2 w-2/3">
            <h3 className="heading-3 mb-2">{t("welcome.title")}</h3>
            <p className="body-md-regular leading-relaxed">
              {t("welcome.description")}
            </p>
          </div>

          {/* copyrights */}
          <p className="absolute text-md-regular text-white end-5 bottom-6">
            {t("welcome.copyrights")}
          </p>
        </div>
      </section>
    </main>
  );
};

export default AuthDesign;
