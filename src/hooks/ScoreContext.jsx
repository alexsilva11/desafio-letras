import React, { createContext, useCallback, useContext, useState } from 'react';

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const addPoint = useCallback(() => {
    if (score === 0) {
      setScore(1);
    } else {
      const newScore = score + 1;

      setScore(newScore);
    }
  }, [score]);

  const resetScore = () => {
    setScore(0);
  };

  return (
    <ScoreContext.Provider value={{ addPoint, resetScore, score }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => {
  const context = useContext(ScoreContext);

  if (!context) {
    throw new Error('useScore must be used within an ScoreProvider');
  }

  return context;
};
