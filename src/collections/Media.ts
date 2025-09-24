import { CollectionConfig } from "payload";

const Media: CollectionConfig = {
  slug: "media",
  upload: {
    mimeTypes: ["image/*"],
    staticDir: "./public/images", // حفظ في public
    imageSizes: [
      {
        name: "logo",
        width: 200,
        height: 100,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};

export default Media;
