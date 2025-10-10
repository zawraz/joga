import { Link } from '@tanstack/react-router';
import { ArrowLeft, Calendar, CheckCircle, Monitor, Video } from 'lucide-react';

export default function Online() {
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
          ZAJĘCIA ONLINE
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-[#6B5447] text-lg leading-relaxed">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <p className="text-xl text-center mb-8 text-[#5C4033] font-serif">
              Praktykuj jogę w zaciszu własnego domu, bez względu na to, gdzie się znajdujesz!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Monitor className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">Jak To Działa?</h3>
                  <p>
                    Zajęcia prowadzone są na platformie Zoom. Po zapisaniu się otrzymasz link do
                    zajęć oraz instrukcje dotyczące przygotowania przestrzeni do praktyki.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Calendar className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">Kiedy?</h3>
                  <ul className="space-y-2">
                    <li>• Wtorek: 19:00 - 20:30</li>
                    <li>• Czwartek: 18:00 - 19:30</li>
                    <li>• Niedziela: 09:00 - 10:30</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Zalety Zajęć Online</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Wygoda własnego domu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Brak dojazdu do studia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Elastyczne godziny zajęć</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Praktyka we własnym tempie</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Kameralna grupa uczestników</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Indywidualne korekty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Dostęp do nagrań zajęć</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C4A587]">✓</span>
                      <span>Atrakcyjna cena</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <Video className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Czego Potrzebujesz?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-4">
                    <span className="text-[#C4A587] text-2xl">•</span>
                    <div>
                      <strong className="text-[#5C4033]">Matę do jogi</strong> – najlepiej
                      antypoślizgową
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#C4A587] text-2xl">•</span>
                    <div>
                      <strong className="text-[#5C4033]">Stabilne połączenie internetowe</strong> –
                      minimum 5 Mb/s
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#C4A587] text-2xl">•</span>
                    <div>
                      <strong className="text-[#5C4033]">Komputer/tablet/telefon</strong> z kamerą i
                      mikrofonem
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#C4A587] text-2xl">•</span>
                    <div>
                      <strong className="text-[#5C4033]">Przestrzeń</strong> – około 2m x 1.5m
                      wolnej powierzchni
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#C4A587] text-2xl">•</span>
                    <div>
                      <strong className="text-[#5C4033]">Pomoce</strong> (opcjonalnie) – bloki, pas,
                      koc, poduszka
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#C4A587]/20 p-8 rounded-lg border-2 border-[#C4A587]">
            <h2 className="font-serif text-3xl text-[#5C4033] mb-6 text-center">Cennik</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#5C4033] font-semibold">Pojedyncze zajęcia (90 min)</span>
                <span className="font-serif text-2xl text-[#5C4033]">50 zł</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5C4033] font-semibold">Karnet 4 zajęcia</span>
                <span className="font-serif text-2xl text-[#5C4033]">180 zł</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5C4033] font-semibold">
                  Karnet miesięczny (nielimitowany)
                </span>
                <span className="font-serif text-2xl text-[#5C4033]">300 zł</span>
              </div>
            </div>
            <p className="text-sm text-[#6B5447] mt-6 text-center">
              *Pierwsze zajęcia próbne za darmo!
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <h2 className="font-serif text-3xl text-[#5C4033] mb-6 text-center">Jak Zacząć?</h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="font-serif text-2xl text-[#C4A587]">1.</span>
                <div>
                  <strong className="text-[#5C4033]">Skontaktuj się ze mną</strong> – napisz email
                  lub zadzwoń
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-serif text-2xl text-[#C4A587]">2.</span>
                <div>
                  <strong className="text-[#5C4033]">Umów się na zajęcia próbne</strong> – pierwsze
                  zajęcia są darmowe!
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-serif text-2xl text-[#C4A587]">3.</span>
                <div>
                  <strong className="text-[#5C4033]">Otrzymaj link do zajęć</strong> – wraz z
                  instrukcjami technicznymi
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-serif text-2xl text-[#C4A587]">4.</span>
                <div>
                  <strong className="text-[#5C4033]">Dołącz do zajęć</strong> – i ciesz się
                  praktyką!
                </div>
              </li>
            </ol>
          </div>

          <div className="text-center pt-8">
            <p className="text-xl mb-6 text-[#5C4033]">Gotowy, aby rozpocząć praktykę online?</p>
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
