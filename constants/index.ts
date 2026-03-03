import { FaNpm } from "react-icons/fa";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import { BsPhone } from "react-icons/bs";
import type { IconType } from "react-icons";

import data from "@/data/portfolio.json";

const ICON_MAP: Record<string, IconType> = {
  RxGithubLogo,
  RxLinkedinLogo,
  SiGmail,
  BsPhone,
  FaNpm,
};

const resolveIcon = (name: string): IconType =>
  ICON_MAP[name] ?? RxGithubLogo;

export const PERSONAL_INFO = data.personalInfo;

export const SOCIALS = data.socials.map((s) => ({
  ...s,
  icon: resolveIcon(s.icon),
}));

export const NAV_LINKS = data.navLinks;

export const EXPERIENCE_DATA = data.experience;

export const PROJECTS = data.projects;

export const SKILLS_CATEGORIES = data.skillsCategories;

export const TECH_TICKER = data.techTicker;

export const EDUCATION = data.education;

export const FOOTER_DATA = data.footerData.map((col) => ({
  ...col,
  data: col.data.map((item) => ({
    ...item,
    icon: resolveIcon(item.icon),
  })),
}));

export const LINKS = data.links;
