import { faUserAlt, faListOl, faPlay } from "@fortawesome/free-solid-svg-icons";

export const data = [
  {
    id: 0,
    title: "Profile",
    link: "/home/profile",
    special: false,
    icon: faUserAlt
  },
  {
    id: 1,
    title: "Quiz",
    link: "/home/quiz",
    special: true,
    icon: faPlay
  },
  {
    id: 2,
    title: "Rank",
    link: "/home/rank",
    special: false,
    icon: faListOl
  }
];
