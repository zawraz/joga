import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="min-h-screen flex items-center bg-white text-[#5C4033] py-20 snap-start snap-always"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-8 text-center">
        <div className="mb-8">
          <p className="font-serif text-lg tracking-[0.3em] mb-2">JOGA</p>
          <h2 className="font-serif text-5xl lg:text-6xl tracking-wide">MARTA SAWRAS</h2>
        </div>

        <h3 className="font-serif text-4xl lg:text-5xl tracking-wide mb-12">KONTAKT</h3>

        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          <a
            href="tel:737493368"
            className="flex items-center justify-center gap-4 text-2xl hover:text-[#8B6F47] transition-colors"
          >
            <Phone size={28} />
            <span className="font-serif">TEL. 737 493 368</span>
          </a>

          <a
            href="mailto:martasawras@gmail.com"
            className="flex items-center justify-center gap-4 text-xl hover:text-[#8B6F47] transition-colors"
          >
            <Mail size={24} />
            <span className="tracking-wider">MAIL: MARTASAWRAS@GMAIL.COM</span>
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-16">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center bg-[#5C4033] text-white rounded-lg hover:bg-[#8B6F47] transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center bg-[#5C4033] text-white rounded-lg hover:bg-[#8B6F47] transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={32} />
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-[#C4A587]">
          <p className="text-[#6B5447] text-sm">
            © 2025 Joga Marta Sawras. Wszelkie prawa zastrzeżone.
          </p>
        </footer>
      </div>
    </section>
  );
}
