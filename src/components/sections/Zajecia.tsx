import { ClassCard, SectionHeading, Steps } from '../ds/MartaJoga';

export default function Zajecia() {
  return (
    <section id="zajecia" className="mj-band">
      <div className="mj-container">
        <div className="mj-split">
          <SectionHeading
            eyebrow="Zajęcia grupowe"
            title="Praktyka w grupie"
            intro="Klasyczna Hatha joga bazująca na przekazie B.K.S. Iyengara, doprawiona elementami treningu izometrycznego, osadzona w kontekstach filozoficznych. Każde zajęcia trwają ok. 60 min i składają się z krótkiej koncentracji (pratyahara), asan oraz regeneracji i savasany. Sesje składają się z elementów wzmacniających, rozluźniających oraz regeneracyjnych według miesięcznego rozkładu."
          />
          <div className="mj-stack">
            <h3 className="mj-subtitle">Miesięczny rozkład</h3>
            <Steps
              items={[
                { title: '1. tydzień miesiąca', text: 'Pozycje stojące' },
                { title: '2. tydzień miesiąca', text: 'Pozycje siedzące i skłony' },
                { title: '3. tydzień miesiąca', text: 'Wygięcia w tył' },
                { title: '4. tydzień miesiąca', text: 'Pozycje restoratywne i pranayama' },
              ]}
            />
          </div>
        </div>
        <div className="mj-cards">
          <ClassCard name="Grupa ogólna" kind="ogolna" meta="60 min" level="Dla każdego">
            Dla każdego, wykonujemy podstawowe asany, by opanować właściwe akcje i wzmocnić ciało.
            Sekwencja zbudowana jest od łatwiejszych do trudniejszych pozycji, możesz zdecydować o
            wariancie wykonywanej asany dopasowanym do Twojego samopoczucia. Na tych zajęciach
            budujemy solidne podstawy do wykonywania zaawansowanych pozycji, bazując na asanach z
            Sylabusa I. Zawsze podawane są warianty menstruacyjne oraz według Twoich potrzeb.
          </ClassCard>
          <ClassCard name="Grupa łagodna" kind="lagodna" meta="60 min" level="Delikatna praktyka">
            Dla każdego, kto chce praktykować delikatniej, ma pewne ograniczenia w ciele, które nie
            pozwalają na wykonywanie trudnych i wymagających pozycji, dla kobiet w trakcie
            menstruacji, w ciąży oraz kiedy odczuwasz zmęczenie i chcesz skupić się na oddechu.
            Zawsze podawane są warianty menstruacyjne lub według Twoich potrzeb.
          </ClassCard>
          <ClassCard
            name="Grupa intensywna"
            kind="intensywna"
            meta="60 min"
            level="Dłużej praktykujący"
          >
            Dla dłużej praktykujących oraz wykonujących pozycje odwrócone. Sekwencja budowana jest
            poprzez połączenie akcji w różnych grupach asan. Sięgamy do asan z Sylabusa II, rozwijając
            stopień zaawansowania w jodze. Zawsze podawane są warianty menstruacyjne oraz asany
            według Twoich potrzeb.
          </ClassCard>
          <ClassCard name="Grupa piątkowa" kind="piatkowa" meta="75 min" level="Dla każdego">
            Jest to grupa ogólna, dla każdego, kto chciałby wzmocnić ciało, pobawić się jogą,
            spróbować balansów na rękach, zrobić asanę w szalony sposób. Dla każdego, kto chce
            zaznać odrobiny szaleństwa podczas zajęć jogi i uwolnić endorfiny.
          </ClassCard>
          <ClassCard
            name="Lekcje pogłębione"
            kind="poglebione"
            meta="120 min"
            level="Soboty 9:00–11:00"
          >
            Zajęcia odbywające się dwa razy w miesiącu w wybrane soboty od 9:00 do 11:00 na sali
            fitness w Średzkim Parku Wodnym. Lekcje dla osób chcących pogłębić praktykę asan i
            pranayamy, sięgnąć po zaawansowane techniki oddechowe, pozycje lub ich warianty.
            Przykładowe tematy to nauka lub szlifowanie trudnych asan odwróconych, jak stanie na
            rękach czy stanie na barkach, joga dla kobiet, joga dla mężczyzn, pranayama czy
            medytacja.
          </ClassCard>
        </div>
      </div>
    </section>
  );
}
