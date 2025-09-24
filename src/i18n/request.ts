import { getRequestConfig } from "next-intl/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { getUserLocale } from "@/services/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "translations",
    locale: locale,
  });

  // Group translations by category
  const messages = docs.reduce((acc, doc) => {
    const key = doc.key;
    const value = doc.translation?.[locale] || "";
    const categorySlug = doc?.category?.name || "general";

    if (!acc[categorySlug]) {
      acc[categorySlug] = {};
    }

    acc[categorySlug][key] = value;

    return acc;
  }, {} as Record<string, Record<string, string>>);

  return {
    messages,
    locale,
  };
});
