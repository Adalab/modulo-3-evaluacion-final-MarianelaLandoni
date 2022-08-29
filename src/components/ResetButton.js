function ResetButton(props) {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.handleReset();
  };

  return <button onClick={handleReset}>Borrar búsqueda</button>;
}
export default ResetButton;
