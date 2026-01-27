"use client";
import React, { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";

interface IProps {
  translationKey: string;
  containerStyle?: string;
  btnStyle?: string;
  chevronStyle?: string;
  icon: ReactNode;
}

const LanguageSwitch: React.FC<IProps> = ({
  translationKey,
  containerStyle,
  btnStyle,
  chevronStyle,
  icon,
}) => {
  const t = useTranslations(translationKey);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className={containerStyle && containerStyle}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={`flex gap-1.5 items-center ${btnStyle && btnStyle} focus-visible:outline-0 cursor-pointer`}
          >
            {icon}
            {locale === "ar" ? t("language.arabic") : t("language.english")}
            <ChevronDown
              className={`${chevronStyle && chevronStyle}`}
              size={12}
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={locale}
            onValueChange={(value) => router.push(pathname, { locale: value })}
          >
            <DropdownMenuRadioItem value="ar"></DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="en">
              {t("language.english")}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitch;
