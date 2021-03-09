import React from "react";
import { StyledLi } from "../../style/Navigation.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuOption = ({ data, setIsMenuVisible }) => {
  return (
    <>
      <StyledLi onClick={() => setIsMenuVisible(false)}>
        <Link to={data.link}>
          <FontAwesomeIcon icon={data.icon} />
        </Link>
      </StyledLi>
    </>
  );
};

export default MenuOption;
