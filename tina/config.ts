import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",

  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },

  schema: {
    collections: [
      {
        name: "site",
        label: "Site Content",
        path: "src/content",
        format: "json",
        match: {
          include: "site",
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
          },
        ],
      },

      {
        name: "testimonials",
        label: "Testimonials",
        path: "src/content",
        format: "json",
        match: {
          include: "testimonials",
        },
        fields: [
          {
            type: "object",
            name: "testimonials",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "review", label: "Review" },
            ],
          },
        ],
      },
    ],
  },
});