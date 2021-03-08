import styled from "styled-components";

export const FullScreenWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  background-color: ${({ theme }) => theme.background};
`;
