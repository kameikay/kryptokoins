import styled, { css } from 'styled-components';

interface IContainer {
  isMenuOpen: boolean;
}

export const Container = styled.aside<IContainer>`
  width: 6rem;
  height: 100vh;
  padding: 2rem 0;
  position: fixed;
  background: #fff;
  border-right: 1px solid ${({ theme }) => theme.colors.gray.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 1s ease-in-out;
  z-index: 99;

  .logo {
    height: 3rem;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
      padding: 12px;
    }
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        path {
          fill: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }
  }
  .logout {
    &:hover {
      svg path {
        fill: ${({ theme }) => theme.colors.error.light};
      }
      span {
        color: ${({ theme }) => theme.colors.error.light};
      }
    }
    ${({ isMenuOpen }) => isMenuOpen
      && css`
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.error.main};
        padding: 0 0.5rem;
        svg {
          margin-right: 1rem;
        }
      `}
  }
  ${({ isMenuOpen }) => isMenuOpen
    && css`
      width: 15rem;
      align-items: flex-start;
      padding: 2rem;
      nav {
        width: 100%;
        align-items: flex-start;
        > div + div {
          margin-top: 0;
        }
        a {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0;
          svg {
            margin-right: 1rem;
          }
        }
      }
    `}
`;