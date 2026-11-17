import { Schedule, type ScheduleDay, SectionHeading } from '../ds/MartaJoga';

const schedule: ScheduleDay[] = [
  {
    day: 'Poniedziałek',
    slots: [
      {
        time: '20:00',
        name: 'Joga ogólna',
        place: 'Sala fitness, Średzki Park Wodny',
        kind: 'ogolna',
      },
    ],
  },
  {
    day: 'Środa',
    slots: [
      { time: '18:00', name: 'Joga łagodna', place: 'Świetlica Szczepanów', kind: 'lagodna' },
      { time: '19:00', name: 'Joga intensywna', place: 'Świetlica Szczepanów', kind: 'intensywna' },
      { time: '20:00', name: 'Joga online', place: 'Google Meet', kind: 'online' },
    ],
  },
  {
    day: 'Czwartek',
    slots: [
      {
        time: '19:00',
        name: 'Joga ogólna',
        place: 'Sala fitness, Średzki Park Wodny',
        kind: 'ogolna',
      },
    ],
  },
  {
    day: 'Piątek',
    slots: [
      { time: '18:00', name: 'Joga piątkowa', place: 'Sala SP Szczepanów', kind: 'piatkowa' },
      { time: '20:00', name: 'Joga online', place: 'Google Meet', kind: 'online' },
    ],
  },
];

export default function Grafik() {
  return (
    <section id="grafik" className="mj-band mj-band-cream">
      <div className="mj-container">
        <SectionHeading
          eyebrow="Sezon 2026/2027"
          title="Grafik"
          intro="Zajęcia trwają ok. 60 minut, grupa piątkowa 75 minut."
        />
        <Schedule days={schedule} />
      </div>
    </section>
  );
}
