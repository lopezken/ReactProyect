import React, { useRef, useState } from 'react'; //Acceder al Dom de react
import './login.css';
const URL_LOGIN = "http://localhost/webservices/login/login.php";

//import {sendData} from 'gespro-utils/akiri';


//Para mandar a validar los datos al servidor
const enviarData = async (url, data)=>{

const resp = await  fetch (url,{
    method: 'POST',
    body: JSON.stringify(data), //Convertir dato a texto
    Headers:{
      'content-Type':'application/json' // Valida que tipo de dato se esta mandando
    }
  });
  
  const json = await resp.json();
  console.log(json);

  return resp;

}



export default function Login(props) {

    const [error, setError]=useState(null);
    const [espera, setEspera]=useState(false);

    const refCorreo= useRef(null);
    const refClave= useRef(null);



    //Obtiene la referencia del objeto correo y contraseña
    const handleLogin= async ()=> {
        setEspera(true)
        const data= {
            "usuario" : refCorreo.current.value,
            "clave": refClave.current.value
        };           


        const resp = await enviarData (URL_LOGIN,data); //LLamamdos la constante y pedimos la URL y el data   
        props.accerder(resp.conectado)
        setError(resp.error)
        
        setEspera(false);

        resp.conectado && props.desbloquear(resp.conectado);                
        resp.error && setError(resp.error);
        
       
    }

  return (
    <div className="login">
      <div className="row">
        <div className="col-sm-4 offset-sm-4 mt-5 pt-5">
          <div className="card">
            <div className="card-header text-center">
              <h1> 🌋 Inicio </h1>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="spnCorreo">
                    📧
                  </span>
                </div>
                <input
                  type="email"                  
                  className="form-control"
                  placeholder="Digite su correo"
                  aria-label="email"
                  ref={refCorreo} //Acceder a los datos, llamado desde la constante refCorreo
                  aria-describedby="spnCorreo"
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="spnClave">
                    🔒
                  </span>
                </div>
                <input
                  type="password"                  
                  className="form-control"
                  placeholder="Digite su contraseña"
                  aria-label="password"
                  ref={refClave}
                  aria-describedby="spnClave"                  
                />
              </div>

              {
                error &&
                <div className='alert alert-danger'>
                  {error}
                </div>
              }
              
              <button 
                onClick={handleLogin}
                disabled={ espera  }
                className="btn btn-info btn-large btn-block"
                > 
                Acceder {espera && <span>⌛</span>  }
              </button>

              <div className="card-footer">
                ¿olvidó su contraseña? <a href="http://"> recuperar </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
