import { useState, useEffect } from 'react';
import Game from './Game';

import './Games.css';

import fetchGames from '../../games';

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames()
      .then(res => setGames(res));
  }) 

  return (
    <div>
      <h2>Game List</h2>
      <div className="games-container">
        {games.map(game => <Game key={`${game.id}-${game.title}`} gameInfos={game}/>)}
      </div>
    </div>
  );
}

export default Games;