import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      transition: all 0.3s ease-in-out;
      &::after {
        content: "";
        display: block;
        width: 20%;
        height: 3px;
        margin: 4px auto;
        background-color: ${({ theme }) => theme.colors.gray.dark};
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        &::after {
          width: 100%;
          background-color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }
  }
`;
