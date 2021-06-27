import './App.css';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Habilidades from './components/Habilidades';
import Portfolio from './components/Portfolio';
import Contactenos from './components/Contactenos';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Nosotros/>     
      <Habilidades/>
      <Portfolio/>
      <Contactenos/>
    </div>
  );
}

export default App;
