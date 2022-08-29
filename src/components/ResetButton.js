function ResetButton(props) {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.handleReset();
  };

  return (
    <button className="form__btnReset" onClick={handleReset}>
      Borrar búsqueda
    </button>
  );
}
export default ResetButton;
