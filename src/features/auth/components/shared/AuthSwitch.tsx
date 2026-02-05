"use client";

import React, { useEffect } from "react";
import User from "@/features/auth/components/icons/User";
import Building from "@/features/auth/components/icons/Building";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-toolkit/hooks";
import { setRegisterClientType } from "../../store/register.slice";
import { setLoginClientType } from "../../store/login.slice";

interface IProps {
  switchType: "login" | "register";
}

const AuthSwitch: React.FC<IProps> = ({ switchType }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const t = useTranslations("auth");

  const clientType = useAppSelector((state) =>
    switchType === "register"
      ? state.register.clientType
      : state.login.clientType,
  );

  const dispatch = useAppDispatch();
  const typeParam = useSearchParams().get("type");

  useEffect(() => {
    if (switchType === "register") {
      dispatch(setRegisterClientType(typeParam || "1"));
    } else {
      dispatch(setLoginClientType(typeParam || "1"));
    }
  }, []);

  const handleSwitch = (selectedType: string) => {
    if (switchType === "register") {
      dispatch(setRegisterClientType(selectedType));
    } else {
      dispatch(setLoginClientType(selectedType));
    }

    const params = new URLSearchParams(searchParams.toString());

    if (selectedType === "2") {
      params.set("type", "2");
    } else {
      params.delete("type");
    }

    const query = params.toString() ? `?${params.toString()}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  };

  const loginTypes = t.raw("login.types") as Array<{
    id: string;
    label: string;
  }>;

  return (
    <ButtonGroup
      aria-label="Button group"
      className="p-sm border border-dark-100 rounded-sm w-full justify-center gap-2.5"
    >
      {loginTypes.map((t) => (
        <Button
          variant={"ghost"}
          key={t.id}
          className={`cursor-pointer flex-1 rounded-sm py-2.5 transition-colors ${clientType === t.id ? "text-secondary-bold bg-secondary-transparent" : "text-dark-400"}`}
          onClick={() => handleSwitch(t.id)}
        >
          {t.id === "1" ? (
            <User className="size-6" />
          ) : (
            <Building className="size-6" />
          )}
          <span
            className={`transition-colors ${clientType === t.id ? "text-secondary-bold body-md-medium" : "text-third-foreground body-md-regular"}`}
          >
            {t.label}
          </span>
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default AuthSwitch;
