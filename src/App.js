import logo from './logo.svg';
import './App.css';
import WebDevelopment from './imagenes/WebDevelopment.jpg';

function App() {
  return (
    <div className="aplicacion tareas">
      <div className='logo'>
        <img
          src={WebDevelopment}
          className='logo-desarrollo-web' />
      
      </div>
    </div>
  );
}

export default App;
