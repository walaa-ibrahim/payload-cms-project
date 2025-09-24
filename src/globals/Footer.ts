import { GlobalConfig } from "payload";
const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "NavigationLinks",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        {
          name: "link",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "copyright",
      type: "text",
    },
  ],
};
export default Footer;
