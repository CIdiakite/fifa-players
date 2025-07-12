import React from 'react';
import Player from './Player';
import players from './players';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
};

const PlayersList = () => {
  return (
    <div style={containerStyle}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;