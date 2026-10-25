import { ContactCard, SectionHeading } from '../ds/MartaJoga';

export default function Kontakt() {
  return (
    <section id="kontakt" className="mj-band mj-band-cream">
      <div className="mj-container mj-split">
        <SectionHeading
          title="Kontakt"
          intro="Zapisy i pytania wyślij telefonicznie lub mailowo. Odpowiem z informacją o wolnych miejscach i zasadach współpracy."
        />
        <ContactCard
          name="Marta Sawras"
          fields={[
            { label: 'Telefon', value: '737 493 368', copy: false },
            { label: 'E-mail', value: 'martasawras@gmail.com', copy: false },
          ]}
          transfer={[
            { label: 'Odbiorca', value: 'Konrad Sawras', copy: false },
            {
              label: 'Adres',
              value: 'ul. Hugona Kowarzyka 9/17, 51-128 Wrocław',
              copy: false,
            },
            { label: 'NIP', value: '8951964925', copy: false },
            {
              label: 'Nr konta (ING Bank Śląski)',
              value: '39 1050 1575 1000 0097 8190 1575',
              copyValue: '39105015751000009781901575',
            },
            { label: 'Tytuł przelewu', value: 'joga', copy: false },
          ]}
        />
      </div>
    </section>
  );
}
