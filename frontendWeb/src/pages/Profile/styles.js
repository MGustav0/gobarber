import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      font-size: 16px;
      font-weight: bold;
      margin: 5px 0 0;
      height: 44px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #3b9eff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#3b9eff')};
      }
    }
  }

  > button {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0 0;
    height: 44px;
    border: 0;
    border-radius: 4px;
    color: #fff;
    background: #f64c75;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#F64C75')};
    }
  }
`;
