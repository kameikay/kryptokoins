import styled, { css } from "styled-components";

interface IContainer {
  isActive?: boolean;
  isMenuOpen?: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 420px) {
      width: 2rem;
      height: 2rem;
    }

    path {
      fill: ${({ theme }) => theme.colors.gray.dark};
    }

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      padding: 12px;
      height: 3rem;
      border: 1px solid rgba(255, 255, 255, 0.7);
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.35);
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.primary.main} !important ;

      svg {
        display: inline;
        path {
          fill: ${({ theme }) => theme.colors.primary.main} !important ;
        }
      }
    `}

  ${({ isMenuOpen, isActive }) =>
    isMenuOpen &&
    css`
      padding: 12px;

      a {
        color: ${({ theme }) => theme.colors.gray.dark};

        &:visited {
          color: ${({ theme }) => theme.colors.gray.dark};
        }

        :hover {
          color: ${({ theme }) => theme.colors.primary.main};

          svg {
            rect,
            path {
              fill: ${({ theme }) => theme.colors.primary.main};
            }
          }
        }
      }

      ${isActive &&
      css`
        padding: 12px;
        height: 3rem;
        border: 1px solid rgba(255, 255, 255, 0.7);
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.35);
        border-radius: 4px;

        a {
          color: ${({ theme }) => theme.colors.primary.main} !important ;
        }

        svg {
          display: inline;
          path {
            fill: ${({ theme }) => theme.colors.primary.main} !important ;
          }
        }
      `}
    `}
`;
