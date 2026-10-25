import { Button, SectionHeading, TopicList } from '../ds/MartaJoga';

export default function Wspolpraca() {
  return (
    <section id="wspolpraca" className="mj-band mj-band-cream">
      <div className="mj-container mj-split">
        <div className="mj-stack">
          <SectionHeading
            title="Współpraca"
            intro="Zapraszam do współpracy i stworzenia unikatowego spotkania z jogą dla Twoich przyjaciół, współpracowników, podczas wydarzeń specjalnych lub regularnych spotkań w Twojej firmie."
          />
          <div className="mj-actions">
            <Button href="#kontakt" block>
              Napisz do mnie
            </Button>
          </div>
        </div>
        <div className="mj-stack">
          <h3 className="mj-subtitle">Dla kogo?</h3>
          <TopicList
            items={[
              'Dla przyjaciół',
              'Dla współpracowników',
              'Na wydarzenia specjalne',
              'Na regularne spotkania w Twojej firmie',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
