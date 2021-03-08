import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Voltar from '../../assets/voltar.png';
import sortFunction from '../../utils/sortFunction';

import api from '../../services/api';

import { Header, RankingContainer, RankingItem } from './styles';

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const loadRanking = async () => {
      await api.get('ranking').then(res => {
        let scoreList = res.data.sort(sortFunction);

        let position = 0;

        setRanking(
          scoreList.map(item => {
            position++;
            return { ...item, position };
          }),
        );
      });
    };

    loadRanking();
  }, []);

  return (
    <>
      <Header>
        <div id="back">
          <Link to="/">
            <img src={Voltar} alt="voltar" />
          </Link>
        </div>
        <div id="cabecalho">Ranking</div>
      </Header>
      <RankingContainer>
        {ranking.map(item => {
          if (item.position <= 3) {
            return (
              <RankingItem top3 key={item.position}>
                <div className="position">{item.position}</div>
                <div className="name">{item.name}</div>
                <div className="score">{item.score}</div>
              </RankingItem>
            );
          } else {
            return (
              <RankingItem key={item.position}>
                <div className="position">{item.position}</div>
                <div className="name">{item.name}</div>
                <div className="score">{item.score}</div>
              </RankingItem>
            );
          }
        })}
      </RankingContainer>
    </>
  );
};

export default Ranking;
