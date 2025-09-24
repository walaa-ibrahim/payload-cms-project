import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import Users from "./collections/Users";
import Pages from "./collections/Pages";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import Media from "./collections/Media";
import Header from "./globals/Header";
import Footer from "./globals/Footer";
import Categories from "./collections/Categories";
import Translations from "./collections/Translations";
export default buildConfig({
  admin: {
    user: "users",
    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  localization: {
    locales: [
      {
        label: "English",
        code: "en",
      },
      {
        label: "العربية",
        code: "ar",
      },
    ],
    defaultLocale: "en",
    fallback: true,
  },
  collections: [Users, Media, Pages, Categories, Translations],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({
    url:
      process.env.DATABASE_URI ||
      "mongodb+srv://root:root123@cluster0.tozgjl9.mongodb.net/payloadcms?retryWrites=true&w=majority&appName=Cluster0",
  }),
});
