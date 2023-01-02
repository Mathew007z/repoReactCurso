import React from "react";
import "./ItemDetail.css";
import ButtonCount from '../ButtonCount/ButtonCount'
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';


 

  export const ItemDetail =  ( { data } ) => {

  const [goToCart, setGoToCart] = useState(false);

  const { addProduct } = useCartContext();





  const onAdd = (count) => { 
    setGoToCart(true);
    addProduct(data , count)
  }


  return (
    <div className="container">
      <div className="detail">
        <img src={data.img} alt={data.img} className="detail__img" />
        <ButtonCount onAdd={onAdd} data={data} cantidad={data.cantidad} />
        <div className="content">
          <h1>{data.nombre}</h1>
          <h3>${data.precio}</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
