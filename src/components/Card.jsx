import React from 'react'

const Card = ({preferidas}) => {
return (
    <div>
        <h3>Su mascota preferida es un: {preferidas.mascota}</h3>
        <h3>Su color preferido es el: {preferidas.color}</h3>
    </div>
)
}

export default Card