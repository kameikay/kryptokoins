import { darken, lighten } from "polished";
import styled, { css } from "styled-components";

interface IContainer {
  timeSelected: string;
}

export const Container = styled.div<IContainer>`
  @keyframes infiniteRotate {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .name {
      display: flex;
      flex-direction: column;

      small {
        color: ${({ theme }) => darken(0.1, theme.colors.gray.dark)};
      }
    }

    img {
      animation: infiniteRotate 4s linear infinite;
      margin-left: 1rem;
      width: 3rem;
      height: 3rem;
    }
  }

  .time {
    width: 100%;
    height: 100%;

    .time-select {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};

      .select-button {
        margin-top: 1.5rem;
        cursor: pointer;
        padding: 0.5rem 1rem;
        line-height: 1rem;
        border-radius: 8px;

        input {
          display: none;
        }

        label {
          cursor: pointer;
        }

        .selected {
          position: relative;

          &::after {
            content: "";
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 100%;
            height: 4px;
            background: ${({ theme }) => theme.colors.secondary.main};
          }
        }

        div + div {
          margin-left: 1rem;
        }

        &:hover {
          background-color: ${({ theme }) =>
            lighten(0.1, theme.colors.secondary.light)};
        }
      }

      > div + div {
        margin-left: 1rem;
      }
    }

    .time-data {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &-card {
        padding: 1rem 2rem;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        border: none;
        border-radius: 0.5rem;

        p {
          span {
            font-weight: bold;
          }

          .positive {
            color: ${({ theme }) => theme.colors.success.dark};
          }

          .negative {
            color: ${({ theme }) => theme.colors.error.main};
          }
        }
      }

      > div + div {
        margin-left: 1rem;
      }
    }
  }

  .calculator-container {
    margin-top: 2rem;
    width: 100%;

    > h2 {
      text-align: center;
    }
  }
`;
