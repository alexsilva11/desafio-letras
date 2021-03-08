import styled, { css } from 'styled-components';

export const Header = styled.div`
  color: #e6d5b8;

  font-size: 24px;

  width: 100%;

  display: grid;
  grid-template-columns: 40% 60%;

  div {
    margin: 10px;
  }

  #back {
    padding: 0 30px;
  }

  position: fixed;
  height: 60px;
  background-color: #1c2b2d;
  z-index: 100;
`;

export const RankingContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 70px auto;
`;

export const RankingItem = styled.div`
  display: grid;
  grid-template-columns: 15% 65% 20%;
  color: #1f6f8b;

  div {
    margin: 10px;
    font-size: 24px;
  }

  .position {
    text-align: end;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${props =>
    props.top3 &&
    css`
      color: #99a8b2;
    `}
`;
