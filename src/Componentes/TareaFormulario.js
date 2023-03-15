import React, { useState } from 'react';
import'../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuid4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');
    
  const manejarCambio = e => {
    setInput(e.target.value);
   /* console.log('Escribiendo...');*/

  };  

  const manejarEnvio = e => {
    e.preventDefault();
  /*  console.log('enviando formulario...');*/

    const tareaNueva = {
      id:uuid4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);
  };

    return (
        <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}>
          <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una Tarea'
            name='texto'
            onChange={manejarCambio}
          />
        <button className='tarea-boton'>
            Agregar tarea
        </button>
     </form>
    );
}
export default TareaFormulario;