import styled from "styled-components";

export const MobileNav = styled.nav`
  width: 280px;
  height: 50px;
  position: absolute;
  bottom: ${({ isMenuVisible }) => (isMenuVisible ? "50px" : "-50px")};

  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s;

  border-radius: 25px;
  line-height: 50px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.font};
`;

export const Ghost = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: ${({ isMenuVisible }) => (!isMenuVisible ? "50px" : "-50px")};
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s;

  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  border-radius: 25px;
  color: ${({ theme }) => theme.font};
  background-color: ${({ theme }) => theme.secondaryBackground};
  opacity: 0.8;
`;

export const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  font-size: 20px;

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
