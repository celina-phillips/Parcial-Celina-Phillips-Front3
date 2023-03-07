import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
const [preferidas,setPreferidas] = useState({
    mascota:"",
    color:""
})

const [show,setShow]= useState(false)
const [error,setError]= useState(false)

const handleSubmit = (e) => {
    e.preventDefault()
    if (preferidas.mascota.length>=3 && preferidas.color.length >=3){//puse 3 por que 6 era mucho para un color
        setShow(true)
        setError(false)
    }else{
        setError(true)
    }
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Mascota Preferida</label>
            <input type="text" value = {preferidas.mascota} onChange={(e) => setPreferidas({...preferidas, mascota: e.target.value.trim()})} />
            <label>Color preferido</label>
            <input type="text" value = {preferidas.color} onChange={(e) => setPreferidas({...preferidas, color: e.target.value})} />
            <button>Enviar</button>
            {error && "Coloque información válida"}
        </form>

        {show && <Card preferidas = {preferidas}/>}
    </div>

)
}

export default Form