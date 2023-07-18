import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css'

function ListaDeTareas(){

	//arreglo de tareas usando un hook
  /* tareas es el estado, 
	  setTareas es la funcion	para actualizar ese estado
		arreglo vacío para representar que no hay tareas
		como estado inicial
	*/
	const [tareas,setTareas] = useState([]);
	
	/* 
	recibimos tarea como argumento
	*/
	
	const agregarTarea = tarea => {
		//console.log("Tarea agregada");
		console.log(tarea)
		if(tarea.texto.trim()){
			tarea.texto = tarea.texto.trim();
      // colocamos la tarea recien agregada primero en la lista
      // totmamos las tareas anteriores y con el operador spread "..." las tareas 
      //se convierten en objetos individuales del arreglo
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
		}
	};

  const eliminarTarea = id => {
    /* filter metodo que filtra

    */
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea =>{
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      /* map necesita retornar valor*/
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

	return(
		// alternativa a div
		//React solo debe tener un componente principal
		//fragmentos: uso de etiquetas vacias
		// para escribir estructuras y evita agregar contenedor adicioanl div
		<>
			<TareaFormulario onSubmit={agregarTarea}/>
			<div className='tareas-lista-contenedor'>
				{  //renderizar lista de componentes
					 //las llaves para incluir metodo de arreglos de javascript
					
					 /* arreglo tareas que contiene todas las tareas luego llamamos a
					  funcion map: método que toma cada objeto (tarea), pasa una por una como argumento
					 	para otra funcion y realizará lo que especifiquemos con esa tarea
					*/
          /* atributo key para que react identifique un elemento de la lista
           no se puede acceder a key
             key no pasa como un prop, por eso se utiliza id y key
          */

					 tareas.map((tarea) => 
					 <Tarea 
              key={tarea.id}
              id={tarea.id}
					 		texto={tarea.texto}
							completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
					 />
					)
				}
			</div>
		</>
	);
}

export default ListaDeTareas;