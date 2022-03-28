import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

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

  .loading {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.5rem;
    }
  }

  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    > div {
      margin: 1rem 0.5rem;
    }
  }

  .load-more {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 2rem 0;

    button {
      min-width: 20rem;
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.contrastText};
      font-weight: bold;
      transition: all 0.3s ease-in;

      &:hover {
        background-color: ${({ theme }) =>
          darken(0.1, theme.colors.primary.main)};
      }

      &[disabled] {
        background-color: ${({ theme }) => theme.colors.gray.dark};
        cursor: default;
      }
    }
  }
`;
