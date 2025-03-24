import { useState } from 'react';
import './ItemCount.css';

function ItemCount() {

    const [count, setCount] = useState(1);
    
    function changeCount(operation){
        if(operation === "+"){
            if(count < 9){
                setCount(count + 1);
            };
        }else {
            if(count > 1){
                setCount(count - 1);
            };
        };
    };

  return (
    <div className= "itmCount">
        <button type="button" className="btn btn-outline-primary" onClick={() => changeCount("-")}>-</button>
        <p id="count">{count}</p>
        <button type="button" className="btn btn-outline-primary" onClick={() => changeCount("+")}>+</button>
    </div>
  );
};

export default ItemCount;