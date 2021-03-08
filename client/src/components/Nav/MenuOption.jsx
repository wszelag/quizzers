import React from "react";
import { StyledLi } from "../../style/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuOption = ({ data, setIsMenuVisible }) => {
  return (
    <StyledLi onClick={() => setIsMenuVisible(false)}>
      <FontAwesomeIcon icon={data.icon} />
    </StyledLi>
  );
};

export default MenuOption;
