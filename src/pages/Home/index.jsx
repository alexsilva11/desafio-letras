import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.png';
import Ranking from '../../assets/ranking.png';

const Home = () => {
  return (
    <Container>
      <div id="ranking">
        <Link to="/ranking">
          <img src={Ranking} alt="ranking" />
        </Link>
      </div>
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div id="btn-play">
        <Link to="/game" className="btn">
          Iniciar Jogo
        </Link>
      </div>
    </Container>
  );
};

export default Home;
