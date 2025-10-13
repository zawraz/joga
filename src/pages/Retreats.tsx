import { Link } from '@tanstack/react-router';
import { ArrowLeft, Calendar, Heart, MapPin, Plane, Sunrise } from 'lucide-react';

export default function Retreats() {
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
          WYJAZDY JOGOWE
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-[#6B5447] text-lg leading-relaxed">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <p className="text-xl text-center mb-8 text-[#5C4033] font-serif">
              Wyjazdy jogowe to wyjątkowa okazja do odpoczynku, regeneracji i głębokiej praktyki w
              pięknych miejscach z dala od codziennego zgiełku.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Sunrise className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">Program Dnia</h3>
                  <ul className="space-y-2">
                    <li>• Poranne praktyki jogi</li>
                    <li>• Medytacja i pranayama</li>
                    <li>• Warsztaty tematyczne</li>
                    <li>• Czas wolny na relaks</li>
                    <li>• Wieczorne praktyki restoracyjne</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Heart className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">Co Oferujemy?</h3>
                  <ul className="space-y-2">
                    <li>• Zakwaterowanie w pięknych miejscach</li>
                    <li>• Zdrowe, pełnowartościowe posiłki</li>
                    <li>• Codzienne zajęcia jogi</li>
                    <li>• Czas na relaks i integrację</li>
                    <li>• Wycieczki lokalne (opcjonalnie)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <Plane className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Dla Kogo?</h2>
                <p className="mb-4">
                  Wyjazdy jogowe są dostępne dla osób na każdym poziomie zaawansowania. Niezależnie
                  od tego, czy dopiero zaczynasz swoją przygodę z jogą, czy praktykujesz od lat,
                  znajdziesz tu przestrzeń do rozwoju.
                </p>
                <p className="mb-4">
                  To doskonała okazja dla osób, które chcą odpocząć od codzienności, zregenerować
                  siły i poświęcić czas tylko dla siebie. Wyjazdy sprzyjają również poznaniu nowych
                  osób i nawiązaniu wartościowych znajomości.
                </p>
                <p>
                  Możesz przyjechać sam lub z przyjaciółmi – atmosfera wyjazdów sprzyja integracji i
                  tworzeniu więzi.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Destynacje</h2>
                <p className="mb-4">
                  Organizujemy wyjazdy zarówno w Polsce, jak i za granicą. Wybieramy miejsca, które
                  sprzyjają relaksowi i praktyce – z dala od hałasu, w otoczeniu natury.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#C4A587]/10 p-4 rounded-lg">
                    <h4 className="font-serif text-lg text-[#5C4033] mb-2">Polska</h4>
                    <ul className="space-y-1 text-base">
                      <li>• Bieszczady</li>
                      <li>• Karkonosze</li>
                      <li>• Wybrzeże Bałtyku</li>
                      <li>• Mazury</li>
                    </ul>
                  </div>
                  <div className="bg-[#C4A587]/10 p-4 rounded-lg">
                    <h4 className="font-serif text-lg text-[#5C4033] mb-2">Zagranica</h4>
                    <ul className="space-y-1 text-base">
                      <li>• Grecja</li>
                      <li>• Hiszpania</li>
                      <li>• Portugalia</li>
                      <li>• Indie (w planach)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#C4A587]/20 p-8 rounded-lg border-2 border-[#C4A587]">
            <h2 className="font-serif text-3xl text-[#5C4033] mb-6 text-center">
              Nadchodzące Wyjazdy
            </h2>
            <div className="space-y-6">
              <div className="bg-white/50 p-6 rounded-lg">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl text-[#5C4033]">
                      Wiosenny Retreat w Bieszczadach
                    </h3>
                    <span className="font-serif text-2xl text-[#5C4033]">
                      1400 zł/os.
                    </span>
                  </div>
                  <p className="text-[#6B5447] mb-2">
                    5 dni intensywnej praktyki w sercu gór. Codzienne zajęcia jogi, medytacje,
                    warsztaty filozofii jogi i wycieczki górskie.
                  </p>
                  <div className="flex gap-4 text-sm text-[#8B6F47] mt-3">
                    <span>
                      <Calendar className="inline mr-2" size={16} />
                      15-19 maja 2025
                    </span>
                    <span>
                      <MapPin className="inline mr-2" size={16} />
                      Bieszczady
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl text-[#5C4033]">
                      Letni Retreat nad Morzem
                    </h3>
                    <span className="font-serif text-2xl text-[#5C4033]">
                      1800 zł/os.
                    </span>
                  </div>
                  <p className="text-[#6B5447] mb-2">
                    7 dni relaksu nad polskim morzem. Poranne praktyki na plaży, SUP yoga,
                    medytacje o zachodzie słońca i czas na regenerację.
                  </p>
                  <div className="flex gap-4 text-sm text-[#8B6F47] mt-3">
                    <span>
                      <Calendar className="inline mr-2" size={16} />
                      1-7 lipca 2025
                    </span>
                    <span>
                      <MapPin className="inline mr-2" size={16} />
                      Wybrzeże Bałtyku
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl text-[#5C4033]">Jesienny Retreat w Grecji</h3>
                    <span className="font-serif text-2xl text-[#5C4033]">
                      3200 zł/os.
                    </span>
                  </div>
                  <p className="text-[#6B5447] mb-2">
                    8 dni w greckim raju. Intensywna praktyka jogi, warsztaty, wycieczki po wyspie
                    i czas na odnowę w słonecznej Grecji.
                  </p>
                  <div className="flex gap-4 text-sm text-[#8B6F47] mt-3">
                    <span>
                      <Calendar className="inline mr-2" size={16} />
                      20-27 września 2025
                    </span>
                    <span>
                      <MapPin className="inline mr-2" size={16} />
                      Kreta, Grecja
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#6B5447] mt-6 text-center">
              *Ceny zawierają zakwaterowanie, wyżywienie i wszystkie zajęcia. Dojazd we własnym
              zakresie.
            </p>
          </div>

          <div className="text-center pt-8">
            <p className="text-xl mb-6 text-[#5C4033]">
              Gotowy na niezapomnianą przygodę? Zarezerwuj miejsce!
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
              ZAREZERWUJ
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

