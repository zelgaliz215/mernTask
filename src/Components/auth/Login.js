import React,{useState} from 'react'
import {Link} from 'react-router-dom';


export default function Login() {

//STATE PARA INICIAR SESION
const [usuario, guardarUsuario]=useState({
    email:'',
    password:''
})

//EXTRAER EL USUARIO

const { email , password } =usuario;

//CAPTURANDO LOS DATOS INGRESADOS EN LOS CAMPOS DEL FORMULARIOS Y ALMACENARLOS EN EL STATE
const onChange =(e)=>{
    
    guardarUsuario({
        ...usuario,
        [e.target.name] : e.target.value
    })
}

const onSubmit=e=>{
    e.preventDefault();

    //VALIDAR QUE NO HAYA CAMPOS VACIOS

    //PASARLO AL ACTION


}


    return (
               <div className="form-usuario">
                   <div className="contenedor-form sombra-drak">
                       <h1>Iniciar Sesión</h1>

                        <form 
                        onSubmit={onSubmit}
                        >
                            <div className="campo-form">
                                <label htmlFor="email">Email</label>
                                <input 
                                type="email" 
                                id="email"
                                name="email" 
                                placeholder="Tu Email"
                                onChange={onChange}
                                value= {email}
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
                                <input 
                                type="submit" 
                                className="btn btn-primario btn-block"
                                value= "Iniciar Sesión"
                                />
                            
                            </div>    

                        </form>

                         <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                             Obtener Cuenta
                         </Link>

                   </div>
               </div>
    )
}
