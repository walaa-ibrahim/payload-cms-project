import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return <div className="text-center bg-blue-300 py-4">{t("copyright")}</div>;
};

export default Footer;
