import React, { useEffect, useState } from 'react'
import './OrdersList.css'
import Order from '../../atoms/Order/Order'

export default function OrdersList() {
    const API_URL_DEV = "127.0.0.1"
    const [orders, setOrders] = useState([
        
    ])

    useEffect(() => {
        fetch(`${API_URL_DEV}:3030/orders/getAll`, {
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
