import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  width: 100%;

  .calculator-card {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    &-title {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      > label {
        font-weight: bold;
        margin-bottom: 1rem;
      }

      > input {
        width: 100%;
        height: 2rem;
        border: 2px solid ${({ theme }) => theme.colors.gray.main};
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-size: 1.2rem;
        background-color: ${({ theme }) => theme.colors.background.paper};
        outline: none;
        transition: all 0.3s ease-in;

        &:focus {
          border-color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }

    .calculator-convert {
      display: flex;
      align-items: center;
      justify-content: center;

      .from {
        span {
          font-weight: bold;
        }

        .from-card {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 14rem;
          height: 4.5rem;

          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
          border-radius: 1rem;
          padding: 1rem;
          margin-top: 1rem;

          img {
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
          }

          .from-card-title {
            small {
              font-size: 12px;
              letter-spacing: 1px;
            }

            h3 {
              font-size: 1rem;
            }
          }
        }
      }

      .btn-change {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;

        button {
          background-color: ${({ theme }) => theme.colors.primary.light};
          padding: 0.5rem;
          border-radius: 0.5rem;
          color: ${({ theme }) => theme.colors.primary.contrastText};
          border: none;
          transition: all 0.3s ease-in;

          &:hover {
            background-color: ${({ theme }) => theme.colors.primary.main};
          }
        }
      }

      .to {
        span {
          font-weight: bold;
        }

        &-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 14rem;
          height: 4.5rem;

          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
          border-radius: 1rem;
          padding: 1rem;
          margin-top: 1rem;

          small {
            font-size: 12px;
            letter-spacing: 1px;
          }

          h3 {
            font-size: 1rem;
          }
        }
      }
    }

    .result {
      margin-top: 2rem;
      font-size: 1.2rem;
    }
  }
`;
