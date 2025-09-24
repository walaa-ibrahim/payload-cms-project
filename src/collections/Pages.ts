import { CollectionConfig } from "payload";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      admin: {
        position: "sidebar",
        description: "The URL for this page, e.g. '/home'",
      },
    },
    // {
    //   name: "layout",
    //   type: "blocks",
    //   blocks: [],
    // },
  ],
};

export default Pages;
