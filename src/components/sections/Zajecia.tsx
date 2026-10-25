import { ClassCard, SectionHeading } from '../ds/MartaJoga';

export default function Zajecia() {
  return (
    <section id="zajecia" className="mj-band">
      <div className="mj-container">
        <SectionHeading
          eyebrow="Zajęcia grupowe"
          title="Praktyka w grupie"
          intro="Klasyczna Hatha joga bazująca na przekazie B.K.S. Iyengara, doprawiona elementami treningu izometrycznego, osadzona w kontekstach filozoficznych. Zajęcia składają się z krótkiej koncentracji (pratyahara), asan oraz regeneracji i savasany."
        />
        <div className="mj-cards">
          <ClassCard name="Grupa ogólna" kind="ogolna" meta="60 min" level="Dla każdego">
            Praktyka asan dla każdego, bez względu na poziom zaawansowania. Sesja składa się z
            elementów wzmacniających, rozluźniających oraz regeneracyjnych.
          </ClassCard>
          <ClassCard name="Grupa łagodna" kind="lagodna" meta="60 min" level="Spokojny ruch">
            Praktyka dla każdego, kto potrzebuje spokojniejszego ruchu i rozluźnienia, dla osób po
            kontuzjach, w trakcie menstruacji oraz kobiet w ciąży.
          </ClassCard>
          <ClassCard
            name="Grupa intensywna"
            kind="intensywna"
            meta="60 min"
            level="Min. rok praktyki"
          >
            Praktyka zaawansowanych asan oraz pozycji odwróconych, dla osób praktykujących
            regularnie od co najmniej roku.
          </ClassCard>
          <ClassCard name="Kurs dla początkujących" kind="kurs" meta="12 spotkań" level="Start">
            Zamknięty cykl dla osób chcących rozpocząć przygodę z jogą lub powracających po długiej
            przerwie. ABC jogi: nauka podstawowych pozycji z każdej grupy asan, zgodnie z listą asan
            certyfikacyjnych sylabusa I.
          </ClassCard>
        </div>
      </div>
    </section>
  );
}
