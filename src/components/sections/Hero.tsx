import { Button, SectionHeading } from '../ds/MartaJoga';

export default function Hero() {
  return (
    <section id="home" className="mj-band">
      <div className="mj-container mj-split">
        <div className="mj-stack">
          <SectionHeading
            level={1}
            size="xl"
            eyebrow="Hatha joga według B.K.S. Iyengara"
            title="Marta Sawras"
            intro="Zajęcia grupowe w Szczepanowie i Środzie Śląskiej, spotkania indywidualne, joga online i warsztaty."
          />
          <div className="mj-actions">
            <Button href="#kontakt" block>
              Zapisz się na zajęcia
            </Button>
            <Button href="#grafik" variant="secondary" block>
              Zobacz grafik
            </Button>
          </div>
        </div>
        <figure className="mj-photo">
          <img
            src="/photos/marta-standing.jpg"
            alt="Marta w pozycji stojącej z nogą uniesioną na drążku, przy przeszklonej ścianie studia"
          />
        </figure>
      </div>
    </section>
  );
}
