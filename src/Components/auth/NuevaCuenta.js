import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function NuevaCuenta() {

    //STATE PARA INICIAR SESION
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmar:''
    })

    //EXTRAER EL USUARIO

    const {nombre, email, password, confirmar } = usuario;

    //CAPTURANDO LOS DATOS INGRESADOS EN LOS CAMPOS DEL FORMULARIOS Y ALMACENARLOS EN EL STATE
    const onChange = (e) => {

        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //VALIDAR QUE NO HAYA CAMPOS VACIOS

        //PASSWORD MINIMO DE 6 CARACTERES

        //LOS DOS PASSWORDS SON IGUALES

        //PASARLO AL ACTION


    }


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-drak">
                <h1>Obtener nueva cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="email">Nombre del usuario</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Tu Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repetir Password"
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />

                    </div>

                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Vorlver a Iniciar Sesion
                         </Link>

            </div>
        </div>
    )
}
