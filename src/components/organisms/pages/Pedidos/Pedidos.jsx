import React from 'react'
import './Pedidos.css'

export default function Pedidos() {
    return (
        <>
            <div className="container">
                <p className='bold'>Hoje</p>
                <div className="orders">
                    <div className="order">
                        <span className="order-name">
                            <div className="indicator">
                                <div className="indicator-line"></div>
                            </div>
                           
                            Coca-Cola
                        </span>
                        <i className="bi bi-check-lg"></i>
                    </div>
                    <div className="order">
                        <span className="order-name">
                            <div className="indicator">
                                <div className="indicator-line"></div>
                            </div>
                           
                            BRF
                        </span>
                        <i className="bi bi-check-lg"></i>
                    </div>
                    <div className="order">
                        <span className="order-name">
                            <div className="indicator grey">
                                <div className="indicator-line"></div>
                            </div>
                            
                            Ambev
                        </span>
                        <div className="link-color underline">Marcar como concluído</div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
