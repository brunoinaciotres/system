import React, { useEffect, useState } from 'react'
import './OrdersList.css'
import Order from '../../atoms/Order/Order'

export default function OrdersList(props) {
    
    const [orders, setOrders] = useState([

    ])

    useEffect(() => {

        (async function() {
            await fetch(`${props.API_URL}/orders/getOrdersOfDay`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                    let dataArr = data.map(order => {
                        return { ...order, concluded: false }
                    })
                    setOrders(dataArr)
                })
        })()

    }, [])



    return (
        <div className="orders">
            {orders.map(order => (
                <Order key={order.name} order={order} setOrders={setOrders} />
            ))}

        </div>
    )
}
