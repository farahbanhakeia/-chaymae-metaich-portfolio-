import type { SocialLink, Stat } from '@/types';

/**
 * Informations personnelles centralisées.
 * Modifiez uniquement ce fichier pour mettre à jour l'identité, les liens et les textes clés.
 * Toutes les informations proviennent du CV / portfolio réels de Chaymae Metaich.
 */
export const profile = {
  name: 'Chaymae Metaich',
  firstName: 'Chaymae',
  lastName: 'Metaich',
  initials: 'CM',

  // Positionnement
  role: 'Finance × Data × Contrôle',
  headlineLine1: 'Finance, Data',
  headlineLine2: '& Contrôle',
  taglineFr: 'Transformer la donnée financière en analyses, contrôle et décisions.',
  taglineEn: 'Turning financial data into insight, control & decisions.',

  // Coordonnées
  location: 'Nador, Maroc',
  email: 'chaymae.metaich8@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chaymae-metaich-58a437219',
  github: '', // Optionnel — laisser vide pour masquer le lien GitHub partout sur le site.

  // Ressources
  cvPath: '/CV_Chaymae_Metaich.pdf', // Déposez votre CV réel dans /public sous ce nom.
  photo: '/chaymae-metaich.jpg',

  availability: 'Ouverte aux opportunités en finance, contrôle de gestion & data',

  // Mini résumé (hero / à propos)
  intro:
    "Étudiante en finance d'entreprise spécialisée dans l'analyse, le contrôle et l'exploitation des données financières. J'utilise les données et les outils digitaux pour transformer des informations brutes en analyses fiables, utiles à la prise de décision.",
};

/** Rôles ciblés — strictement cohérents avec le parcours réel. */
export const targetRoles: string[] = [
  'Contrôle de gestion',
  'Reporting & Pilotage de la performance',
  'Analyse financière',
  'Audit & Contrôle interne',
  'Financial Data Analyst',
];

/** Chiffres clés — faits vérifiables issus du CV (aucune performance inventée). */
export const heroStats: Stat[] = [
  { value: '940/990', num: 940, suffix: '/990', label: 'TOEIC Anglais', sub: 'Niveau B2+' },
  { value: '2 ans', num: 2, suffix: ' ans', label: 'Alternance finance', sub: 'Analyste junior' },
  { value: '2022–26', label: 'Programme Grande École', sub: 'Montpellier BS' },
  { value: 'ACSI', label: 'Mastère Spécialisé', sub: 'SKEMA · 2027' },
];

/** Paragraphes « À propos » — synthèse fidèle du résumé détaillé du CV. */
export const aboutParagraphs: string[] = [
  "Mon parcours se situe à l'intersection de la finance, de l'analyse de données et du contrôle de la performance. Ma formation en Programme Grande École à Montpellier Business School m'a permis de construire une base solide en finance d'entreprise, comptabilité, analyse financière et gestion.",
  "En parallèle, mes deux années d'alternance comme analyste / assistante financière junior m'ont confrontée à des problématiques concrètes : suivi des paiements, contrôle des données, reporting, analyse des écarts, trésorerie et suivi des impayés.",
  "J'ai développé un intérêt particulier pour l'automatisation et l'exploitation des données, notamment via Excel avancé et VBA, afin de rendre certains traitements plus fiables, plus rapides et plus exploitables. Mon expérience de Consultante Junior m'a aussi amenée à mener des analyses financières, des études de marché et des benchmarks.",
  "Je souhaite aujourd'hui approfondir cette double dimension finance + systèmes d'information à travers mon intégration au Mastère Spécialisé Audit, Contrôle et Systèmes d'Information (ACSI) de SKEMA Business School, et évoluer vers des fonctions de contrôle de gestion, reporting, pilotage de la performance, analyse financière, audit ou contrôle interne — avec une forte dimension data et outils.",
];

/** Ce qui me caractérise (phrase d'accroche « À propos »). */
export const aboutSignature =
  "Ce qui me caractérise : le goût des problématiques concrètes, quantitatives et orientées résolution de problèmes — comprendre les données, identifier les anomalies, construire des indicateurs et améliorer les processus.";

export const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: 'Linkedin',
    handle: 'chaymae-metaich',
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: 'Mail',
    handle: profile.email,
  },
];
