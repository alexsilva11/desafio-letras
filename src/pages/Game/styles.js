import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 90vh;
`;

export const Panel = styled.div`
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px;
`;

export const Number = styled.div`
  width: 150px;
  height: 150px;

  border: 3px solid #e6d5b8;
  border-radius: 5px;

  font-size: 96px;
  color: #e6d5b8;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Keyboard = styled.div`
  height: 60%;
  width: 320px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  border: 1px solid #1f6f8b;

  button {
    width: 109px;
    height: 109px;

    border: 2px solid #1f6f8b;

    font-size: 64px;
    color: #99a8b2;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #1c2b2d;

    cursor: pointer;
  }

  button:hover {
    background-color: #1f6f8b;
    color: #e6d5b8;
  }
`;
