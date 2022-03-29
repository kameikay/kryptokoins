import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: 1.5rem;
  border: 0.5px solid #d3d8d9;
  box-shadow: 0px 16px 22px -16px rgb(15 50 86 / 32%);
  padding: 1.5rem;
  transition: all 0.3s ease;
  width: 18rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: all 1s ease-in-out;

  &:hover {
    box-shadow: 0px 16px 22px -16px rgb(15 50 86 / 64%);
    border: 0.5px solid ${({ theme }) => theme.colors.primary.main};
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: sans-serif;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  small {
    color: ${({ theme }) => theme.colors.gray.dark};
  }

  .values {
    margin-top: 3rem;
    color: ${({ theme }) => theme.colors.text.primary};

    p + p {
      margin-top: 1rem;
    }

    .price {
      font-weight: bold;
    }

    .positive-number {
      color: ${({ theme }) => theme.colors.success.dark};
    }

    .negative-number {
      color: ${({ theme }) => theme.colors.error.main};
    }
  }
`;
