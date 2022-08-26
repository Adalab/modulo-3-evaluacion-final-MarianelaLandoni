import CharacterItem from './CharacterItem';

function CharacterList(props) {
  const renderCharacters = props.characterData.map((character, index) => {
    return <CharacterItem character={character} key={index} />;
  });
  return <ul>{renderCharacters}</ul>;
}

export default CharacterList;
