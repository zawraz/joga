import { Button, PhotoPanel, SectionHeading } from '../ds/MartaJoga';

export default function Indywidualne() {
  return (
    <section id="indywidualne" className="mj-band">
      <div className="mj-container mj-split mj-split-reverse">
        <div className="mj-stack">
          <SectionHeading eyebrow="Solo, duet, trio" title="Zajęcia indywidualne" />
          <div className="mj-prose">
            <p>
              Współpraca zaczyna się od rozmowy o Twoich celach, samopoczuciu i ewentualnych
              ograniczeniach. Na tej podstawie przygotowuję plan dopasowany do Twoich potrzeb, który
              obejmuje każdą z grup asan.
            </p>
            <p>
              Podczas zajęć korzystamy z pomocy: klocków, pasków, koców, wałków i gum, aby wydobyć z
              asany właściwą akcję.
            </p>
          </div>
          <div className="mj-actions">
            <Button href="#kontakt" block>
              Umów spotkanie
            </Button>
          </div>
        </div>
        <PhotoPanel
          src="/photos/marta-backbend.jpg"
          alt="Marta w głębokim wygięciu do tyłu na tle łukowatych okien"
          title="Joga indywidualnie"
          lines={[['Solo · 60 lub 90 min'], ['Duet · 60 min'], ['Trio · 60 min']]}
        />
      </div>
    </section>
  );
}
