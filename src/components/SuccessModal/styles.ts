import { darken } from "polished";
import styled from "styled-components";

export const Overlay = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.paper};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    height: 100%;
  }
`