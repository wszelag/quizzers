import { faUserAlt, faListOl, faPlay } from "@fortawesome/free-solid-svg-icons";

export const data = [
  {
    id: 0,
    title: "Profile",
    link: "/profile",
    special: false,
    icon: faUserAlt
  },
  {
    id: 1,
    title: "Quiz",
    link: "/quiz",
    special: true,
    icon: faPlay
  },
  {
    id: 2,
    title: "Rank",
    link: "/rank",
    special: false,
    icon: faListOl
  }
];
