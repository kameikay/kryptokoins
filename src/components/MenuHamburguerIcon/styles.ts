import styled, { css } from 'styled-components';

interface IContainer {
  isMenuOpen: boolean;
}

export const Container = styled.button<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  transition: all 0.5s ease-in-out;
  transition: transform 1s ease-in-out;
  position: fixed;
  top: 2rem;
  left: 8rem;
  z-index: 9;

  svg path,
  rect,
  g {
    fill: ${({ theme }) => theme.colors.gray.dark};
  }

  svg {
    transition: all 0.5s ease-in-out;

    rect {
      transition: all 0.5s ease-in-out;
    }
  }

  &:hover {
    svg path,
    rect {
      fill: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  ${({ isMenuOpen }) => isMenuOpen
    && css`
      transform: translateX(3.5rem);

      svg:nth-child(1) {
        rect:nth-child(2) {
          transform: translateX(0.5rem);
        }
      }

      svg:nth-child(2) {
        transform: rotate(180deg);
      }
    `}
`;