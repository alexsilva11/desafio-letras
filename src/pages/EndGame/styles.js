import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    padding: 10px;
    cursor: pointer;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #e6d5b8;

  margin-top: 20px;

  h1 {
    font-size: 48px;
    font-weight: 400;
    display: block;

    margin-bottom: 80px;
  }

  p {
    font-size: 96px;
    margin: 0;
  }

  input {
    width: 320px;
    height: 80px;

    font-size: 24px;
    color: #e6d5b8;

    box-sizing: border-box;

    background-color: #1c2b2d;

    border: 3px solid #1f6f8b;
    border-radius: 10px;

    margin-bottom: 10px;
    padding: 5px;

    &::placeholder {
      color: #99a8b2;
    }
  }
`;
