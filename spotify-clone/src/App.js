import './App.css';
import Icono from './componentes/Icono';
import Options from './componentes/NavOptions.jsx';
import BackOptions from './componentes/NavBehindOpt.jsx';
import Header from './componentes/Header.jsx';

function App() {
  return (
    <div className='App'>
      <div className='navBar'>
        <div className='navBarSup'>
          <Icono />
          <Options icono='home' nickLabel='Inicio'/>
          <Options icono='search' nickLabel='Search'/>
          <Options icono='library' nickLabel='Search'/>            
          <Options icono='add' nickLabel='Crear Playlist'/>
          <Options icono='heart' nickLabel='Tus me gusta'/>        
        </div>
        <div className='navBarInf'>
          <BackOptions />
        </div>
      </div>

      <div className='Header'>
        <Header />
      </div>
    </div>
  );
}

export default App;
