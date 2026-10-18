import { motion, useReducedMotion } from 'framer-motion';
import { heroStats, profile, targetRoles } from '@/data/profile';
import { HeroPortrait } from '@/components/HeroPortrait';
import { Icon } from '@/components/Icon';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="accueil" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-70" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left — copy */}
          <div className="max-w-xl">
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </motion.span>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6"
            >
              <span className="block font-mono text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                {profile.name}
              </span>
              <span className="mt-3 block font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 dark:text-white sm:text-5xl lg:text-6xl">
                {profile.headlineLine1}
                <br />
                <span className="text-gradient">{profile.headlineLine2}</span>
              </span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projets" className="btn-primary">
                Voir mes projets
                <Icon name="ArrowRight" size={17} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Icon name="Mail" size={17} />
                Me contacter
              </a>
              <a href={profile.cvPath} download className="btn-ghost">
                <Icon name="Download" size={17} />
                Télécharger mon CV
              </a>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 link-underline hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Icon name="Linkedin" size={16} />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 link-underline hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Icon name="Mail" size={16} />
                Email
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="MapPin" size={16} className="text-emerald-500" />
                {profile.location}
              </span>
            </motion.div>
          </div>

          {/* Right — portrait + floating analytics */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroPortrait />
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.dl
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 dark:border-white/10 dark:bg-white/10 sm:mt-16 lg:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="bg-cream px-5 py-5 dark:bg-navy-950">
              <dt className="font-display text-2xl font-bold text-navy-900 dark:text-white sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm font-medium text-navy-700 dark:text-slate-300">
                {s.label}
              </dd>
              {s.sub && (
                <dd className="font-mono text-xs uppercase tracking-wide text-slate-400">{s.sub}</dd>
              )}
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Target-roles ticker */}
      <div className="mt-14 border-y border-navy-100/70 py-3 dark:border-white/10">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-4 whitespace-nowrap">
            {[...targetRoles, ...targetRoles, ...targetRoles].map((role, i) => (
              <span key={i} className="inline-flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-medium">{role}</span>
                <Icon name="CircleDot" size={6} className="text-emerald-500" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
