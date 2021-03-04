import styled from "styled-components";

export const FullScreenWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.primary};
`;
