import CharacterItem from './CharacterItem';

function CharacterList(props) {
  const renderCharacters = props.characterData.map((character, index) => {
    return <CharacterItem character={character} key={index} />;
  });
  return (
    <section className="main__listSection">
      <ul className="main__characterList">{renderCharacters}</ul>
    </section>
  );
}

export default CharacterList;
