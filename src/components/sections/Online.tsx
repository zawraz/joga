import { SectionHeading, Steps, TopicList } from '../ds/MartaJoga';

export default function Online() {
  return (
    <section id="online" className="mj-band mj-band-cream">
      <div className="mj-container mj-split">
        <div className="mj-stack">
          <SectionHeading
            eyebrow="Google Meet"
            title="Joga online"
            intro="Zajęcia na żywo to więcej niż odtwarzanie nagrania. To regularna, świadoma praktyka, w której otrzymujesz wskazówki, rozwijasz swoje umiejętności i budujesz coraz lepszą relację ze swoim ciałem."
          />
          <p className="mj-note">Poniedziałki 20:15 Wzmocnienie · Środy 20:15 Mobility · 60 min</p>
        </div>
        <div className="mj-stack">
          <Steps
            items={[
              {
                title: 'Krok 1',
                text: 'Napisz wiadomość na martasawras@gmail.com z prośbą o dostęp do zajęć online.',
              },
              {
                title: 'Krok 2',
                text: 'Otrzymasz zasady współpracy i zaproszenie z linkiem do transmisji w kalendarzu w telefonie.',
              },
              { title: 'Krok 3', text: 'Praktykuj na żywo, a w razie potrzeby z nagrania.' },
            ]}
          />
          <h3 className="mj-subtitle">Czego potrzebujesz?</h3>
          <TopicList items={['Mata', 'Pasek', '2 klocki', 'Koc', 'Poduszka']} />
        </div>
      </div>
    </section>
  );
}
