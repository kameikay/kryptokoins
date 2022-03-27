import styled, { css } from "styled-components";
interface IContainer {
  formOnFocus: boolean;
  isEmpty: boolean;
  isOnError: boolean;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  transition: all 0.3s ease-in-out;

  > span {
    padding: 0 4px;
    position: absolute;
    top: calc((40px - 0.875rem) / 2);
    left: 1rem;
    font-size: 0.875rem;
    z-index: 9;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.gray.dark};
    border-radius: 8px;
  }

  svg {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    color: ${({ theme }) => theme.colors.gray.dark};
    transition: all 0.3s ease-in-out;
  }

  > small {
    color: ${({ theme }) => theme.colors.error.main};
    margin-top: -.5rem;
  }

  :hover {
    > span {
      color: ${({ theme }) => theme.colors.primary.main};
    }

    svg {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  ${({ formOnFocus, theme }) =>
    formOnFocus &&
    css`
      svg {
        color: ${theme.colors.primary.main};
      }

      > span {
        top: -0.4375rem;
        background-color: ${({ theme }) => theme.colors.background.paper};
        color: ${theme.colors.primary.main};
        font-size: 0.75rem;
      }
    `}

  ${({ isEmpty, formOnFocus, theme }) =>
    !isEmpty &&
    !formOnFocus &&
    css`
      input {
        color: ${theme.colors.gray.dark};
      }

      > span {
        top: -0.4375rem;
        background-color: ${({ theme }) => theme.colors.background.paper};
        font-size: 0.75rem;
      }
    `}

  ${({ isOnError, theme }) =>
    isOnError &&
    css`
      > span {
        color: ${({ theme }) => theme.colors.error.main} !important;
      }

      svg {
        color: ${({ theme }) => theme.colors.error.main} !important;
      }
    `}
`;
