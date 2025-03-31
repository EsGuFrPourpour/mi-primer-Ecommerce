import "./ItemCount.css"

function ItemCount({stock, count, setCount}) {

  function modifyCounter(operation) {
    if (operation === "+") {
      if (count < stock) {
        setCount(count + 1);
      }
    } else {
      if (count > 1) {
        setCount(count - 1);
      };
    };
  };

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button onClick={() => modifyCounter("-")}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => modifyCounter("+")}>
          +
        </button>
      </div>
    </div>
  )
}

export default ItemCount