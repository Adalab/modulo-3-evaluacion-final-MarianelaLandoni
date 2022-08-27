function FilterByHouse(props) {
  const handleFilterHouse = (ev) => {
    props.handleFilterHouse(ev.target.value);
  };
  return (
    <form>
      <label htmlFor="filterHouse"> Filtra por casa </label>
      <select
        name="filterHouse"
        id="filterHouse"
        value={props.searchHouse}
        onChange={handleFilterHouse}
      >
        <option value="all">Todos</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff </option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin </option>
      </select>
    </form>
  );
}

export default FilterByHouse;
