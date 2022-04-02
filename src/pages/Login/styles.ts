import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 100vh;
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.main};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  > div {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
   display: none;
  }

`;

export const RightContainer = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;

    h2 {
      font-size: 2.5rem;
    }

    p {
      color: ${({ theme }) => darken(0.1, theme.colors.gray.dark)};
    }
  }

  form {
    min-width: 300px;
    width: 420px;

    > div + div {
      margin-top: 1rem;
    }

    button {
      margin-top: 2rem;
      width: 100%;
      height: 40px;
      border-radius: 8px;
      border: none;
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.contrastText};
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: ${({ theme }) =>
          darken(0.1, theme.colors.primary.main)};
      }

      &[disabled] {
        background-color: ${({ theme }) => darken(0.1, theme.colors.gray.main)};
        cursor: not-allowed;
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    .title {
      text-align: center;
      color: ${({ theme }) => theme.colors.primary.main};
    }
    form {
      padding: 2rem;
    }
  }
`;

export const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  font-size: .8rem;
  font-weight: bold;
  padding: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.primary.contrastText};

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.colors.primary.contrastText)};
    }
  }
`;
