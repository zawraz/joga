import Navigation from './components/Navigation';
import Bio from './components/sections/Bio';
import Grafik from './components/sections/Grafik';
import Hero from './components/sections/Hero';
import JogaZeMna from './components/sections/JogaZeMna';
import Kontakt from './components/sections/Kontakt';

function App() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Bio />
      <JogaZeMna />
      <Grafik />
      <Kontakt />
    </div>
  );
}

export default App;
