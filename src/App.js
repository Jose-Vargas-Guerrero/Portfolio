import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Habilidades from './components/Habilidades';
import Portfolio from './components/Portfolio';
import Contactenos from './components/Contactenos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Nosotros/>      
      <Habilidades/>
      <Portfolio/>
      <Contactenos/>
    </div>
  );
}

export default App;
