import React from "react";
import { Link } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Orders = () => {
  const [allOrders , setAllOrders] = useState([]);

  useEffect(()=>{
    axios.get("https://tradingplateform.onrender.com/allOrders").then((res)=>{
      setAllOrders(res.data);
    })
     .catch((err) => {
        console.log(err);
      });
  },[]);

   const labels  = allOrders.map((subArray)=>subArray["name"]);

    const data = {
      labels,
      datasets:[{
        label:"stock price",
        data: allOrders.map((stock)=>stock.price),
        backgroundColor :"rgba(255,99,132,0.5)",
      },
      ],
    };

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
           <VerticalGraph data={data}/>
     </div>

      
  );
};

export default Orders;
