import type { Certification, SkillCategory } from '@/types';

/**
 * Compétences strictement issues du CV.
 * level: 'practiced' = mis en pratique (alternance / projets)
 *        'studied'   = étudié en formation / mission ponctuelle
 *        'notion'    = notions / en cours d'approfondissement
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'finance',
    title: 'Finance & Gestion',
    icon: 'Landmark',
    blurb: 'Le cœur de mon profil : lire, analyser et contrôler la performance financière.',
    skills: [
      { name: 'Analyse financière', level: 'practiced' },
      { name: 'Analyse de bilan', level: 'practiced' },
      { name: 'Compte de résultat / CPC', level: 'practiced' },
      { name: 'Reporting financier', level: 'practiced' },
      { name: 'Suivi de trésorerie', level: 'practiced' },
      { name: 'Suivi des encaissements', level: 'practiced' },
      { name: 'Suivi des impayés', level: 'practiced' },
      { name: 'Analyse des écarts', level: 'practiced' },
      { name: 'KPI / indicateurs de performance', level: 'practiced' },
      { name: 'Contrôle de gestion', level: 'studied' },
      { name: 'Pilotage de la performance', level: 'studied' },
      { name: 'Contrôle interne', level: 'studied' },
      { name: 'Audit', level: 'studied' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Analyse',
    icon: 'Database',
    blurb: 'Fiabiliser, structurer et exploiter les données pour en tirer des informations utiles.',
    skills: [
      { name: 'Analyse & interprétation de données', level: 'practiced' },
      { name: 'Structuration de bases de données', level: 'practiced' },
      { name: 'Contrôle de cohérence', level: 'practiced' },
      { name: "Identification d'anomalies", level: 'practiced' },
      { name: 'Data cleaning / préparation', level: 'practiced' },
      { name: 'Analyse de tendances', level: 'practiced' },
      { name: 'Automatisation de tâches', level: 'practiced' },
      { name: 'Données → informations exploitables', level: 'practiced' },
    ],
  },
  {
    id: 'excel',
    title: 'Excel & Automatisation',
    icon: 'FileSpreadsheet',
    blurb: 'Mon outil de prédilection, poussé jusqu\'à l\'automatisation via VBA.',
    skills: [
      { name: 'Excel avancé', level: 'practiced' },
      { name: 'RechercheV / RECHERCHEX', level: 'practiced' },
      { name: 'Tableaux croisés dynamiques', level: 'practiced' },
      { name: 'Formules avancées', level: 'practiced' },
      { name: 'Contrôles automatisés', level: 'practiced' },
      { name: 'VBA', level: 'practiced' },
      { name: 'Macros', level: 'practiced' },
    ],
  },
  {
    id: 'tools',
    title: 'Outils & Technologies',
    icon: 'Workflow',
    blurb: 'Les outils métiers et techniques que je manipule ou que j\'explore.',
    skills: [
      { name: 'Sage 100', level: 'practiced' },
      { name: 'Training Orchestra', level: 'practiced' },
      { name: 'Pack Office', level: 'practiced' },
      { name: 'Bloomberg', level: 'studied' },
      { name: 'Python', level: 'notion' },
    ],
  },
  {
    id: 'soft',
    title: 'Soft skills',
    icon: 'Sparkles',
    blurb: 'La manière dont j\'aborde un problème et je collabore.',
    skills: [
      { name: 'Esprit analytique' },
      { name: 'Rigueur' },
      { name: 'Esprit critique' },
      { name: 'Résolution de problèmes' },
      { name: 'Organisation' },
      { name: 'Autonomie' },
      { name: 'Curiosité' },
      { name: 'Esprit de synthèse' },
      { name: 'Adaptabilité' },
      { name: 'Communication' },
    ],
  },
];

export const certifications: Certification[] = [
  { title: 'TOEIC — Anglais', detail: '940 / 990 · Niveau B2+', icon: 'Award' },
  { title: 'Bloomberg', detail: 'Fundamentals of Finance', icon: 'Landmark' },
];

export const languages: { name: string; level: string; score: number }[] = [
  { name: 'Français', level: 'Courant / bilingue', score: 100 },
  { name: 'Anglais', level: 'Courant · TOEIC 940/990', score: 95 },
];

export const skillLegend: { key: string; label: string }[] = [
  { key: 'practiced', label: 'Mis en pratique' },
  { key: 'studied', label: 'Étudié' },
  { key: 'notion', label: 'Notions' },
];
