import { PriceCard, SectionHeading } from '../ds/MartaJoga';

export default function Cennik() {
  return (
    <section id="cennik" className="mj-band mj-band-cream">
      <div className="mj-container">
        <SectionHeading title="Cennik" size="xl" />
        <div className="mj-price-grid">
          <PriceCard
            tier="sala"
            title="Sala"
            rows={[
              { label: 'Pojedyncze wejście', price: '50 zł' },
              { label: '4 wejścia', price: '160 zł' },
              { label: '6 wejść', price: '230 zł' },
              { label: '8 wejść', price: '280 zł' },
              { label: '12 wejść', price: '370 zł' },
            ]}
          />
          <PriceCard
            tier="online"
            title="Online"
            rows={[
              { label: 'Pojedyncze wejście', price: '40 zł' },
              { label: '4 wejścia', price: '140 zł' },
              { label: '6 wejść', price: '200 zł' },
              { label: '8 wejść', price: '250 zł' },
            ]}
          />
          <PriceCard
            tier="combo"
            title="Sala + Online"
            rows={[
              { label: '8 wejść (4 sala + 4 online)', price: '270 zł' },
              { label: '12 wejść (6 sala + 6 online)', price: '370 zł' },
              { label: '16 wejść (8 sala + 8 online)', price: '470 zł' },
            ]}
          />
          <PriceCard
            tier="individual"
            title="Indywidualne"
            rows={[
              { label: 'Solo (60 min)', price: '190 zł' },
              { label: 'Solo (90 min)', price: '280 zł' },
              { label: 'Duet (60 min)', price: '130 zł / os.' },
              { label: 'Trio (60 min)', price: '110 zł / os.' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
