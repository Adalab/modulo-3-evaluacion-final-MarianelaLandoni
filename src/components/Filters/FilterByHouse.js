function FilterByHouse(props) {
  const handleFilterHouse = (ev) => {
    props.handleFilterHouse(ev.target.value);
  };
  return (
    <>
      <label className="form__label" htmlFor="filterHouse">
        {' '}
        Filtra por casa{' '}
      </label>
      <select
        className="form__select"
        name="filterHouse"
        id="filterHouse"
        value={props.searchHouse}
        onChange={handleFilterHouse}
      >
        <option value="all">Todas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff </option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin </option>
      </select>
    </>
  );
}

export default FilterByHouse;
