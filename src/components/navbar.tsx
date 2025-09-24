import getHeaderContent from "@/services/header";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import LanguageSwitcher from "./language-switcher";

type NavigationItemProps = {
  label?: string;
  link?: string;
  id?: string;
};
const Navbar = async () => {
  const { logo, NavigationLinks } = await getHeaderContent();
  const t = await getTranslations("navbar");

  return (
    <div className="flex justify-between items-center bg-blue-100 px-4">
      <Link href="/">
        <Image
          src={"/images/logo.webp"}
          width={80}
          height={70}
          alt={logo?.alt ?? "logo-image"}
          className="object-contain bg-red-50"
        />
      </Link>
      <div className="ltr:ml-auto rtl:mr-auto gap-4 flex item-center">
        {NavigationLinks?.map((NavigationItem: NavigationItemProps) => (
          <Link href={NavigationItem?.link ?? "/"} key={NavigationItem?.id}>
            {t(`${NavigationItem?.label}`)}
          </Link>
        ))}
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
