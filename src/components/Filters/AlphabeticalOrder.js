function AlphabeticalOrder(props) {
  const handleOrderCheck = (ev) => {
    props.handleOrderCheck(ev.target.checked);
  };
  return (
    <>
      <label htmlFor="alphaOrder">Ordenar alfabéticamente</label>
      <input
        type="checkbox"
        name="alphaOrder"
        id="alphaOrder"
        checked={props.alphabeticOrder}
        onChange={handleOrderCheck}
      />
    </>
  );
}

export default AlphabeticalOrder;
