import { CollectionConfig } from "payload";

const Categories: CollectionConfig = {
  slug: "TranslatCategories",
  admin: {
    useAsTitle: "name",
    group: "Content Management",
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
  ],
};

export default Categories;
