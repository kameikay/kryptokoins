import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;

  p {
    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }

  .switch {
    display: inline-block;
    margin-right: 3rem;

    span {
      position: relative;
      width: 60px;
      height: 34px;
      float: left;

      input {
        display: none;

        &:checked + .slider {
          background-color: ${({ theme }) => theme.colors.primary.main};
        }

        &:checked + .slider:before {
          transform: translateX(26px);
        }

        &:focus + .slider {
          box-shadow: 0 0 1px ${({ theme }) => theme.colors.primary.dark};
        }
      }
    }
    label {
      line-height: 34px;
      margin-left: 12px;
      cursor: pointer;
    }
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    border: 0;
    outline: none;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
    cursor: pointer;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: #fff;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;
