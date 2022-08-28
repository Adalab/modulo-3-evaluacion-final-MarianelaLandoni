import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  const isAlive = () => {
    if (props.foundCharacters.alive) {
      return 'Vivo';
    } else {
      return 'Muerto';
    }
  };

  return (
    <section>
      <Link to="/">Volver</Link>
      <img
        src={props.foundCharacters.image}
        alt={`Foto de ${props.foundCharacters.name}`}
        title={`Foto de ${props.foundCharacters.name}`}
      />
      <h3>{props.foundCharacters.name}</h3>
      <p>Especie:{props.foundCharacters.species}</p>
      <p>Casa:{props.foundCharacters.house}</p>
      <p>Género:{props.foundCharacters.gender}</p>
      <p>Estatus:{isAlive()}</p>
    </section>
  );
}
export default CharacterDetail;
