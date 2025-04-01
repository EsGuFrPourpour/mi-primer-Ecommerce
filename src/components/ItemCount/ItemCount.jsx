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
        <button className="btn-count" onClick={() => modifyCounter("-")}>
          -
        </button>
        <span className="num-count">{count}</span>
        <button className="btn-count" onClick={() => modifyCounter("+")}>
          +
        </button>
      </div>
    </div>
  )
}

export default ItemCount