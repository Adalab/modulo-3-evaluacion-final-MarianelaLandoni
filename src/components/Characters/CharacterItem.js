import { Link } from 'react-router-dom';

function CharacterItem(props) {
  const defaultImage = (img) => {
    if (img === '') {
      return 'https://image.winudf.com/v2/image1/Y29tLmVyZ2UuaGFycnlwd3Bfc2NyZWVuXzBfMTU0ODk0NDk2OV8wNTE/screen-0.jpg?fakeurl=1&type=.webp';
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
