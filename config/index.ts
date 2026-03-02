import type { Metadata } from "next";

import data from "@/data/portfolio.json";

export const siteConfig: Metadata = {
  title: data.siteConfig.title,
  description: data.siteConfig.description,
  keywords: data.siteConfig.keywords,
  authors: {
    name: data.personalInfo.name,
    url: data.personalInfo.github,
  },
} as const;
