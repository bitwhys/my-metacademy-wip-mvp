import {
  Books,
  CodeSimple,
  Lighthouse,
  MapTrifold,
  Planet,
} from "@phosphor-icons/react"

import { Icons } from "@/components/icons"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "My Metacademy",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      icon: "lighthouse",
      title: "Home",
      href: "/dashboard",
    },
    {
      icon: "books",
      title: "Guides",
      href: "/guides",
    },
    {
      icon: "roadmap",
      title: "Roadmaps",
      href: "/roadmaps",
    },
    {
      icon: "planet",
      title: "Concepts",
      href: "/concepts",
    },
    {
      icon: "tree",
      title: "Builder",
      href: "/builder",
    },
  ],
  links: {
    twitter: "#",
    github: "#",
    docs: "#",
  },
}
