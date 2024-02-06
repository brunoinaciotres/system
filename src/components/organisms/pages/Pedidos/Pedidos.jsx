import React, { useState } from 'react'
import './Pedidos.css'
import OrdersList from '../../../molecules/OrdersList/OrdersList'

export default function Pedidos(props) {
   
    return (
        <>
            <div className="container">
                <p className='bold'>Hoje</p>
                <OrdersList API_URL={props.API_URL}/>
            </div>

        </>
    )
}
