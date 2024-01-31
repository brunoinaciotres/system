import React, { useEffect, useState } from 'react'
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
        },
        
    ])

    useEffect(() => {
        fetch("http://127.0.0.1:3030/orders/getOrdersOfDay", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/js on'
            }
        })
        .then(response => {
            return response.json()           
        })
        .then ( data => {
            console.log(data)
            let dataArr = data.map(order => {
                return {...order, concluded: false}
            })
            setOrders(dataArr)
        })
    }, [])

    
   
    return (
        <div className="orders">
            {orders.map(order => (
                <Order key={order.name} order={order} setOrders={setOrders} />
            ))}

        </div>
    )
}
