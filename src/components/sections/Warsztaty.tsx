import { SectionHeading, TopicList } from '../ds/MartaJoga';

export default function Warsztaty() {
  return (
    <section id="warsztaty" className="mj-band">
      <div className="mj-container mj-split">
        <div className="mj-stack">
          <SectionHeading
            eyebrow="3–4 godziny"
            title="Warsztaty"
            intro="Dłuższe, specjalistyczne zajęcia poświęcone jednemu zagadnieniu. Pozwalają dokładniej zgłębić temat i zostawiają uczestników z wiedzą do samodzielnej praktyki."
          />
          <div className="mj-prose">
            <p>
              Pierwsza część to krótki wstęp teoretyczny i praktyka asan. Druga część jest
              poświęcona regeneracji i regulacji układu nerwowego poprzez asany i pranayamę
              dopasowane do tematu.
            </p>
            <p>Uczestnicy otrzymują materiały teoretyczne i konspekt asan.</p>
          </div>
        </div>
        <div className="mj-stack">
          <h3 className="mj-subtitle">Tematyka</h3>
          <TopicList
            items={[
              'Zaawansowane asany i inwersje',
              'Pranayama – sztuka oddechu',
              'Zdrowa postawa',
              'Joga dla kobiet',
              'Joga restoratywna',
              'Psychosomatyczne aspekty jogi',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
