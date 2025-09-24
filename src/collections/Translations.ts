import { CollectionConfig } from "payload";

const Translations: CollectionConfig = {
  slug: "translations",
  admin: {
    useAsTitle: "key",
    defaultColumns: ["key", "translation.en", "translation.ar", "category"],
    group: "Content Management",
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "translation",
      type: "group",
      fields: [
        {
          name: "en",
          type: "textarea",
          label: "En-Translation",
          required: true,
          admin: {
            description: "Translation content in English",
          },
        },
        {
          name: "ar",
          type: "textarea",
          label: "Ar-Translation",
          required: true,
          admin: {
            description: "Translation content in Arabic",
          },
        },
      ],
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "TranslatCategories",
      required: true,
      admin: {
        description: "Category to organize translations",
      },
    },
    {
      name: "key",
      type: "text",
      required: true,
      unique: true,
      access: {
        create: ({ req: { user } }) => {
          // Only allow admins to create the key field
          return Boolean(user?.role === "admin");
        },
        update: ({ req: { user } }) => {
          // Only allow admins to update the key field
          return Boolean(user?.role === "admin");
        },

        // Users can still read the key field
        read: () => true,
      },
    },
  ],
  timestamps: true,
};

export default Translations;
