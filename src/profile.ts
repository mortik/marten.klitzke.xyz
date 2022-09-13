import Avatar from "@/assets/images/avatar2.png";
import BackgroundImage from "@/assets/images/background.jpg";
import BackgroundImage2 from "@/assets/images/background-2.png";
import BackgroundImage3 from "@/assets/images/background-3.png";
import BackgroundImage4 from "@/assets/images/background-4.png";
import type { RouteLocation } from "vue-router";

const randomBackground = () => {
  const backgrounds = [
    BackgroundImage,
    BackgroundImage2,
    BackgroundImage3,
    BackgroundImage4,
  ];

  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
};

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
  backgroundImage: string;
  links: ProfileLink[];
};

const profile: Profile = {
  name: "Marten Klitzke",
  email: "marten@klitzke.xyz",
  avatar: Avatar,
  backgroundImage: randomBackground(),
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
