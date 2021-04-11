import React, { Fragment ,useState} from 'react'

export default function NuevoProyecto() {

    //FUNCION QUE LEE LOS DATOS DEL FORMULARIO Y LOS PASA AL STATE

    //STATE PARA PROYECTO

    const [proyecto,guardarProyecto] = useState({
        nombre:''
    });
       
    //EXTRAER NOMBRE DEL PROYECTO

    const {nombre}=proyecto;

    //LEE LOS CONTENIDOS DEL INPUT    
    const onChangeProyecto=(e)=>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    }

    //CUANDO EL USUARIO ENVIA UN PROYECTO
    const onSubmitProyecto = e => {
        
        e.preventDefault();

        //VALIDAR EL PROYECTO

        //AGREGAR AL STATE

        //REINICIAR EL FORM

    }


    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                >Nuevo Proyecto</button>

            <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
            >

                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />

                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />

            </form>

        </Fragment>
    )
}
