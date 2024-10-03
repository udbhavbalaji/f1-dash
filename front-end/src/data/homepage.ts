export interface navbarItem {
  title: string;
  link: string;
  linkType: string;
}

export const navbarItems: navbarItem[] = [
  {
    title: "Constructor's Championship",
    link: "/constructors/standings",
    linkType: "route",
  },
  {
    title: "Driver's Championship",
    link: "/drivers/standings",
    linkType: "route",
  },
  {
    title: "Season Schedule",
    link: "/schedule",
    linkType: "route",
  },
];
