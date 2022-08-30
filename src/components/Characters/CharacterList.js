import CharacterItem from './CharacterItem';
import '../../styles/layout/characterList.scss';

function CharacterList(props) {
  const renderCharacters = props.characterData.map((character, index) => {
    return <CharacterItem character={character} key={index} />;
  });

  return renderCharacters.length === 0 ? (
    <p className="textNotFound">
      No hay ningún nombre que coincida con {props.searchName}
    </p>
  ) : (
    <section className="main__listSection">
      <ul className="main__characterList">{renderCharacters}</ul>
    </section>
  );
}

export default CharacterList;
