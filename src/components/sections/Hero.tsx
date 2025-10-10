export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="text-center px-4">
        <p className="font-serif text-lg md:text-xl tracking-[0.3em] mb-8 opacity-90">
          SIŁA, ELASTYCZNOŚĆ, ZDROWIE
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider mb-12">
          JOGA
          <br />
          MARTA SAWRAS
        </h1>
        <div className="flex justify-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            className="opacity-60"
            aria-label="Yoga icon"
          >
            <title>Yoga icon</title>
            <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="50" cy="35" r="8" fill="white" />
            <path d="M 50 43 Q 40 50, 35 60" stroke="white" strokeWidth="2" fill="none" />
            <path d="M 50 43 Q 60 50, 65 60" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      <button
        type="button"
        onClick={() => document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 px-12 py-4 border-2 border-white rounded-full font-serif tracking-[0.2em] text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
      >
        GRAFIK
      </button>
    </section>
  );
}
