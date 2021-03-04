export const theme = (state = "dark", action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      state === "dark" ? (state = "light") : (state = "dark");
      return state;
    default:
      return state;
  }
};
