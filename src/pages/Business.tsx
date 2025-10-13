import { Link } from '@tanstack/react-router';
import { ArrowLeft, Briefcase, Building2, Heart, Target, TrendingUp, Users } from 'lucide-react';

export default function Business() {
  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-[#C4A587]">
        <div className="container mx-auto px-8 py-6">
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const element = document.getElementById('joga');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-[#5C4033] hover:text-[#8B6F47] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-serif tracking-wider">Powrót</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-8 lg:px-16 py-20">
        <h1 className="font-serif text-5xl lg:text-7xl tracking-wide text-[#5C4033] mb-12 text-center">
          WSPÓŁPRACA BIZNESOWA
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-[#6B5447] text-lg leading-relaxed">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <p className="text-xl text-center mb-8 text-[#5C4033] font-serif">
              Joga w miejscu pracy to inwestycja w zdrowie i efektywność Twojego zespołu. Zadbaj o
              dobrostan pracowników i buduj lepszą atmosferę w firmie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Building2 className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">Joga w Biurze</h3>
                  <p className="mb-3">
                    Regularne zajęcia jogi w przestrzeni firmowej lub online dla Twoich
                    pracowników.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li>• Zajęcia stacjonarne lub online</li>
                    <li>• Elastyczne godziny (przed/po pracy, lunch break)</li>
                    <li>• Dostosowanie do poziomu grupy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Users className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">
                    Warsztaty Firmowe
                  </h3>
                  <p className="mb-3">
                    Jednodniowe lub wielodniowe warsztaty dla zespołów – integracja połączona z
                    rozwojem.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li>• Team building przez jogę</li>
                    <li>• Warsztaty zarządzania stresem</li>
                    <li>• Mindfulness dla biznesu</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <TrendingUp className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">
                  Korzyści dla Firmy
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#5C4033] mb-3">Zdrowie Pracowników</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C4A587]">✓</span>
                        <span>Redukcja bólów kręgosłupa i karku</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C4A587]">✓</span>
                        <span>Poprawa postawy ciała</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C4A587]">✓</span>
                        <span>Wzmocnienie odporności</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C4A587]">✓</span>
                        <span>Lepszy sen i regeneracja</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5C4033] mb-3">Efektywność</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C4A587]">✓</span>
                        <span>Zwiększona koncentracja</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C4A587]">✓</span>
                        <span>Redukcja stresu</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C4A587]">✓</span>
                        <span>Lepsza atmosfera w zespole</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C4A587]">✓</span>
                        <span>Wyższa produktywność</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <Briefcase className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">
                  Jak Wygląda Współpraca?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl text-[#C4A587]">1.</span>
                    <div>
                      <strong className="text-[#5C4033]">Bezpłatna konsultacja</strong>
                      <p className="mt-1">
                        Omawiamy potrzeby Twojej firmy, liczbę uczestników i preferowane formy
                        zajęć.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl text-[#C4A587]">2.</span>
                    <div>
                      <strong className="text-[#5C4033]">Dopasowanie oferty</strong>
                      <p className="mt-1">
                        Przygotowuję spersonalizowaną ofertę dostosowaną do potrzeb i budżetu firmy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl text-[#C4A587]">3.</span>
                    <div>
                      <strong className="text-[#5C4033]">Zajęcia próbne</strong>
                      <p className="mt-1">
                        Organizujemy bezpłatne zajęcia próbne, aby pracownicy mogli poznać formę
                        zajęć.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl text-[#C4A587]">4.</span>
                    <div>
                      <strong className="text-[#5C4033]">Regularna współpraca</strong>
                      <p className="mt-1">
                        Rozpoczynamy stałą współpracę według ustalonego harmonogramu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <Target className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">
                  Dla Jakich Firm?
                </h2>
                <p className="mb-4">
                  Współpracuję z firmami z różnych branż, które dbają o dobrostan swoich
                  pracowników:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4">
                      <span className="text-[#C4A587] text-2xl">•</span>
                      <div>Firmy IT i startups</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#C4A587] text-2xl">•</span>
                      <div>Korporacje i biura</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#C4A587] text-2xl">•</span>
                      <div>Agencje marketingowe i kreatywne</div>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-4">
                      <span className="text-[#C4A587] text-2xl">•</span>
                      <div>Hotele i SPA</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#C4A587] text-2xl">•</span>
                      <div>Szkoły i uczelnie</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#C4A587] text-2xl">•</span>
                      <div>Organizacje non-profit</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#C4A587]/20 p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <Heart className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6 text-center">
                  Cennik
                </h2>
                <p className="text-center mb-6">
                  Ceny są ustalane indywidualnie w zależności od liczby osób, częstotliwości zajęć
                  i formy współpracy.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/50 p-4 rounded-lg">
                    <span className="text-[#5C4033] font-semibold">
                      Zajęcia regularne (60 min)
                    </span>
                    <span className="font-serif text-xl text-[#5C4033]">od 300 zł</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/50 p-4 rounded-lg">
                    <span className="text-[#5C4033] font-semibold">
                      Warsztaty firmowe (pół dnia)
                    </span>
                    <span className="font-serif text-xl text-[#5C4033]">od 1200 zł</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/50 p-4 rounded-lg">
                    <span className="text-[#5C4033] font-semibold">
                      Wyjazd integracyjny (weekend)
                    </span>
                    <span className="font-serif text-xl text-[#5C4033]">wycena indywidualna</span>
                  </div>
                </div>
                <p className="text-sm text-[#6B5447] mt-6 text-center">
                  *Pierwsze zajęcia próbne dla pracowników gratis! Rabaty przy długoterminowej
                  współpracy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <h3 className="font-serif text-2xl text-[#5C4033] mb-4 text-center">
              Firmy, które nam zaufały
            </h3>
            <p className="text-center text-[#6B5447]">
              Współpracuję z firmami, które stawiają na dobrostan pracowników i budują kulturę
              organizacyjną opartą na zdrowiu i równowadze.
            </p>
          </div>

          <div className="text-center pt-8">
            <p className="text-xl mb-6 text-[#5C4033]">
              Zainteresowany współpracą? Skontaktuj się i umów na bezpłatną konsultację!
            </p>
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-block px-16 py-4 border-2 border-[#5C4033] rounded-full font-serif tracking-[0.2em] text-sm text-[#5C4033] hover:bg-[#5C4033] hover:text-white transition-all duration-300"
            >
              SKONTAKTUJ SIĘ
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

