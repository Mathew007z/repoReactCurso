import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  // Use params devuelve un string
  const { id } = useParams();

  useEffect(() => {
    fetch("../data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.find((item) => item.id === parseInt(id))));
  }, [id]);

 
  
  return (
    <>
      <ItemDetail data={data}/>; 
    </>
     
  )
};

export default ItemDetailContainer;
