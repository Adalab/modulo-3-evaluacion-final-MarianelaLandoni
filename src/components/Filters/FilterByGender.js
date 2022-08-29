function FilterByGender(props) {
  const handleFilterGender = (ev) => {
    props.handleFilterGender(ev.target.value);
  };
  return (
    <>
      <label className="form__label" htmlFor="filterGender">
        Filtra por género
      </label>
      <select
        className="form__select"
        name="filterGender"
        id="filterGender"
        value={props.searchGender}
        onChange={handleFilterGender}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </>
  );
}

export default FilterByGender;
