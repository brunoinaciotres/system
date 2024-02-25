import React, { useEffect, useState } from 'react'
import './OrdersList.css'
import Order from '../../atoms/Order/Order'

export default function OrdersList() {
    const API_URL_DEV = "177.205.192.209"
    const [orders, setOrders] = useState([
        
    ])

    useEffect(() => {
        fetch(`http://${API_URL_DEV}:3000/orders/getAll`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
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
