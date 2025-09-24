import { getPayload } from "payload";
import config from "@payload-config";
import { getLocale } from "next-intl/server";
const getHeaderContent = async () => {
  const locale = await getLocale();

  const payload = await getPayload({ config });
  const header = await payload.findGlobal({
    slug: "header",
    locale: locale,
  });
  return header;
};

export default getHeaderContent;
