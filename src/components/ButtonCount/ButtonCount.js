import React, { useState } from "react";
import "./ButtonCount.css";





export const ButtonCount = ( { cantidad,  onAdd } ) => {

  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    count > 0  ? setCount(count - 1) : setCount(0);
  };


  const agregarProducto = () => { 
    onAdd(count);
  }


  return (
    <div className="counter">
      <button  onClick={decrementar}>
        -
      </button>
      <span>{count}</span>
      <button onClick={incrementar}>
        +
      </button>
      <div>
        <button onClick={agregarProducto}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ButtonCount;
