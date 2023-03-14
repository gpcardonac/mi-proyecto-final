import React, { useState } from 'react';
import'../hojas-de-estilo/TareaFormulario.css';

function TareaFormulario(props) {

  const [input, setInput] = useState('');
    
  const manejarCambio = e => {
    console.log('Escribiendo...');
  }  

  const manejarEnvio = e => {
    const tareaNueva = {
      id:'3454',
      texto: 'hola'
    }
  }

    return (
        <form className='tarea-formulario'>
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