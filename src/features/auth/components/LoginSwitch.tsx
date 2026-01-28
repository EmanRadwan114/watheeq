"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import React from "react";
import { useTranslations } from "use-intl";
import User from "./icons/User";
import Building from "./icons/Building";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProps {
  type: string;
  setType: (type: string) => void;
}

const LoginSwitch: React.FC<IProps> = ({ type, setType }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const t = useTranslations("auth");

  const loginTypes = t.raw("login.types") as Array<{
    id: string;
    label: string;
  }>;

  const handleSwitch = (selectedType: string) => {
    setType(selectedType);

    const params = new URLSearchParams(searchParams.toString());

    if (selectedType === "type2") {
      params.set("type", "2");
    } else {
      params.delete("type");
    }

    const query = params.toString() ? `?${params.toString()}` : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <div className="flex-1 flex flex-col gap-2.5 mb-2xl">
      <Label>{t("login.form-labels.switch-type")}</Label>
      <ButtonGroup
        aria-label="Button group"
        className="p-sm border border-dark-100 rounded-sm w-full justify-center gap-2.5"
      >
        {loginTypes.map((t) => (
          <Button
            variant={"ghost"}
            key={t.id}
            className={`cursor-pointer flex-1 rounded-sm py-2.5 transition-colors ${type === t.id ? "text-secondary-bold bg-secondary-transparent" : "text-dark-400"}`}
            onClick={() => handleSwitch(t.id)}
          >
            {t.id === "type1" ? (
              <User className="size-6" />
            ) : (
              <Building className="size-6" />
            )}
            <span
              className={`transition-colors ${type === t.id ? "text-secondary-bold body-md-medium" : "text-third-foreground body-md-regular"}`}
            >
              {t.label}
            </span>
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default LoginSwitch;
