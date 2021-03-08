import React, { useState } from "react";
import { MobileNav, StyledUl } from "../../style/Navigation.css";
import MenuOption from "./MenuOption";
import MenuGhost from "./MenuGhost";
import { data } from "./data";

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const listElements = data.map((el) => {
    return (
      <MenuOption key={el.id} data={el} setIsMenuVisible={setIsMenuVisible} />
    );
  });

  return (
    <>
      <MenuGhost
        setIsMenuVisible={setIsMenuVisible}
        isMenuVisible={isMenuVisible}
      />
      <MobileNav isMenuVisible={isMenuVisible}>
        <StyledUl>{listElements}</StyledUl>
      </MobileNav>
    </>
  );
};

export default Navigation;
