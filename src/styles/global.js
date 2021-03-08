import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    top: 0;
    left: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #1C2B2D;
  }

  .btn {
  width: 320px;
  height: 80px;
  background-color: #1F6F8B;
  border: 1px solid #99A8B2;
  border-radius: 10px;
  color: #E6D5B8;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.btn:hover {
  background-color: #245e74;
}

`;
