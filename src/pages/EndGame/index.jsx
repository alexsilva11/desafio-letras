import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useScore } from '../../hooks/ScoreContext';

import { Container, Header, ScoreContainer } from './styles';

import Close from '../../assets/fechar.png';

const EndGame = () => {
  const [name, setName] = useState();

  const { resetScore, score } = useScore();

  const history = useHistory();

  const onClosePage = () => {
    resetScore();
    history.push('/');
  };

  const saveScore = async evt => {
    evt.preventDefault();

    console.log(name);

    if (name === undefined) {
      alert('Escreva seu nome para salvar seu score!');
    } else {
      await api.post('save', { name, score });

      resetScore();
      history.push('/ranking');
    }
  };

  return (
    <Container>
      <Header>
        <a onClick={() => onClosePage()}>
          <img src={Close} alt="" />
        </a>
      </Header>
      <ScoreContainer>
        <h1>Fim do Jogo</h1>

        <span>score</span>
        <p>{score}</p>

        <form onSubmit={saveScore}>
          <input
            type="text"
            id="name"
            onChange={evt => setName(evt.target.value)}
            placeholder="Digite seu nome"
          />
          <button type="submit" className="btn">
            Salvar Ranking
          </button>
        </form>
      </ScoreContainer>
    </Container>
  );
};

export default EndGame;
