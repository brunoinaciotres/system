import React, { useState } from 'react'
import './OrdersList.css'
import Order from '../../atoms/Order/Order'

export default function OrdersList() {
    
    const [orders, setOrders] = useState([
        {
            name: "Ambev",
            concluded: false,
        },
        {
            name:"BRF",
            concluded:false
        }
    ])

    
   
    return (
        <div className="orders">
            {orders.map(order => (
                <Order order={order} setOrders={setOrders} />
            ))}

        </div>
    )
}
