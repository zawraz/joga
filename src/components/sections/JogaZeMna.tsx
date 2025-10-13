import { Link } from '@tanstack/react-router';

export default function JogaZeMna() {
  const scrollToGrafik = () => {
    const element = document.getElementById('grafik');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="joga"
      className="min-h-screen flex items-center bg-[#D4BFB0] py-12 md:py-20 md:snap-start md:snap-always"
    >
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-white text-center mb-8 md:mb-16">
          JOGA ZE MNĄ
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* GRAFIK */}
          <div
            className="relative group cursor-pointer"
            onClick={scrollToGrafik}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToGrafik();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Przejdź do zajęć grupowych"
          >
            <div className="relative overflow-hidden rounded-lg h-64 md:h-96">
              <img
                src="https://images.unsplash.com/group-of-people-raising-their-hands-GvF7RkA-E9Q?w=600&h=800&fit=crop"
                alt="Zajęcia grupowe"
                className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 md:px-10 py-1.5 md:py-4 bg-[#C4A587] rounded-full font-serif tracking-[0.05em] md:tracking-[0.2em] text-xs md:text-sm text-white group-hover:bg-[#B39475] transition-all duration-300 shadow-lg whitespace-nowrap pointer-events-none">
              ZAJĘCIA GRUPOWE
            </span>
          </div>

          {/* INDYWIDUALNE */}
          <Link to="/indywidualne" className="relative group">
            <div className="relative overflow-hidden rounded-lg h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=800&fit=crop"
                alt="Zajęcia indywidualne"
                className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 md:px-10 py-1.5 md:py-4 bg-[#C4A587] rounded-full font-serif tracking-[0.05em] md:tracking-[0.2em] text-xs md:text-sm text-white group-hover:bg-[#B39475] transition-all duration-300 shadow-lg whitespace-nowrap pointer-events-none">
              INDYWIDUALNE
            </span>
          </Link>

          {/* ONLINE */}
          <Link to="/online" className="relative group">
            <div className="relative overflow-hidden rounded-lg h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=800&fit=crop"
                alt="Zajęcia online"
                className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 md:px-10 py-1.5 md:py-4 bg-[#C4A587] rounded-full font-serif tracking-[0.05em] md:tracking-[0.2em] text-xs md:text-sm text-white group-hover:bg-[#B39475] transition-all duration-300 shadow-lg whitespace-nowrap pointer-events-none">
              ONLINE
            </span>
          </Link>

          {/* WARSZTATY */}
          <Link to="/workshops" className="relative group">
            <div className="relative overflow-hidden rounded-lg h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=800&fit=crop"
                alt="Warsztaty"
                className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 md:px-10 py-1.5 md:py-4 bg-[#C4A587] rounded-full font-serif tracking-[0.05em] md:tracking-[0.2em] text-xs md:text-sm text-white group-hover:bg-[#B39475] transition-all duration-300 shadow-lg whitespace-nowrap pointer-events-none">
              WARSZTATY
            </span>
          </Link>

          {/* WYJAZDY */}
          <Link to="/retreats" className="relative group">
            <div className="relative overflow-hidden rounded-lg h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop"
                alt="Wyjazdy"
                className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 md:px-10 py-1.5 md:py-4 bg-[#C4A587] rounded-full font-serif tracking-[0.05em] md:tracking-[0.2em] text-xs md:text-sm text-white group-hover:bg-[#B39475] transition-all duration-300 shadow-lg whitespace-nowrap pointer-events-none">
              WYJAZDY
            </span>
          </Link>

          {/* WSPÓŁPRACA */}
          <Link to="/business" className="relative group">
            <div className="relative overflow-hidden rounded-lg h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=800&fit=crop"
                alt="Współpraca"
                className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 md:px-10 py-1.5 md:py-4 bg-[#C4A587] rounded-full font-serif tracking-[0.05em] md:tracking-[0.2em] text-xs md:text-sm text-white group-hover:bg-[#B39475] transition-all duration-300 shadow-lg whitespace-nowrap pointer-events-none">
              WSPÓŁPRACA
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
