import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  
  /*
  cuando el usuario escriba debemos manejar el estado del cambio
  */

  const [input, setIntput] = useState('');

  const manejarCambio = e => {

    //console.log('Escribiendo...');
    //e.target.value extrae el valor del campo de texto   
    setIntput(e.target.value);     
    //console.log(e.target.value); 
  };

  
  /* se activa con clic en boton
    se recibe un evento "e" como argumento cuando se envie el formulario
    evitando que la pagina se vuelva a cargar
  */ 
   const manejarEnvio = e => {
    // para que la app no se vuelva a cargar al enviar formulario
    e.preventDefault();
    // prueba de preventDefault
    //console.log('Enviando formulario');
    const tareaNueva = {
      // paquete uuid para crear identificadores únicos
      id: uuidv4(),
      texto: input,
      completada: false
    };
    //console.log(tareaNueva);
    // onSubmit, esto sucederá cuando el formulario se intente enviar
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
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;