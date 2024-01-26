import React, { useEffect, useState } from 'react'
import "./FormAddOrder.css"

export default function FormAddOrder(props) {
    const [inputValue, setValue] = useState("")
    const [frequency, setFrequency] = useState({
      1:false,
      2:false,
      3:false,
      4:false,
      5:false,
      6:false
    })

    useEffect(() => {
      console.log(frequency)
    }, [frequency])

    const handleChange = (e) => {
      const value = e.target.value
      setValue(value)
    }

    useEffect(() => {
      console.log("mudou modal")

      return () => {
        setValue("")
      }
    }, [props.modalIsOpen])

    const handleCheckboxChange = (e) => {
      const day = e.target.value
      
      setFrequency( previousDays => ({
        ...previousDays,
        [day] : !previousDays[day]
      }))
      
    }


  return (
    <>
    <form action="#">   
        <fieldset>
            <input required={true} className="main-input" value={inputValue} onChange={handleChange} type="text" name="name" />
            <label className="inside-label" htmlFor="name">Nome</label>
        </fieldset>
        <fieldset>
      
          <span className="fieldset-title">Dias</span>
          <div className="label-container">
            <input type="checkbox" onChange={handleCheckboxChange} name="monday" id="monday"  value={1} hidden />
            <label htmlFor="monday" className="checkbox-label">S</label>
            <input type="checkbox" onChange={handleCheckboxChange} name="tuesday" id="tuesday" value={2} hidden />
            <label htmlFor="tuesday" className="checkbox-label">T</label>
            <input type="checkbox" onChange={handleCheckboxChange}  name="wednesday" id="wednesday" value={3} hidden />
            <label htmlFor="wednesday" className="checkbox-label">Q</label>
            <input type="checkbox" onChange={handleCheckboxChange} name="thursday" id="thursday" value={4} hidden />
            <label htmlFor="thursday" className="checkbox-label">Q</label>
            <input type="checkbox" onChange={handleCheckboxChange} name="friday" id="friday" value={5} hidden />
            <label htmlFor="friday" className="checkbox-label">S</label>
            <input type="checkbox" onChange={handleCheckboxChange} name="saturday" id="saturday" value={6} hidden />
            <label htmlFor="saturday" className="checkbox-label">S</label>
          </div>
          
        </fieldset>

        <fieldset>
          <span className="fieldset-title">Frequência</span>
          <div className="label-container">
            <input type="radio" name="freq" id="1" value="1" hidden />
            <label htmlFor="1" className="checkbox-label square mb-1"> Só Hoje</label>
            <input type="radio" name="freq" id="7"  value="7"hidden />
            <label htmlFor="7" className="checkbox-label square mb-1">Toda Semana</label>
            <input type="radio" name="freq" id="15" value="15" hidden />
            <label htmlFor="15" className="checkbox-label square"> Cada 15 dias</label>
            <input type="radio" name="freq" id="30" value="30" hidden/>
            <label htmlFor="30" className="checkbox-label square">Todo mês</label>
          </div>
        </fieldset>
    </form>
    <div className="modal-bottom">
      <button className="main-button">Adicionar Pedido</button>
    </div>
    </>
  )
}
