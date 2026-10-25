import { NavBar } from './ds/MartaJoga';

export const homeSections = [
  { id: 'grafik', label: 'Grafik' },
  { id: 'zajecia', label: 'Zajęcia grupowe' },
  { id: 'cennik', label: 'Cennik' },
  { id: 'indywidualne', label: 'Indywidualne' },
  { id: 'online', label: 'Online' },
  { id: 'warsztaty', label: 'Warsztaty' },
  { id: 'bio', label: 'O mnie' },
  { id: 'kontakt', label: 'Kontakt' },
];

// On the homepage the links are in-page anchors; on sub-pages they point back to `/`.
export function SiteHeader({
  activeSection,
  onHome = true,
}: {
  activeSection?: string;
  onHome?: boolean;
}) {
  const base = onHome ? '' : '/';
  return (
    <header className="mj-header">
      <NavBar
        homeHref={`${base}#home`}
        links={homeSections.map(({ id, label }) => ({
          label,
          href: `${base}#${id}`,
          current: activeSection === id,
        }))}
      />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mj-footer">
      <p>© 2026 Joga Marta Sawras</p>
    </footer>
  );
}
