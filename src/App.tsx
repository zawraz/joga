import { useEffect, useState } from 'react';
import { homeSections, SiteFooter, SiteHeader } from './components/SiteHeader';
import Bio from './components/sections/Bio';
import Cennik from './components/sections/Cennik';
import Grafik from './components/sections/Grafik';
import Hero from './components/sections/Hero';
import Indywidualne from './components/sections/Indywidualne';
import Kontakt from './components/sections/Kontakt';
import Online from './components/sections/Online';
import Warsztaty from './components/sections/Warsztaty';
import Wspolpraca from './components/sections/Wspolpraca';
import Zajecia from './components/sections/Zajecia';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Mark the section that crosses the upper third of the viewport as current.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-30% 0px -65% 0px' }
    );
    for (const id of ['home', 'wspolpraca', ...homeSections.map((s) => s.id)]) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader activeSection={activeSection} />
      <main>
        <Hero />
        <Grafik />
        <Zajecia />
        <Cennik />
        <Indywidualne />
        <Online />
        <Warsztaty />
        <Wspolpraca />
        <Bio />
        <Kontakt />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
