import { Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { SectionHeading, TopicList } from '../components/ds/MartaJoga';
import { SiteFooter, SiteHeader } from '../components/SiteHeader';

const teachers = [
  'David Meloni',
  'Eyal Shifroni',
  'Corine Biria',
  'Lois Steinberg',
  'Natasza Moszkowicz',
  'Marianna Gutterwil',
  'Paulina Stróż',
  'Marek Bednarski',
  'Kasia Kapłon-Ogórek',
];

export default function Szczegoly() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SiteHeader onHome={false} />
      <main>
        <section className="mj-band">
          <div className="mj-container mj-split mj-split-reverse">
            <div className="mj-stack">
              <SectionHeading
                level={1}
                size="xl"
                eyebrow="Szczegóły"
                title="Moja droga z jogą"
                intro="Moją przygodę z jogą rozpoczęłam w 2018 roku. Metoda Iyengara urzeka mnie logiką, kompleksowością, precyzją i metodycznym rozwojem."
              />
              <div className="mj-prose">
                <p>
                  Od pierwszych chwil wiedziałam, że to coś więcej niż tylko ćwiczenia fizyczne:
                  droga do poznania siebie, swojego ciała i umysłu.
                </p>
                <p>
                  Moja droga nauczycielska to czysty przypadek (a może nie?). Pierwsze zajęcia
                  prowadziłam dla przyjaciół i znajomych w ramach wsparcia treningu. Nie prowadząc
                  jeszcze grup, zostałam poproszona o zastępstwo w dużej szkole jogi i tam już
                  zostałam, regularnie prowadząc wspaniałe grupy. Od razu poczułam, że to może być
                  mój sposób na życie.
                </p>
                <p>
                  Obecnie prowadzę warsztaty, zajęcia grupowe oraz spotkania online. Jestem mentee w
                  wymagającym procesie mentorskim, nieustannie ucząc się i poprawiając swój warsztat
                  nauczycielski. Każdego roku uczestniczę w warsztatach u polskich i zagranicznych
                  nauczycieli i korzystam z wiedzy udostępnianej przez Stowarzyszenie Jogi Iyengara,
                  które dba o wysoki poziom kompetencji nauczycieli.
                </p>
              </div>
            </div>
            <figure className="mj-photo">
              <img
                src="/photos/marta-namaste.jpg"
                alt="Marta w siadzie skrzyżnym z dłońmi złożonymi przed klatką piersiową"
              />
            </figure>
          </div>
        </section>

        <section className="mj-band mj-band-cream">
          <div className="mj-container mj-split">
            <div className="mj-stack">
              <SectionHeading title="Wykształcenie i certyfikaty" />
              <div className="mj-prose">
                <p>
                  Certyfikowana instruktorka rekreacji ruchowej ze specjalizacją Hatha Joga oraz
                  mentee w trakcie treningu nauczycielskiego według przekazu B.K.S. Iyengara.
                  Członkini Stowarzyszenia Jogi Iyengara w Polsce.
                </p>
                <p>
                  Uczestniczka 4-letnich kursów doskonalących z zakresu asan, anatomii oraz
                  filozofii u Pauliny Stróż (Asany Sylabus I oraz II), Marka Bednarskiego (4 osie
                  kręgosłupa), Katarzyny Pilorz (Joga kobieca) oraz Marianny Gutterwil.
                </p>
              </div>
            </div>
            <div className="mj-stack">
              <h2 className="mj-subtitle">Regularnie uczestniczę w warsztatach u</h2>
              <TopicList items={teachers} />
            </div>
          </div>
        </section>

        <section className="mj-band">
          <div className="mj-container">
            <SectionHeading title="Moja filozofia nauczania" />
            <div className="mj-cards">
              <div className="mj-prose">
                <h3 className="mj-subtitle">Precyzja i bezpieczeństwo</h3>
                <p>Każda asana wykonywana jest z pełną świadomością ciała i jego możliwości.</p>
              </div>
              <div className="mj-prose">
                <h3 className="mj-subtitle">Harmonia</h3>
                <p>
                  Oddech, ruch i umysł. Joga to nie tylko ciało, ale całościowe podejście do
                  zdrowia.
                </p>
              </div>
              <div className="mj-prose">
                <h3 className="mj-subtitle">Metodyczne podejście</h3>
                <p>
                  Zaplanowane konstruowanie sekwencji, które gwarantuje rozwój siły, elastyczności i
                  świadomości ruchu.
                </p>
              </div>
              <div className="mj-prose">
                <h3 className="mj-subtitle">Aktualna wiedza</h3>
                <p>Z zakresu anatomii, filozofii, asan, oddechu i psychosomatyki.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mj-band mj-band-cream">
          <div className="mj-container">
            <SectionHeading
              title="Dlaczego joga Iyengara?"
              intro="Joga według metody Iyengara jest kompletnym systemem, w którym nauczyciele, zobowiązani międzynarodowym certyfikatem, nigdy nie przestają się kształcić według wyśrubowanych standardów. Metoda kładzie nacisk na anatomiczną precyzję, prawidłowe ustawienie ciała, terapeutyczny wpływ asan oraz rzetelność w wykonywaniu pranayamy."
            />
            <TopicList
              items={[
                'Pomoce (klocki, paski, koce), które wydobywają z asany właściwą akcję i pomagają ją zrozumieć',
                'Metodyka nauczania: systemowe wprowadzanie asan, od dostępnych dla każdego po złożone',
              ]}
            />
            <div className="mj-prose">
              <p>
                <a
                  href="https://joga.org.pl/metoda-iyengara.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Więcej o metodzie Iyengara
                </a>
              </p>
              <p>
                <Link to="/" hash="kontakt">
                  Zapisz się na zajęcia
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
