import type { EducationItem } from '@/types';

/** Formation académique — strictement issue du CV. */
export const education: EducationItem[] = [
  {
    id: 'skema',
    degree: 'Mastère Spécialisé — Audit, Contrôle & Systèmes d\'Information (ACSI)',
    school: 'SKEMA Business School',
    period: 'Intégration : février 2027',
    status: 'À venir',
    upcoming: true,
    icon: 'GraduationCap',
    details: [
      "Formation spécialisée à l'intersection : audit, contrôle, contrôle de gestion, systèmes d'information, contrôle interne, data & outils de pilotage.",
      "Objectif : renforcer mon profil finance d'une dimension plus poussée en audit, contrôle et systèmes d'information.",
    ],
  },
  {
    id: 'mbs',
    degree: 'Programme Grande École — Finance d\'entreprise',
    school: 'Montpellier Business School',
    period: '2022 — 2026',
    icon: 'GraduationCap',
    details: [
      'Parcours Grande École, orientation finance d\'entreprise, parcours fléché CCA.',
      'Domaines : finance d\'entreprise, analyse financière, comptabilité, contrôle de gestion, audit, stratégie, analyse de données, management.',
      'Mémoire : rôle des systèmes de contrôle de gestion dans la décision stratégique des PME de services.',
    ],
  },
  {
    id: 'bac',
    degree: 'Baccalauréat — Sciences Mathématiques B',
    school: 'Baccalauréat',
    period: 'Juillet 2020',
    icon: 'BookOpen',
    details: ['Formation scientifique à forte composante mathématique.'],
  },
];
