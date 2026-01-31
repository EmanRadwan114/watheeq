"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import { useTranslations } from "use-intl";

const BackBtn: React.FC = () => {
  const t = useTranslations("auth.reset-password");
  const local = useLocale();
  const router = useRouter();

  const isRTL = local === "ar";

  return (
    <div>
      <div
        className="flex items-center gap-2 body-sm-regular text-primary-foreground cursor-pointer"
        onClick={() => router.back()}
      >
        {isRTL ? (
          <>
            <ArrowRight className="h-4 w-4" />
            {t("back")}
          </>
        ) : (
          <>
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </>
        )}
      </div>
    </div>
  );
};

export default BackBtn;
