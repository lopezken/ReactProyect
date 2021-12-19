/* CODIGO PARA MANDAR A LLAMAR Navbar y Product
import './App.css';
import Navbar from './Conponet/Navbar';
import Product from './Conponet/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Product/>
    </div>
  );
}

export default App;
*/

//import Login from './Conponet/Login/Login';
//import Main from './Login/Main' ; 

import Login from './Login/Login'
const URL_API_LOGIN = "http://localhost/webservices/login/login.php";

function App() {

   //Resivimos el valor y lo imprimimos en consola
  const desbloquear = (valor)=>{
    console.log(valor);
  }
  return (
    <Login urlApi={URL_API_LOGIN} desbloquear={desbloquear} />
  );
}

export default App;
