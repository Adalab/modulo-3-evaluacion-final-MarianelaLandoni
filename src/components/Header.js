import '../styles/layout/header.scss';
import Wand from '../images/wandHP.png';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Harry Potter
        <div className="title-secondary">Buscador de personajes</div>
      </h1>
    </header>
  );
}

export default Header;
