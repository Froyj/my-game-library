const Game = ({ gameInfos }) => {
  const { title, genre, releaseYear, rating, imgUrl } = gameInfos;
  return (
    <div className='game-card'>
      <div className='game-infos'>
        <h3 className='game-title'>{title}</h3>
        <span>Genre</span>
        <div>{genre && genre.map((genre) => <span>{genre}</span>)}</div>
        <span>Release : {releaseYear}</span>
        <div className="game-rating">
          <span>Rating</span>
          <span>{rating}</span>
        </div>
      </div>
      <img className='game-img' src={imgUrl} alt={`screenshot of ${title}`} />
    </div>
  );
};

export default Game;
