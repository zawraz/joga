import { Link } from '@tanstack/react-router';
import { ArrowLeft, Clock, Heart, Target, Users } from 'lucide-react';

export default function Indywidualne() {
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
          ZAJĘCIA INDYWIDUALNE
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-[#6B5447] text-lg leading-relaxed">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <p className="text-xl text-center mb-8 text-[#5C4033] font-serif">
              Zajęcia indywidualne to idealne rozwiązanie dla osób, które pragną praktyki
              dostosowanej do swoich potrzeb, możliwości i celów.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Target className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">Dla Kogo?</h3>
                  <ul className="space-y-2">
                    <li>• Osób rozpoczynających praktykę jogi</li>
                    <li>• Zaawansowanych praktykujących</li>
                    <li>• Osób z kontuzjami lub dolegliwościami</li>
                    <li>• Kobiet w ciąży</li>
                    <li>• Osób starszych</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
              <div className="flex items-start gap-4 mb-4">
                <Heart className="text-[#C4A587] mt-1" size={28} />
                <div>
                  <h3 className="font-serif text-2xl text-[#5C4033] mb-3">Korzyści</h3>
                  <ul className="space-y-2">
                    <li>• 100% indywidualne podejście</li>
                    <li>• Dostosowanie tempa do Twoich możliwości</li>
                    <li>• Skupienie na Twoich celach</li>
                    <li>• Elastyczny grafik</li>
                    <li>• Szybszy postęp w praktyce</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <Clock className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Jak Wyglądają Zajęcia?</h2>
                <p className="mb-4">
                  Każde zajęcia indywidualne rozpoczynają się od rozmowy o Twoim samopoczuciu,
                  celach i ewentualnych ograniczeniach. Na tej podstawie buduję sekwencję asan
                  dostosowaną do Twoich potrzeb.
                </p>
                <p className="mb-4">
                  Podczas praktyki zwracam uwagę na prawidłowe wykonanie każdej pozycji, korzystając
                  z pomocy (bloki, pasy, koce), które umożliwiają bezpieczną i efektywną praktykę.
                </p>
                <p>
                  Po zajęciach otrzymasz wskazówki dotyczące samodzielnej praktyki oraz ewentualnych
                  ćwiczeń do wykonania w domu.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <div className="flex items-start gap-4">
              <Users className="text-[#C4A587] mt-1" size={28} />
              <div className="flex-1">
                <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Zajęcia dla Małych Grup</h2>
                <p className="mb-4">
                  Oprócz zajęć indywidualnych oferuję również zajęcia dla małych grup (2-4 osoby).
                  To doskonałe rozwiązanie dla przyjaciół, par czy członków rodziny, którzy chcą
                  wspólnie praktykować jogę.
                </p>
                <p>
                  Zajęcia grupowe są bardziej przystępne cenowo, a jednocześnie zachowują kameralny
                  charakter i indywidualne podejście.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#C4A587]/20 p-8 rounded-lg border-2 border-[#C4A587]">
            <h2 className="font-serif text-3xl text-[#5C4033] mb-6 text-center">Cennik</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#5C4033] font-semibold">Zajęcia indywidualne (60 min)</span>
                <span className="font-serif text-2xl text-[#5C4033]">200 zł</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5C4033] font-semibold">Zajęcia indywidualne (90 min)</span>
                <span className="font-serif text-2xl text-[#5C4033]">280 zł</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5C4033] font-semibold">
                  Zajęcia dla małej grupy (90 min)
                </span>
                <span className="font-serif text-2xl text-[#5C4033]">150 zł/os.</span>
              </div>
            </div>
            <p className="text-sm text-[#6B5447] mt-6 text-center">
              *Możliwość zakupu karnetu na kilka zajęć z rabatem
            </p>
          </div>

          <div className="text-center pt-8">
            <p className="text-xl mb-6 text-[#5C4033]">
              Zainteresowany zajęciami? Skontaktuj się ze mną!
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
              KONTAKT
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
