"use client";

import Image from "next/image";
import React from "react";
import fileImg from "@/assets/images/data access.svg";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import AlertIcon from "@/components/icons/AlertIcon";
import InfoIcon from "@/components/icons/InfoIcon";
import { useAppSelector } from "@/redux-toolkit/hooks";

const ClientType: React.FC = () => {
  const t = useTranslations("auth.register.client-type");

  const clientType = useAppSelector((state) => state.register.clientType);

  const notesData = t.raw("notes.items") as Array<string>;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-x-9xl gap-y-5xl">
      <Image src={fileImg} alt="file icon" />
      <div className="flex flex-col gap-3xl">
        {/* login */}
        <div className="flex flex-col gap-lg lg:max-w-[90%]">
          <h1 className="body-xl-bold">{t("heading")}</h1>
          <p className="body-lg-regular text-third-foreground">
            {t("description")}
          </p>
          <Link
            href={clientType === "2" ? `/login?type=${clientType}` : "/login"}
            className="w-2/5"
          >
            <Button>{t("login")}</Button>
          </Link>
        </div>

        {/* notes */}
        <div className="border border-dark-100 bg-dark-50 py-2xl px-xl rounded-md">
          <div className="flex gap-md items-center mb-xl">
            <AlertIcon className="text-secondary-bold" />
            <h2 className="heading-6">{t("notes.heading")}</h2>
          </div>
          <ul
            className="flex flex-col gap-1.5 list-inside px-sm"
            style={{ listStyleType: "square" }}
          >
            {notesData.map((item, indx) => (
              <li key={indx} className="body-md-medium text-third-foreground">
                <span>{item}</span>
                {indx === notesData.length - 1 && (
                  <InfoIcon className="text-primary inline-block ms-md" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientType;
