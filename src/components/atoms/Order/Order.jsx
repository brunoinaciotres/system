import React, { useEffect } from 'react'
import './Order.css'

export default function Order({order, setOrders}) {

    useEffect(() => {
        const ordersConcluded = localStorage.getItem('ordersConcluded')
        console.log("aq")
        if (ordersConcluded) {
            const ordersConcludedArr = ordersConcluded.split(",").map(order => order.trim())
            console.log("aq 2")
            console.log(ordersConcludedArr)
            setOrders(previousOrders => {
                console.log(previousOrders)
                return previousOrders.map(order => ({
                    ...order,
                    concluded: ordersConcludedArr.includes(order.name) 
                }))    
            }
            )
        }

    }, [])

    const handleStatusChange = (e) => {

        const statusDiv = e.target
        const orderId = e.target.id
        statusDiv.classList.toggle("d-none")

        setOrders(previousOrders => 
            
            previousOrders.map(order => 
                order.name == orderId ? { ...order, concluded: !order.concluded } : order
            )
        )
        const currentStorage = localStorage.getItem("ordersConcluded")
        
        
        if (!currentStorage) {
            localStorage.setItem("ordersConcluded", orderId)
        } else {
            console.log("ORDER ID -->" + orderId)
            const currentStorageArr = currentStorage.split(",").map(value => value.trim())
            console.log("currentSTORAGE " + currentStorageArr)
            console.log(currentStorageArr.includes(orderId))
            if (!currentStorageArr.includes(orderId)) {
                console.log("entrei")
                localStorage.setItem("ordersConcluded", `${currentStorage}, ${orderId}`)
            }
            
        }
        

    }

    return (
        <div key={order.name} className="order">
            <span className="order-name">
                <div className={order.concluded ? "indicator" : "indicator grey"}>
                    <div className="indicator-line"></div>
                </div>

                {order.name}
            </span>

            <div onClick={handleStatusChange} id={order.name} className={order.concluded == true ? "d-none": "order-status link-color underline"} >
                Marcar como concluído
            </div>
            <i className={order.concluded == true ? "bi bi-check-lg" : 'd-none '}></i>
        </div>
    )
}
