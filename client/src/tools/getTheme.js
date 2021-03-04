import { light, dark } from "../style/theme";

const getTheme = (state) => {
  switch (state) {
    case "light":
      return light;
    case "dark":
      return dark;
    default:
      return state;
  }
};

export default getTheme;
