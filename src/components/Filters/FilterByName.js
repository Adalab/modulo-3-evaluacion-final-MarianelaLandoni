function FilterByName(props) {
  const handleInputName = (ev) => {
    props.handleInputName(ev.target.value);
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
      />
    </label>
  );
}

export default FilterByName;
