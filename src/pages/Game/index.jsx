import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Number, Keyboard, Panel } from './styles';

import getNumber from '../../utils/getNumber';

import { useScore } from '../../hooks/ScoreContext';

const Game = () => {
  const history = useHistory();

  const [gameSequence, setGameSequence] = useState([getNumber()]);
  const [number, setNumber] = useState();
  const [userSequence, setUserSequence] = useState([]);

  const { addPoint } = useScore();

  const setSequence = value => {
    setUserSequence([...userSequence, value]);
  };

  const render = useCallback(() => {
    gameSequence.forEach((number, i) => {
      setTimeout(setNumber, i * 300, number);
    });

    setTimeout(setNumber, gameSequence.length * 300 + 300);
  }, [gameSequence]);

  useEffect(() => {
    render();
  }, [render]);

  const verifySequences = () => {
    if (
      userSequence.length === gameSequence.length &&
      userSequence.every((item, index) => item === gameSequence[index])
    ) {
      setGameSequence([...gameSequence, getNumber()]);
      setUserSequence([]);
      addPoint();
      render();
    } else {
      setUserSequence([]);
      history.push('/end-game');
    }
  };

  if (userSequence.length === gameSequence.length) {
    verifySequences();
  }

  return (
    <Container>
      <Panel>
        <Number>{number}</Number>
      </Panel>
      <Keyboard>
        <button
          onClick={() => {
            setSequence(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setSequence(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setSequence(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setSequence(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setSequence(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setSequence(6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            setSequence(7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setSequence(8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setSequence(9);
          }}
        >
          9
        </button>
      </Keyboard>
    </Container>
  );
};

export default Game;
