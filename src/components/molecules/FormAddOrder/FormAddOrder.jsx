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
          
          
          
        
          

          <span className="checkbox-title">Dias</span>
          <div className="label-container">
            <input type="checkbox" name="monday" id="monday" hidden />
            <label htmlFor="monday" className="checkbox-label">S</label>
            <input type="checkbox" name="tuesday" id="tuesday" hidden />
            <label htmlFor="tuesday" className="checkbox-label">T</label>
            <input type="checkbox" name="wednesday" id="wednesday" hidden />
            <label htmlFor="wednesday" className="checkbox-label">Q</label>
            <input type="checkbox" name="thursday" id="thursday" hidden />
            <label htmlFor="thursday" className="checkbox-label">Q</label>
            <input type="checkbox" name="friday" id="friday" hidden />
            <label htmlFor="friday" className="checkbox-label">S</label>
            <input type="checkbox" name="saturday" id="saturday" hidden />
            <label htmlFor="saturday" className="checkbox-label">S</label>
          </div>
          
        </fieldset>
    </form>
  )
}
