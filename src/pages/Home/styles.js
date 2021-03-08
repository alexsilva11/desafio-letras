import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  #ranking {
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  #logo {
    height: 70vh;
  }

  #logo, #btn-play {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
