import { Link } from 'react-router-dom';
import GryffindorShield from '../../images/gryffindor.jpg';
import SlytherinShield from '../../images/slytherin.jpg';
import HufflepuffShield from '../../images/hufflepuff.png';
import RavenclawShield from '../../images/ravenclaw.jpg';
import '../../styles/layout/characterDetail.scss';

function CharacterDetail(props) {
  const isAlive = () => {
    if (props.foundCharacters.alive) {
      return (
        <span>
          Vivo <i className="fa-solid fa-heart-pulse"></i>
        </span>
      );
    } else {
      return (
        <span>
          Muerto <i class="fa-solid fa-skull-crossbones"></i>
        </span>
      );
    }
  };

  const houseShield = () => {
    const house = props.foundCharacters.house;
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
  return (
    <>
      <Link className="backBtnDetail" to="/">
        Volver
      </Link>
      <section className="detailSection">
        <img
          className="imgDetail"
          src={props.foundCharacters.image}
          alt={`Foto de ${props.foundCharacters.name}`}
          title={`Foto de ${props.foundCharacters.name}`}
        />
        <div className="textDetailContainer">
          <h3 className="titleDetail">{props.foundCharacters.name}</h3>
          <p className="textDetail">Especie: {props.foundCharacters.species}</p>
          <p className="textDetail">Casa: {props.foundCharacters.house}</p>
          <p className="textDetail">Género: {props.foundCharacters.gender}</p>
          <p className="textDetail">Estatus: {isAlive()}</p>
          <p className="textDetail">
            Ancestro: {props.foundCharacters.ancestry}
          </p>
        </div>
        <img
          className="imgHouseDetail"
          src={houseShield()}
          alt={`Escudo de ${props.foundCharacters.house}`}
          title={`Escudo de ${props.foundCharacters.house}`}
        />
      </section>
    </>
  );
}
export default CharacterDetail;
