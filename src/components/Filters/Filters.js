import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';

function Filters(props) {
  return (
    <form action="" /*onSubmit={}*/>
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
