"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1 className="body-md-bold">{t("title")}</h1>
    </>
  );
}
