import { useState } from 'react'; //Para trabajar con estados de react
import Login from './Login/Login'
import Main from './Login/Main'
const URL_API_LOGIN = "http://localhost/webservices/login/login.php";

function App() {
  const [conectado, seConectado ] = useState(false);

   //Resivimos el valor y lo imprimimos en consola
  const acceder = (valor)=>{
    seConectado(valor);
  }
  

  //Funciona como condicional, si conecta nos manda a Mail, si no a Login
  return (
    conectado ?
    <Main />
    :
    <Login urlApi={URL_API_LOGIN} acceder={acceder} />
  );
}

export default App;
