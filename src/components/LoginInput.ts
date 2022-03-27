import styled, { css } from "styled-components";

interface ILoginInput {
  isOnError?: boolean;
}

export const LoginInput = styled.input<ILoginInput>`
  width: 100%;
  border-radius: 4px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.gray.dark};
  padding: 0 10px;
  font-size: 0.875rem;
  margin-bottom: 10px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.gray.light};
  transition: all 0.3s ease-in-out;
  position: relative;
  appearance: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.gray.dark};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    background-color: ${({ theme }) => theme.colors.background.paper};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  ${({ isOnError, theme }) =>
    isOnError &&
    css`
      border: 2px solid ${theme.colors.error.main} !important;
    `}
`;

LoginInput.defaultProps = {
  isOnError: false,
};
