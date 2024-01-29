import React, { useState } from 'react'
import './Pedidos.css'

export default function Pedidos() {
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

    const handleStatusChange = (e) => {

        const statusDiv = e.target
        const orderId = e.target.id
        statusDiv.classList.toggle("d-none")

        setOrders(previousOrders => 
            
            previousOrders.map(order => 
                order.name == orderId ? { ...order, concluded: !order.concluded } : order
            )
        )

    }
    return (
        <>
            <div className="container">
                <p className='bold'>Hoje</p>
                <div className="orders">
                    {orders.map(order => (
                        <div key={order.name}className="order">
                            <span className="order-name">
                                <div className={order.concluded ? "indicator" : "indicator grey"}>
                                    <div className="indicator-line"></div>
                                </div>

                                {order.name}
                            </span>

                            <div onClick={handleStatusChange} id={order.name} className="order-status link-color underline">
                                Marcar como concluído
                            </div>
                            <i className={order.concluded == true ? "bi bi-check-lg" : 'd-none '}></i>
                        </div>
                    ))}
                   
                </div>
            </div>

        </>
    )
}
