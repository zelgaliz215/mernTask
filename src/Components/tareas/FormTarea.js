import React from 'react'

export default function FormTarea() {
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre Tarea.."
                    className="input-text"
                    />
                </div>
                
                <div className="contenedor-input">
                    <input 
                    type="submit"
                    className="btn btn-primario"
                    value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    )
}
