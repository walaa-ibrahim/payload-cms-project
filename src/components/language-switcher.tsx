"use client";

import React from "react";
import { useTransition } from "react";
import { setUserLocale } from "@/services/locale";
import { useLocale, useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const t = useTranslations("navbar");
  const local = useLocale();
  const lang = local === "en" ? t("en") : t("ar");
  const [isPending, startTransition] = useTransition();
  function onChange(value: string) {
    startTransition(async () => {
      const locale = value == "en" ? "en" : "ar";
      await setUserLocale(locale);
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{lang}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          defaultValue={local}
          value={local}
          onValueChange={onChange}
        >
          <DropdownMenuRadioItem value="en">{t("en")}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ar">{t("ar")}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
