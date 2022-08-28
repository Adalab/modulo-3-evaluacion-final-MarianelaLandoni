import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';

function Filters(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form action="" onSubmit={handleForm}>
      <FilterByName
        inputValue={props.inputValue}
        handleInputName={props.handleInputName}
      />
      <FilterByHouse
        searchHouse={props.searchHouse}
        handleFilterHouse={props.handleFilterHouse}
      />
    </form>
  );
}

export default Filters;
