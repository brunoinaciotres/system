import React from 'react'
import './PageHeader.css'


export default function PageHeader(props) {

  const handleAddOrder = () => {
    props.handleCloseModal()
  }
  return (
    <div className="page-header white-color bg-blue-gradient">
      <span className="page-title bold">
        {props.title}
      </span>
      <div className="action-button" onClick={handleAddOrder}>
        <i className="bi bi-plus-lg"></i>
        <span className="button-text">
          {props.buttonText}
        </span>
      </div>
    </div>
  )
}
