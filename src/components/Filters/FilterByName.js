import PropTypes from 'prop-types';

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
    <>
      <label className="form__label" htmlFor="characterName">
        Escribe un personaje:
      </label>
      <input
        className="form__input"
        type={props.inputType}
        name="characterName"
        id="characterName"
        placeholder={props.inputPlaceholder}
        value={props.searchName}
        onChange={handleInputName}
        onKeyDown={handleEnter}
      />
    </>
  );
}

FilterByName.defaultProps = {
  inputType: 'text',
  inputPlaceholder: 'Dobby',
};

FilterByName.propTypes = {
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  handleInputName: PropTypes.func.isRequired,
};
export default FilterByName;
