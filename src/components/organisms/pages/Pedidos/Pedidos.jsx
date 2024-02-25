import React, { useState } from 'react'
import './Pedidos.css'
import OrdersList from '../../../molecules/OrdersList/OrdersList'

export default function Pedidos() {
   
    return (
        <>
            <div className="container">
                <p className=''>Hoje</p>
                <OrdersList/>
            </div>

        </>
    )
}
