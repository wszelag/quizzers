export const user = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return action.user;
    default:
      return state;
  }
};
