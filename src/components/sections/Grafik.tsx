import { Schedule, type ScheduleDay, SectionHeading } from '../ds/MartaJoga';

const schedule: ScheduleDay[] = [
  {
    day: 'Poniedziałek',
    slots: [
      { time: '20:15', name: 'Joga online', place: 'Google Meet · Wzmocnienie', kind: 'online' },
    ],
  },
  {
    day: 'Środa',
    slots: [
      { time: '18:00', name: 'Joga łagodna', place: 'Świetlica Szczepanów', kind: 'lagodna' },
      { time: '19:00', name: 'Joga intensywna', place: 'Świetlica Szczepanów', kind: 'intensywna' },
      { time: '20:15', name: 'Joga online', place: 'Google Meet · Mobility', kind: 'online' },
    ],
  },
  {
    day: 'Czwartek',
    slots: [{ time: '20:00', name: 'Joga ogólna', place: 'Basen, Środa Śląska', kind: 'ogolna' }],
  },
  {
    day: 'Piątek',
    slots: [{ time: '18:00', name: 'Joga ogólna', place: 'Sala SP Szczepanów', kind: 'ogolna' }],
  },
];

export default function Grafik() {
  return (
    <section id="grafik" className="mj-band mj-band-cream">
      <div className="mj-container">
        <SectionHeading
          eyebrow="Sezon 2026/2027"
          title="Grafik"
          intro="Każde zajęcia trwają ok. 60 minut."
        />
        <Schedule days={schedule} />
      </div>
    </section>
  );
}
