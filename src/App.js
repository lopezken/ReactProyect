import { useState } from 'react'; //Para trabajar con estados de react
import Login from './Login/Login';
import Main from './Login/Main';
import './App.css';
import Navbar from './Conponet/Navbar';
import Product from './Conponet/Products';
const URL_API_LOGIN = "http://localhost/webservices/login/login.php";


function App() {
  const [desbloqueado, seDesbloquear ] = useState(false);

   //Resivimos el valor y lo imprimimos en consola
  const desbloquear = (valor)=>{
    console.log(valor);
    seDesbloquear(valor);
  }
  
  //Funciona como condicional, si conecta nos manda a Mail, si no a Login
  return (
    desbloqueado ?
    <div className="App">
      <Navbar/>
      <Product/>
    </div>
    :
    <Login urlApi={URL_API_LOGIN} desbloquear={desbloquear} />
  );
}

export default App;
