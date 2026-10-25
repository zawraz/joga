import { Link } from '@tanstack/react-router';
import { SectionHeading } from '../ds/MartaJoga';

export default function Bio() {
  return (
    <section id="bio" className="mj-band">
      <div className="mj-container mj-split mj-split-reverse">
        <div className="mj-stack">
          <SectionHeading
            eyebrow="Cześć!"
            title="O mnie"
            intro="Jestem certyfikowaną instruktorką rekreacji ruchowej ze specjalizacją Hatha Joga oraz mentee w trakcie treningu nauczycielskiego według przekazu B.K.S. Iyengara."
          />
          <div className="mj-prose">
            <p>
              Od 2018 roku praktykuję jogę, a od 2019 prowadzę zajęcia grupowe. Jestem członkinią
              Stowarzyszenia Jogi Iyengara w Polsce, które dba o rozwój nauczycieli zgodnie z
              przekazem płynącym z Indii.
            </p>
            <p>
              Uwielbiam rzetelnie przygotowane sekwencje i bezpieczną praktykę, która wzmacnia ciało
              i nadaje mu elastyczność. Na zajęciach dawkuję informacje o filozofii jogi, anatomii
              oraz zależnościach psychosomatycznych. Dbam, by każdy znalazł czas na macie wyłącznie
              dla siebie.
            </p>
            <h3 className="mj-subtitle">Dlaczego joga Iyengara?</h3>
            <p>
              To kompletny system, w którym nauczyciele z międzynarodowym certyfikatem nigdy nie
              przestają się kształcić. Metoda kładzie nacisk na anatomiczną precyzję, prawidłowe
              ustawienie ciała, terapeutyczny wpływ asan i rzetelność w praktyce pranayamy. Pomoce
              (klocki, paski, koce) pomagają zrozumieć asanę, a pozycje wprowadzane są stopniowo, od
              dostępnych dla każdego po złożone.
            </p>
            <p>
              <Link to="/szczegoly">Moja droga, wykształcenie i filozofia nauczania</Link>
            </p>
            <p>
              <a
                href="https://joga.org.pl/metoda-iyengara.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Więcej o metodzie Iyengara
              </a>
            </p>
          </div>
        </div>
        <figure className="mj-photo">
          <img
            src="/photos/marta-forward-fold.jpg"
            alt="Marta w skłonie w przód na macie, w jasnej sali"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
