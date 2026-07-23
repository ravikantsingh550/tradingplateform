import React from "react";
import { Link } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders , setAllOrders] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allOrders").then((res)=>{
      setAllOrders(res.data);
    })
     .catch((err) => {
        console.log(err);
      });
  },[])

  return (
    <div className="orders">
      <div >
         <h3 className="title">Orders ({allOrders.length})</h3>
         <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
            
          </tr>

          {allOrders.map((stock , index)=>{

             return(
                       <tr key={index} >
                      
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td>{stock.mode}</td>
                      
                      
                    </tr>
                    )
          })}
          </table>
          </div>
      </div>
     </div>
  );
};

export default Orders;
