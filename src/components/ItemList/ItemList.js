import React from "react";
import Item from "../Item/Item";
import './itemlist.css';

const ItemList = ({ data }) => {





  
  return(

    <div className="card">
      {
        data.map((data)=> (
          <Item data ={data} key={data.id}/>
        ))}
    </div>

  ) 
};

export default ItemList;
