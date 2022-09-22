import Avatar from "@/assets/images/avatar-gray.jpg";
import type { RouteLocation } from "vue-router";

export type ProfileLink = {
  name: string;
  to?: RouteLocation;
  href?: string;
  icon: string;
};

export type Profile = {
  name: string;
  email: string;
  avatar: string;
  links: ProfileLink[];
};

const profile: Profile = {
  name: "Marten Klitzke",
  email: "marten@klitzke.xyz",
  avatar: Avatar,
  links: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/marten-klitzke/",
      icon: "linkedin",
    },
    {
      name: "Xing",
      href: "https://www.xing.com/profile/Marten_Klitzke",
      icon: "xing",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/mortik",
      icon: "twitter",
    },
    {
      name: "Github",
      href: "https://github.com/mortik",
      icon: "github",
    },
  ],
};

export default profile;
