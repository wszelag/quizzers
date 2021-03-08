import React, { useState } from "react";
import { MobileNav, StyledUl } from "../../style/Navigation.css";
import MenuOption from "./MenuOption";
import { data } from "./data";

const Navigation = () => {
  const [display, setDisplay] = useState(false);

  const listElements = data.map((el) => {
    return (
      <MenuOption
        key={el.id}
        data={el}
        display={display}
        setDisplay={setDisplay}
      />
    );
  });

  return (
    <>
      <MobileNav display={display} onClick={() => setDisplay(!display)}>
        <StyledUl display={display}>{listElements}</StyledUl>
      </MobileNav>
    </>
  );
};

export default Navigation;
