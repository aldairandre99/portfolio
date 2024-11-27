export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aldaur André",
  description: "Hey its Aldair André, Welcome to my portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },
    { label: "Services", href: "/#services" },
    {
      label: "Projects",
      href: "/#projects",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/#about",
    },
    { label: "Services", href: "/#services" },
    {
      label: "Projects",
      href: "/#projects",
    },
  ],
  links: {
    github: "https://github.com/aldairandre99",
    instagram: "",
  },
};
