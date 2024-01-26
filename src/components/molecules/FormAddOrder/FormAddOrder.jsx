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
    </form>
  )
}
