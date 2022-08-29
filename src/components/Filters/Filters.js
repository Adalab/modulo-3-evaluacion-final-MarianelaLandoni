import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import '../../styles/layout/filters.scss';
import ResetButton from '../ResetButton';

function Filters(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" action="" onSubmit={handleForm}>
      <FilterByName
        inputValue={props.inputValue}
        handleInputName={props.handleInputName}
      />
      <FilterByHouse
        searchHouse={props.searchHouse}
        handleFilterHouse={props.handleFilterHouse}
      />

      <ResetButton handleReset={props.handleReset} />
    </form>
  );
}

export default Filters;
