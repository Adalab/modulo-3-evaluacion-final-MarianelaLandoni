function FilterByName(props) {
  const handleInputName = (ev) => {
    props.handleInputName(ev.target.value);
  };

  const handleEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
    }
  };

  return (
    <label htmlFor="characterName">
      Escribe un personaje:
      <input
        type="text"
        name="characterName"
        id=""
        placeholder="Dobby"
        value={props.inputValue}
        onChange={handleInputName}
        onKeyDown={handleEnter}
      />
    </label>
  );
}

export default FilterByName;
