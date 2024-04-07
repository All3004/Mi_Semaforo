import React, { useState } from 'react';

const ElSemaforo = () => {
    const [color, setcolor]= useState(null);
    const handleclick=(nuevocolor)=>{setcolor(nuevocolor)}
    return (
        <div className='contenedor'>
            <button className={ `semaforoRojo ${color === "rojo" ? "activo" : ""}` } id='rojo' onClick={()=>handleclick("rojo")} >Rojo</button> 
            <button className= { `semaforoAmarillo ${color === "amarillo" ? "activo" : ""}` }id='amarillo' onClick={()=>handleclick("amarillo")}  >Amarrillo</button>
            <button className={ `semaforoVerde ${color === "verde" ? "activo" : ""}` } id='verde' onClick={()=>handleclick("verde")} >Verde</button>
           

        </div>
    );
}

export default ElSemaforo;
