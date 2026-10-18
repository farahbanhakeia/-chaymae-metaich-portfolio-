import { useState, type FormEvent } from 'react';
import { profile } from '@/data/profile';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';

const methods = [
  { icon: 'Mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'Linkedin', label: 'LinkedIn', value: 'chaymae-metaich', href: profile.linkedin },
  { icon: 'MapPin', label: 'Localisation', value: profile.location, href: undefined },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subjectLine = form.subject.trim() || `Contact portfolio — ${form.name}`;
    const body = `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subjectLine,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="overflow-hidden rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-900 to-navy-950 text-white shadow-card-hover dark:border-white/10">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-12">
            {/* Left — invitation */}
            <div>
              <SectionHeadingDark />

              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                Ouverte aux opportunités en finance, contrôle de gestion, reporting et data.
                Discutons de la façon dont je peux contribuer à vos analyses et à votre pilotage.
              </p>

              <p className="mt-2 font-display text-lg font-medium text-emerald-400">
                Let's turn data into decisions.
              </p>

              <ul className="mt-8 space-y-3">
                {methods.map((m) => {
                  const content = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-emerald-400">
                        <Icon name={m.icon} size={19} />
                      </span>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                          {m.label}
                        </p>
                        <p className="text-sm font-medium text-white">{m.value}</p>
                      </div>
                    </>
                  );
                  return (
                    <li key={m.label}>
                      {m.href ? (
                        <a
                          href={m.href}
                          target={m.href.startsWith('http') ? '_blank' : undefined}
                          rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-3.5 rounded-xl p-2 transition-colors hover:bg-white/5"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3.5 p-2">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <a
                href={profile.cvPath}
                download
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="Download" size={17} />
                Télécharger mon CV
              </a>
            </div>

            {/* Right — form */}
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm sm:p-7"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Nom"
                    value={form.name}
                    onChange={update('name')}
                    required
                    placeholder="Votre nom"
                  />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    required
                    placeholder="vous@exemple.com"
                  />
                </div>
                <div className="mt-4">
                  <Field
                    id="subject"
                    label="Objet"
                    value={form.subject}
                    onChange={update('subject')}
                    placeholder="Opportunité, question…"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Votre message…"
                    className="w-full resize-y rounded-xl border border-white/15 bg-navy-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <button type="submit" className="btn-primary mt-5 w-full">
                  <Icon name="Send" size={16} />
                  Envoyer le message
                </button>

                <p className="mt-3 text-center text-xs text-slate-400">
                  {sent ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                      <Icon name="CheckCircle2" size={14} />
                      Votre logiciel de messagerie s'ouvre avec le message pré-rempli.
                    </span>
                  ) : (
                    "Ce formulaire ouvre votre logiciel de messagerie avec le message pré-rempli."
                  )}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeadingDark() {
  return (
    <div>
      <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
        <span className="h-px w-6 bg-emerald-400/60" aria-hidden="true" />
        08 — Contact
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
        Construisons ensemble des analyses utiles à la décision.
      </h2>
    </div>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

function Field({ id, label, value, onChange, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-200">
        {label}
        {required && <span className="text-emerald-400"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-navy-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
      />
    </div>
  );
}
