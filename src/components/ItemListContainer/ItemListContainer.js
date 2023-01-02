import React, { useEffect, useState } from "react";
import listaProductos from "../../productos";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import './itemlistcontainer.css'


export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const bk = async () => {
      try {
        const Newdata = await (await fetch("../data/data.json")).json();

        if (categoriaId) {
          setData(Newdata.filter((producto) => producto.tipo === categoriaId));
        } else {
          setData(Newdata);
  
        }
      } catch (err) {
        console.log(err);
      }
    };
    bk();
  }, [categoriaId]);


  return (
    <>

    <div className="container-div">
      <ItemList data={data} />
    </div>
      
    </>
  );
};

export default ItemListContainer;
