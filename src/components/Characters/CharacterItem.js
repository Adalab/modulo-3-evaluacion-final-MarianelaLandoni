import { Link } from 'react-router-dom';
import imageNotFound from '../../images/imageNotFound.jpg';

function CharacterItem(props) {
  const defaultImage = (img) => {
    if (img === '') {
      return imageNotFound;
    } else {
      return props.character.image;
    }
  };
  return (
    <li className="listItem">
      <Link className="linkItem" to={`/character/${props.character.id}`}>
        <picture className="imgItemContainer">
          <img
            className="imgItem"
            src={defaultImage(props.character.image)}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
        </picture>

        <h3 className="titleItem">{props.character.name}</h3>
        <p className="textItem">{props.character.species}</p>
      </Link>
    </li>
  );
}

export default CharacterItem;
