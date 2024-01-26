import React, { useEffect, useState } from 'react'
import "./Modal.css"
import FormAddOrder from '../FormAddOrder/FormAddOrder.jsx'
export default function Modal(props) {

    useEffect(() => {

    }, [props.modalIsOpen])

    return (
        <div className={props.modalIsOpen == false ? "modal-background d-none" : "modal-background"}>
            <div className="modal">
                <div className="modal-top">
                    <span className="modal-title bold">Adicionar Pedido</span>
                    <i className="bi bi-x-lg" onClick={props.handleCloseModal}></i>
                </div>
                <FormAddOrder modalIsOpen={props.modalIsOpen}/>
            </div>
        </div>
    )
}
