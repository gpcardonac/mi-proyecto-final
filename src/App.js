import logo from './logo.svg';
import './App.css';
import WebDevelopment from './imagenes/WebDevelopment.jpg';
import Tarea from './Componentes/Tarea';

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
      <Tarea texto='aprender react' />
    </div>
  </div>   


  );
}

export default App;
