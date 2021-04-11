import React from 'react'
import Proyecto from './Proyecto';

export default function ListadoProyectos() {

        const proyectos=[
            {nombre:'tienda virtual'},
            {nombre:'intranet'},
            {nombre:'diseño de sitios web'},
        ]

    return (
       <ul className="listado-proyectos">
           {proyectos.map(proyecto =>(
               <Proyecto 
               proyecto={proyecto}
               />
           ))}
       </ul>
    )
}
