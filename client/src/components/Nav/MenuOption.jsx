import React from "react";
import { StyledLi } from "../../style/Navigation.css";

const MenuOption = ({ data, mode }) => {
  return <StyledLi mode={mode}>{data.title}</StyledLi>;
};

export default MenuOption;
