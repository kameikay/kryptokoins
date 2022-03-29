import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 2rem;

  .title {
    margin-bottom: 1rem;

    h1 {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    p{
      font-size: 1.5rem;

      a {
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;

        &:hover {
          color: ${({ theme }) => theme.colors.primary.dark};
        }
      }
    }
  }

`;