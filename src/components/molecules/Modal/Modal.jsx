import React, { useState } from 'react'
import "./Modal.css"
import FormAddOrder from '../FormAddOrder/FormAddOrder.jsx'
export default function Modal(props) {

    return (
        <div className={props.modalIsOpen == false ? "modal-background d-none" : "modal-background"}>
            <div className="modal">
                <div className="modal-top">
                    <span className="modal-title bold">Adicionar Pedido</span>
                    <i className="bi bi-x-lg" onClick={props.handleCloseModal}></i>
                </div>
                <FormAddOrder/>
            </div>
        </div>
    )
}
