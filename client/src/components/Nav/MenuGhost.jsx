import React from "react";
import { Ghost } from "../../style/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MenuGhost = ({ setIsMenuVisible, isMenuVisible }) => {
  return (
    <Ghost isMenuVisible={isMenuVisible} onClick={() => setIsMenuVisible(true)}>
      <FontAwesomeIcon icon={faPlus} />
    </Ghost>
  );
};

export default MenuGhost;
