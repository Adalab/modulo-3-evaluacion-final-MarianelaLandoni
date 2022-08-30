function ResetButton(props) {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.handleReset();
  };

  return (
    <button type="reset" className="form__btnReset" onClick={handleReset}>
      Borrar búsqueda
    </button>
  );
}
export default ResetButton;
