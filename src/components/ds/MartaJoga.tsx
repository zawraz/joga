// React port of the Marta Joga design system (claude.ai artifact "Marta Joga").
// Markup and class names match the system's bundle, so components.css styles both.
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactNode,
  useRef,
  useState,
} from 'react';
import './tokens.css';
import './components.css';

function cx(...names: (string | false | null | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = { variant?: ButtonVariant; block?: boolean } & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button({ variant = 'primary', block, className, ...rest }: ButtonProps) {
  const classes = cx('mj-btn', `mj-btn-${variant}`, block && 'mj-btn-block', className);
  if (rest.href !== undefined) {
    return <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes} />;
  }
  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button type="button" {...buttonProps} className={classes} />;
}

export function Tag({
  tone = 'neutral',
  children,
}: {
  tone?: 'neutral' | 'online' | 'level';
  children: ReactNode;
}) {
  return <span className={cx('mj-tag', tone !== 'neutral' && `mj-tag-${tone}`)}>{children}</span>;
}

export function SectionHeading({
  title,
  eyebrow,
  intro,
  size,
  level = 2,
}: {
  title: ReactNode;
  eyebrow?: ReactNode;
  intro?: ReactNode;
  size?: 'default' | 'xl';
  level?: 1 | 2 | 3;
}) {
  const Heading = `h${level}` as 'h1' | 'h2' | 'h3';
  return (
    <header className="mj-heading">
      {eyebrow ? <p className="mj-eyebrow">{eyebrow}</p> : null}
      <Heading className={cx('mj-title', size === 'xl' && 'mj-title-xl')}>{title}</Heading>
      {intro ? <p className="mj-intro">{intro}</p> : null}
    </header>
  );
}

export function PhotoPanel({
  src,
  alt,
  title,
  lines = [],
  ratio,
}: {
  src: string;
  alt: string;
  title: ReactNode;
  lines?: (string | string[])[];
  ratio?: string;
}) {
  return (
    <figure className="mj-photo" style={ratio ? { aspectRatio: ratio } : undefined}>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption className="mj-photo-panel">
        <p className="mj-photo-title">{title}</p>
        {lines.length ? (
          <ul className="mj-photo-lines">
            {lines.map((line) => {
              const parts = ([] as string[]).concat(line);
              return (
                <li key={parts.join('|')}>
                  {parts.map((part) => (
                    <span key={part}>{part}</span>
                  ))}
                </li>
              );
            })}
          </ul>
        ) : null}
      </figcaption>
    </figure>
  );
}

export type PriceRow = { label: string; price: string };

export function PriceCard({
  tier,
  title,
  rows,
  note,
}: {
  tier: 'sala' | 'online' | 'combo' | 'individual';
  title: string;
  rows: PriceRow[];
  note?: ReactNode;
}) {
  return (
    <section className={cx('mj-price', `mj-price-${tier}`)} aria-label={title}>
      <dl>
        {rows.map((row) => (
          <div className="mj-price-row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.price}</dd>
          </div>
        ))}
      </dl>
      {note ? <p className="mj-price-note">{note}</p> : null}
      <p className="mj-price-title" aria-hidden="true">
        {title}
      </p>
    </section>
  );
}

export type ScheduleSlot = {
  time: string;
  name: string;
  place?: string;
  kind: 'ogolna' | 'lagodna' | 'intensywna' | 'online';
};
export type ScheduleDay = { day: string; slots: ScheduleSlot[] };

export function Schedule({ days }: { days: ScheduleDay[] }) {
  return (
    <div className="mj-week" style={{ '--mj-days': days.length } as CSSProperties}>
      {days.map((d) => (
        <section className="mj-day" key={d.day}>
          <h3>{d.day}</h3>
          {d.slots.map((s) => (
            <div className={cx('mj-slot', `mj-slot-${s.kind}`)} key={`${s.time}-${s.name}`}>
              <span className="mj-slot-time">{s.time}</span>
              <div>
                <p className="mj-slot-name">{s.name}</p>
                {s.place ? <p className="mj-slot-place">{s.place}</p> : null}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export function ClassCard({
  name,
  kind = 'ogolna',
  meta,
  level,
  children,
}: {
  name: string;
  kind?: 'ogolna' | 'lagodna' | 'intensywna' | 'kurs';
  meta?: string;
  level?: string;
  children: ReactNode;
}) {
  return (
    <article className={cx('mj-class', `mj-class-${kind}`)}>
      <div className="mj-class-head">
        <h3 className="mj-class-name">{name}</h3>
        {meta ? <span className="mj-class-meta">{meta}</span> : null}
      </div>
      {level ? (
        <div>
          <Tag tone="level">{level}</Tag>
        </div>
      ) : null}
      <p>{children}</p>
    </article>
  );
}

export function Steps({ items }: { items: { title: string; text: ReactNode }[] }) {
  return (
    <ol className="mj-steps">
      {items.map((step) => (
        <li className="mj-step" key={step.title}>
          <div style={{ minWidth: 0 }}>
            <p className="mj-step-title">{step.title}</p>
            <p className="mj-step-text">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function TopicList({ items }: { items: string[] }) {
  return (
    <ul className="mj-topics">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export type ContactField = { label: string; value: string; copyValue?: string; copy?: boolean };

function CopyField({ label, value, copyValue, copy = true }: ContactField) {
  const [done, setDone] = useState(false);
  const valueRef = useRef<HTMLElement>(null);

  const selectText = () => {
    if (!valueRef.current) return;
    const range = document.createRange();
    range.selectNodeContents(valueRef.current);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const handleCopy = () => {
    if (!navigator.clipboard) {
      selectText();
      return;
    }
    navigator.clipboard.writeText(copyValue ?? value).then(() => {
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    }, selectText);
  };

  return (
    <div className="mj-field">
      <dt>{label}</dt>
      <dd ref={valueRef}>{value}</dd>
      {copy ? (
        <button
          type="button"
          className="mj-copy"
          onClick={handleCopy}
          data-done={done ? 'true' : 'false'}
          aria-label={`Kopiuj: ${label}`}
        >
          {done ? 'Skopiowano' : 'Kopiuj'}
        </button>
      ) : null}
    </div>
  );
}

export function ContactCard({
  name,
  fields,
  transfer = [],
  transferTitle = 'Dane do przelewu',
}: {
  name?: string;
  fields: ContactField[];
  transfer?: ContactField[];
  transferTitle?: string;
}) {
  return (
    <section className="mj-contact">
      {name ? <h3 className="mj-contact-name">{name}</h3> : null}
      <dl>
        {fields.map((f) => (
          <CopyField key={f.label} {...f} />
        ))}
      </dl>
      {transfer.length ? (
        <>
          <hr className="mj-contact-divider" />
          <p className="mj-eyebrow">{transferTitle}</p>
          <dl>
            {transfer.map((f) => (
              <CopyField key={f.label} {...f} />
            ))}
          </dl>
        </>
      ) : null}
    </section>
  );
}

export type NavLink = { label: string; href: string; current?: boolean };

export function NavBar({
  links,
  brand = 'Marta Sawras',
  homeHref = '#',
}: {
  links: NavLink[];
  brand?: string;
  homeHref?: string;
}) {
  const [open, setOpen] = useState(false);

  const renderLinks = (className?: string) => (
    <ul className={cx('mj-nav-links', className)}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            className="mj-nav-link"
            href={link.href}
            aria-current={link.current ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="mj-nav" aria-label="Główna nawigacja">
      <a className="mj-wordmark" href={homeHref}>
        {brand}
      </a>
      {renderLinks('mj-nav-inline')}
      <button
        type="button"
        className="mj-nav-toggle"
        aria-expanded={open}
        aria-controls="mj-nav-sheet"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Zamknij' : 'Menu'}
      </button>
      {open ? (
        <div className="mj-nav-sheet" id="mj-nav-sheet">
          {renderLinks()}
        </div>
      ) : null}
    </nav>
  );
}
