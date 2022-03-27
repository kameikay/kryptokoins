import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
