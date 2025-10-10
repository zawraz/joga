import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export default function Szczegoly() {
  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-[#C4A587]">
        <div className="container mx-auto px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#5C4033] hover:text-[#8B6F47] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-serif tracking-wider">Powrót</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-8 lg:px-16 py-20">
        <h1 className="font-serif text-5xl lg:text-7xl tracking-wide text-[#5C4033] mb-12 text-center">
          O MNIE
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-[#6B5447] text-lg leading-relaxed">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Moja Droga z Jogą</h2>
            <p className="mb-4">
              Moją przygodę z jogą rozpoczęłam w 2018 roku, kiedy po raz pierwszy stanęłam na macie
              w studiu jogi Iyengara. Od pierwszych chwil wiedziałam, że to coś więcej niż tylko
              ćwiczenia fizyczne – to była droga do poznania siebie, swojego ciała i umysłu.
            </p>
            <p>
              Metoda Iyengara urzekła mnie precyzją, uwagą do szczegółów i terapeutycznym podejściem
              do praktyki. To właśnie te aspekty sprawiły, że joga stała się nieodłączną częścią
              mojego życia.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Wykształcenie i Certyfikaty</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>
                  <strong className="text-[#5C4033]">Instruktor rekreacji ruchowej</strong> ze
                  specjalizacją Hatha Joga
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>
                  <strong className="text-[#5C4033]">Mentee w treningu nauczycielskim</strong>{' '}
                  według przekazu B.K.S. Iyengara
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>
                  <strong className="text-[#5C4033]">
                    Członek Stowarzyszenia Jogi Iyengara w Polsce
                  </strong>{' '}
                  od 2018 roku
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>
                  <strong className="text-[#5C4033]">Regularnie uczestniczę w warsztatach</strong>{' '}
                  prowadzonych przez najlepszych polskich i zagranicznych nauczycieli jogi Iyengara
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Moja Filozofia Nauczania</h2>
            <p className="mb-4">W mojej praktyce i nauczaniu kładę nacisk na:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>
                  <strong className="text-[#5C4033]">Precyzję i bezpieczeństwo</strong> – każda asan
                  wykonywana jest z pełną świadomością ciała i jego możliwości
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>
                  <strong className="text-[#5C4033]">Harmonię oddechu, ruchu i umysłu</strong> –
                  joga to nie tylko ciało, ale całościowe podejście do zdrowia
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>
                  <strong className="text-[#5C4033]">Radość z praktyki</strong> – wysiłek w jodze
                  powinien być harmonijny i przynosić satysfakcję
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>
                  <strong className="text-[#5C4033]">Indywidualne podejście</strong> – każdy
                  ćwiczący ma inne możliwości i potrzeby
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#C4A587]">
            <h2 className="font-serif text-3xl text-[#5C4033] mb-6">Dlaczego Joga Iyengara?</h2>
            <p className="mb-4">
              Joga Iyengara to metoda stworzona przez B.K.S. Iyengara, jednego z najważniejszych
              nauczycieli jogi XX wieku. Charakteryzuje się:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>Szczególną uwagą do detali i precyzji w wykonywaniu asan</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>
                  Wykorzystaniem pomocy (bloki, pasy, koce) umożliwiających bezpieczną praktykę
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>Terapeutycznym podejściem do ciała i zdrowia</div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#C4A587] text-2xl">•</span>
                <div>Dostępnością dla osób w każdym wieku i o różnej sprawności fizycznej</div>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Link
              to="/"
              className="inline-block px-16 py-4 border-2 border-[#5C4033] rounded-full font-serif tracking-[0.2em] text-sm text-[#5C4033] hover:bg-[#5C4033] hover:text-white transition-all duration-300"
            >
              WRÓĆ DO STRONY GŁÓWNEJ
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
