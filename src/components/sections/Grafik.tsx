export default function Grafik() {
  const schedule = [
    {
      day: 'Poniedziałek',
      time: '18:00 - 19:30',
      type: 'Hatha Joga - Poziom I',
      location: 'Studio centrum',
    },
    {
      day: 'Środa',
      time: '17:00 - 18:30',
      type: 'Hatha Joga - Poziom II',
      location: 'Studio centrum',
    },
    {
      day: 'Czwartek',
      time: '19:00 - 20:30',
      type: 'Joga regeneracyjna',
      location: 'Studio Mokotów',
    },
    {
      day: 'Sobota',
      time: '10:00 - 11:30',
      type: 'Hatha Joga - Wszystkie poziomy',
      location: 'Studio centrum',
    },
  ];

  return (
    <section
      id="grafik"
      className="min-h-screen flex items-center bg-[#F5EDE4] py-12 md:py-20 md:snap-start md:snap-always"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-[#5C4033] text-center mb-8 md:mb-16">
          GRAFIK
        </h2>
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {schedule.map((item) => (
            <div
              key={item.day}
              className="bg-white/50 backdrop-blur-sm p-5 md:p-8 rounded-lg border-2 border-[#C4A587] hover:border-[#5C4033] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-[#5C4033] mb-1 md:mb-2">
                    {item.day}
                  </h3>
                  <p className="text-[#6B5447] text-base md:text-lg font-semibold">{item.type}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-[#5C4033] font-serif text-lg md:text-xl mb-1">{item.time}</p>
                  <p className="text-[#6B5447] text-sm md:text-base">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-[#6B5447] text-base md:text-lg">
            Zapisy na zajęcia poprzez{' '}
            <button
              type="button"
              onClick={() => {
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#5C4033] font-semibold hover:underline bg-transparent border-none cursor-pointer p-0"
            >
              kontakt
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
