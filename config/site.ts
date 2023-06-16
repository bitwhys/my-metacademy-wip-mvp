export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "My Metacademy",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      icon: "lighthouse",
      title: "Home",
      href: "/",
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
