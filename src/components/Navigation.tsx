import { useEffect, useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'bio', 'joga', 'grafik', 'kontakt'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex flex-col gap-3 text-right">
      <button
        type="button"
        onClick={() => scrollToSection('home')}
        className={`font-serif text-xs md:text-sm tracking-[0.3em] transition-all duration-300 ${
          activeSection === 'home'
            ? 'text-white text-sm md:text-base font-semibold'
            : 'text-white/70 hover:text-white'
        }`}
      >
        HOME
      </button>
    </nav>
  );
}
