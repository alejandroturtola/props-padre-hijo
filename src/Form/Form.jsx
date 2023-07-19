import React, { useState } from 'react'
import Result from '../Result/Result'

const Form = () => {

  const [datoPadre, setDatoPadre] = useState("")
  const [datoHijo, setDatoHijo] = useState("")  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(datoPadre)
    setDatoHijo(datoPadre)
    setDatoPadre("")
  }  

  return (
    <div>
        <form >
            <input 
                type="text" 
                value={datoPadre}
                onChange={(e)=>setDatoPadre(e.target.value)}
            />
            <button type='submit' onClick={(e)=>handleSubmit(e)}>Pasar dato</button>
        </form>
        <Result datoRecibido={datoHijo}/>
    </div>
  )
}
export default Form