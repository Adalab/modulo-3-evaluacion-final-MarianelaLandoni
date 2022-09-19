import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import '../../styles/layout/filters.scss';
import ResetButton from '../ResetButton';
import AlphabeticalOrder from '../Filters/AlphabeticalOrder';
import FilterByGender from './FilterByGender';
// import FilterActor from './FilterActor';

function Filters(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <section>
        <form className="form" onSubmit={handleForm}>
          <FilterByName
            searchName={props.searchName}
            handleInputName={props.handleInputName}
          />

          {/* <FilterActor
          filterActor={props.filterActor}
          handleFilterActor={props.handleFilterActor}
        /> */}

          <FilterByHouse
            searchHouse={props.searchHouse}
            handleFilterHouse={props.handleFilterHouse}
          />

          <FilterByGender
            searchGender={props.searchGender}
            handleFilterGender={props.handleFilterGender}
          />

          <AlphabeticalOrder
            handleOrderCheck={props.handleOrderCheck}
            alphabeticOrder={props.alphabeticOrder}
          />

          <ResetButton handleReset={props.handleReset} />
        </form>
      </section>
    </>
  );
}

export default Filters;
