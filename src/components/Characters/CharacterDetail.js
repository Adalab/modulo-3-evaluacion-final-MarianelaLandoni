import { Link } from 'react-router-dom';
import imageNotFound from '../../images/imageNotFound.jpg';
import GryffindorShield from '../../images/gryffindor-crest.svg';
import SlytherinShield from '../../images/slytherin-crest.svg';
import HufflepuffShield from '../../images/hufflepuff-crest.svg';
import RavenclawShield from '../../images/ravenclaw-crest.svg';
import '../../styles/layout/characterDetail.scss';

function CharacterDetail(props) {
  const isAlive = (character) =>
    character ? (
      <span>
        Vivo <i className="fa-solid fa-heart-pulse"></i>
      </span>
    ) : (
      <span>
        Muerto <i className="fa-solid fa-skull-crossbones"></i>
      </span>
    );

  const houseShield = (house) => {
    if (house === 'Gryffindor') {
      return GryffindorShield;
    } else if (house === 'Slytherin') {
      return SlytherinShield;
    } else if (house === 'Ravenclaw') {
      return RavenclawShield;
    } else if (house === 'Hufflepuff') {
      return HufflepuffShield;
    }
  };

  const isHuman = (specie) => {
    if (specie === 'human') {
      return (
        <span>
          Humano <i className="fa-solid fa-user"></i>
        </span>
      );
    } else if (specie === 'half-giant') {
      return (
        <span>
          Medio Gigante <i className="fa-solid fa-person"></i>
        </span>
      );
    } else if (specie === 'werewolf') {
      return (
        <span>
          Hombre lobo <i className="fa-brands fa-wolf-pack-battalion"></i>
        </span>
      );
    } else if (specie === 'ghost') {
      return (
        <span>
          Fantasma <i className="fa-solid fa-ghost"></i>
        </span>
      );
    } else {
      return <span>Desconocido</span>;
    }
  };

  const notFoundImage = () =>
    props.foundCharacters.image === ''
      ? imageNotFound
      : props.foundCharacters.image;

  return (
    <>
      <Link className="backBtnDetail" to="/">
        Volver
      </Link>
      <section
        className={`detailSection background-${props.foundCharacters.house}`}
      >
        <img
          className="imgDetail"
          src={notFoundImage()}
          alt={`Foto de ${props.foundCharacters.name}`}
          title={`Foto de ${props.foundCharacters.name}`}
        />

        <div className="textDetailContainer">
          <h3 className="titleDetail">{props.foundCharacters.name}</h3>
          <p className="textDetail">
            Especie: {isHuman(props.foundCharacters.species)}
          </p>
          <p className="textDetail">Casa: {props.foundCharacters.house}</p>
          <p className="textDetail">Género: {props.foundCharacters.gender}</p>
          <p className="textDetail">
            Estatus: {isAlive(props.foundCharacters.alive)}
          </p>
          <p className="textDetail">
            Ancestro: {props.foundCharacters.ancestry}
          </p>
        </div>
        <img
          className="imgHouseDetail"
          src={houseShield(props.foundCharacters.house)}
          alt={`Escudo de ${props.foundCharacters.house}`}
          title={`Escudo de ${props.foundCharacters.house}`}
        />
      </section>
    </>
  );
}
export default CharacterDetail;
