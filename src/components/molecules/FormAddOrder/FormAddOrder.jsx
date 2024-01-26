import React, { useState } from 'react'
import "./FormAddOrder.css"
export default function FormAddOrder() {
    const [inputValue, setValue] = useState("")
    const [inputClassName, setInputClassName] = useState("main-input")

    const handleChange = (e) => {
        const value = e.target.value
       
        setValue(value)
           
        
        
    }


  return (
    <form action="#">   
        <fieldset>
            <input required={true} className={inputClassName} value={inputValue} onChange={handleChange} type="text" name="name" />
            <label className="inside-label" htmlFor="name">Nome</label>
        </fieldset>
        <fieldset>
          <input type="checkbox" name="monday" id="monday" className="d-none" />
          <span className="checkbox-title">Dias</span>
          <div className="label-container">
            <label htmlFor="monday" className="checkbox-label">S</label>
            <label htmlFor="monday" className="checkbox-label">T</label>
            <label htmlFor="monday" className="checkbox-label">Q</label>
            <label htmlFor="monday" className="checkbox-label">Q</label>
            <label htmlFor="monday" className="checkbox-label">S</label>
            <label htmlFor="monday" className="checkbox-label">S</label>
          </div>
          
        </fieldset>
    </form>
  )
}
