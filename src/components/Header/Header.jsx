import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <img
        className='header-img'
        src='invader.png'
        alt='an invader from the game'
      />
      <h1 className='header-title'>My Game Library</h1>
    </header>
  );
};

export default Header;
