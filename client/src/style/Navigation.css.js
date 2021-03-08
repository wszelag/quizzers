import styled from "styled-components";

export const MobileNav = styled.nav`
  width: ${({ display }) => (display ? "280px" : "50px")};
  height: 50px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.4s;

  border-radius: 25px;
  line-height: 50px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.font};
`;

export const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: ${({ display }) => (display ? "flex" : "none")};

  overflow: hidden;
`;

export const StyledLi = styled.li`
  width: calc(100% / 3);
  height: 100%;

  text-align: center;

  &:nth-child(1) {
    border-radius: 25px 0 0 25px;
    background-color: blue;
  }
  &:nth-child(3) {
    border-radius: 0 25px 25px 0;
    background-color: blue;
  }
`;
