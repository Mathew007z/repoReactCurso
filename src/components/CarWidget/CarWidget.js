import React from "react";
import "./CarWidget.css";
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const CarWidget = () => {

    const  {cantidadItem} = useCartContext(); 


  return (
    <div>
      <Link to='/cart' className="ver-carrito">
        🛒<span className="cantidad-carro">{parseInt(cantidadItem())}</span>
      </Link>
    </div>
  );
};
export default CarWidget;
