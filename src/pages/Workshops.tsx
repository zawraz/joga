import { Link } from '@tanstack/react-router';
import { ArrowLeft, Calendar, Heart, Lightbulb, Users } from 'lucide-react';

export default function Workshops() {
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
          WARSZTATY
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-[#6B5447] text-lg leading-relaxed">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <p className="text-xl text-center mb-8 text-[#5C4033] font-serif">
              Warsztaty jogi to doskonała okazja do pogłębienia praktyki i poznania nowych aspektów
              jogi w kameralnej atmosferze.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Lightbulb className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">Tematyka</h3>
                  <ul className="space-y-2">
                    <li>• Zaawansowane asany i inwersje</li>
                    <li>• Pranayama – sztuka oddechu</li>
                    <li>• Praktyka dla kręgosłupa</li>
                    <li>• Joga restoratywna</li>
                    <li>• Filozofia jogi</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Users className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">Dla Kogo?</h3>
                  <ul className="space-y-2">
                    <li>• Praktykujących jogę regularnie</li>
                    <li>• Osób chcących pogłębić wiedzę</li>
                    <li>• Początkujących instruktorów</li>
                    <li>• Osób szukających inspiracji</li>
                    <li>• Wszystkich miłośników jogi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <Calendar className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">
                  Jak Wyglądają Warsztaty?
                </h2>
                <p className="mb-4">
                  Warsztaty trwają zazwyczaj 3-4 godziny i są poświęcone konkretnemu tematowi.
                  Podczas spotkania mamy czas na dokładne omówienie teorii, praktyczne wypróbowanie
                  technik oraz wymianę doświadczeń.
                </p>
                <p className="mb-4">
                  Każdy warsztat składa się z części teoretycznej i praktycznej. Dzięki temu nie
                  tylko ćwiczysz, ale również rozumiesz mechanizmy działania poszczególnych asan i
                  technik.
                </p>
                <p>
                  Warsztaty odbywają się w małych grupach (maksymalnie 12 osób), co pozwala na
                  indywidualne podejście i możliwość zadawania pytań.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <Heart className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Korzyści</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Pogłębienie wiedzy i praktyki</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Nauka nowych technik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Więcej czasu na każdy temat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Inspiracja do samodzielnej praktyki</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Wymiana doświadczeń</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Kameralna atmosfera</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Materiały do dalszej nauki</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Poznanie nowych osób</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#C4A587]/20 p-8 rounded-lg border-2 border-[#C4A587]">
            <h2 className="font-serif text-3xl text-[#5C4033] mb-6 text-center">
              Nadchodzące Warsztaty
            </h2>
            <div className="space-y-6">
              <div className="bg-white/50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-[#5C4033] mb-2">
                      Inwersje – Świat do Góry Nogami
                    </h3>
                    <p className="text-[#6B5447] mb-2">
                      Poznaj świat pozycji odwróconych i ich korzyści dla zdrowia.
                    </p>
                    <p className="text-sm text-[#8B6F47]">
                      <Calendar className="inline mr-2" size={16} />
                      15 lutego 2025, 10:00-14:00
                    </p>
                  </div>
                  <span className="font-serif text-2xl text-[#5C4033]">180 zł</span>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-[#5C4033] mb-2">
                      Pranayama – Moc Oddechu
                    </h3>
                    <p className="text-[#6B5447] mb-2">
                      Poznaj techniki oddechowe i ich wpływ na ciało i umysł.
                    </p>
                    <p className="text-sm text-[#8B6F47]">
                      <Calendar className="inline mr-2" size={16} />
                      22 marca 2025, 10:00-13:00
                    </p>
                  </div>
                  <span className="font-serif text-2xl text-[#5C4033]">150 zł</span>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-[#5C4033] mb-2">
                      Joga dla Kręgosłupa
                    </h3>
                    <p className="text-[#6B5447] mb-2">
                      Praktyka terapeutyczna dla zdrowia pleców i kręgosłupa.
                    </p>
                    <p className="text-sm text-[#8B6F47]">
                      <Calendar className="inline mr-2" size={16} />
                      12 kwietnia 2025, 10:00-14:00
                    </p>
                  </div>
                  <span className="font-serif text-2xl text-[#5C4033]">180 zł</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#6B5447] mt-6 text-center">
              *Liczba miejsc ograniczona – rezerwacja obowiązkowa
            </p>
          </div>

          <div className="text-center pt-8">
            <p className="text-xl mb-6 text-[#5C4033]">
              Zainteresowany warsztatami? Zapisz się już dziś!
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
              ZAPISZ SIĘ
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

