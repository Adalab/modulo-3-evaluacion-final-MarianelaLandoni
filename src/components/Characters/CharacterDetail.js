import { Link } from 'react-router-dom';
import '../../styles/layout/characterDetail.scss';

function CharacterDetail(props) {
  const isAlive = () => {
    if (props.foundCharacters.alive) {
      return 'Vivo';
    } else {
      return 'Muerto';
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
        </div>
      </section>
    </>
  );
}
export default CharacterDetail;
