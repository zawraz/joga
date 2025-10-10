import { Link } from '@tanstack/react-router';

export default function Bio() {
  return (
    <section id="bio" className="min-h-screen flex items-center bg-[#F5EDE4] py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-6xl lg:text-7xl tracking-wide text-[#5C4033] mb-8">
              CZEŚĆ!
            </h2>
            <p className="text-[#6B5447] text-lg leading-relaxed">
              Jestem instruktorką rekreacji ruchowej ze specjalizacją Hatha Joga oraz mentee w
              trakcie treningu nauczycielskiego.
            </p>
            <p className="text-[#6B5447] text-lg leading-relaxed">
              Od 2018 praktykuję jogę według przekazu B.K.S. Iyengara oraz jestem członkiem
              Stowarzyszenia Jogi Iyengara w Polsce.
            </p>
            <p className="text-[#6B5447] text-lg leading-relaxed">
              W jodze zachwycam się współzależnością oddechu, ruchu i umysłu oraz radością płynącą z
              harmonijnego wysiłku.
            </p>
            <p className="text-[#6B5447] text-lg leading-relaxed">
              Uczę się pod okiem najlepszych polskich i zagranicznych nauczycieli.
            </p>
            <div className="pt-8">
              <Link
                to="/szczegoly"
                className="inline-block px-16 py-4 border-2 border-[#5C4033] rounded-full font-serif tracking-[0.2em] text-sm text-[#5C4033] hover:bg-[#5C4033] hover:text-white transition-all duration-300"
              >
                SZCZEGÓŁY
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1000&fit=crop"
                alt="Marta Sawras"
                className="w-full h-auto object-cover filter grayscale"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#C4A587] rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
