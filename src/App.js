/*import logo from './logo.svg';*/
import './App.css';
import WebDevelopment from './imagenes/WebDevelopment.jpg';

import ListaDeTareas from './Componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion tareas">
      <div className='logo-contenedor'>
        <img
          src={WebDevelopment}
          className='logo-desarrollo-web' />
      </div>
    <div className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
      <ListaDeTareas />
    </div>
  </div>   
  );
}

export default App;
