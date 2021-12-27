
import '../css/newuser.css'
import '../css/bootstrap.min.css'
import '../css/bootstrap-theme.css'


import React from 'react';
import { useForm } from 'react-hook-form';
const URL_API= 'http://localhost/webservices/login/registrar.php';


export default function Formulario() {
  const { register, handleSubmit, formState: { errors, reset } } = useForm();
  const onSubmit = data => {
    console.log(data);
    fetch (URL_API, {  //Resive la URL como parametro, donde se cpnecya con el servicio |
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    })
    .then( (resp) => resp.json() )
    .then((json) =>{
        reset();
      console.log("repuesta", json);
    })
    .catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  }
  console.log(errors);
  
  return (

    <div className="a-box a-spacing-extra-large" >

    <div className="col-xs-12 offset-sm-4 mt-5 pt-">
      <div className="Formulari"> 
        <div className="container">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                 <hr />
                 <div className="input-group-prepend">
                 <form onSubmit={handleSubmit(onSubmit)}>

                  <h3 className="thin text-left">Crear cuenta</h3>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo Eletronico</label>
                        <input type="email"  name="usuario" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="usuario" {...register("usuario", {required: true, maxLength: 30})} />
                        {errors.usuario && <span> El usuario debe ser llenado </span> }
                    </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" id="clave"  name="clave" className="form-control" placeholder="clave" {...register("clave", {required: true, maxLength: 130})} />
                        {errors.clave && <span> La contraseña debe contener al menos seis caracteres. </span> }
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nombre Completo</label>
                        <input type="text" className="form-control" name = "nombre" placeholder="nombre" {...register("nombre", {required: true, maxLength: 100})} />
                        {errors.nombre && <span> Nombres debe ser llenado </span> }
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label">Apellidos</label>
                        <input className="form-control" name= "apellido "type="Apellidos" placeholder="apellido" {...register("apellidos", {required: true, maxLength: 100})} />
                        {errors.apellido && <span> Apellidos debe ser llenado </span> }
                      </div>

                      <hr />
                      
                        <div className="col-lg-8">                       
                          </div>
                    <div className="col-lg-4 text-center">
                    <button className="btn btn-action" type="submit">Register</button>
                    </div>
                      <hr />

                    <div id="legalTextRow" className="a-row a-spacing-top-medium a-size-small">
                    Al crear una cuenta, aceptas las <a href="/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&amp;nodeId=508088">Condiciones de Uso</a> y el <a href="/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&amp;nodeId=468496">Aviso de Privacidad</a> de Eccomerce.
                    </div>
                    <hr />
                    <div className="a-row">
                        ¿Ya tienes una cuenta?
                        <a className="a-link-emphasis" href="../">
                        Iniciar sesión
                         </a>
                    </div>
                    <hr />
                    <hr />
              
                 </form>
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>
      </div>
   
  </div>
  ) ;
}
