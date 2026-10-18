import type { Project, ProjectCategory } from '@/types';

export const categoryLabels: Record<ProjectCategory, string> = {
  finance: 'Finance & Contrôle',
  data: 'Data & Automatisation',
  research: 'Recherche',
  consulting: 'Conseil',
};

export const outcomeKindLabels: Record<Project['outcomeKind'], string> = {
  targeted: 'Objectif visé',
  design: 'Projet de conception',
  qualitative: 'Recherche qualitative',
  deliverable: 'Livrable réalisé',
};

export const projectFilters: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'finance', label: 'Finance & Contrôle' },
  { id: 'data', label: 'Data & Automatisation' },
  { id: 'research', label: 'Recherche' },
  { id: 'consulting', label: 'Conseil' },
];

/**
 * Projets réels issus du CV / portfolio.
 * Aucune métrique chiffrée n'est inventée : les résultats sont présentés
 * honnêtement (objectif visé, projet de conception, recherche, livrable).
 */
export const projects: Project[] = [
  {
    id: 'vba-automation',
    title: "Automatisation d'un reporting (VBA)",
    category: 'data',
    icon: 'Workflow',
    tagline: 'Fiabiliser et accélérer un reporting récurrent.',
    problem:
      "Certaines tâches de reporting étaient répétitives et nécessitaient plusieurs manipulations manuelles — source de perte de temps et de risque d'erreur.",
    objective:
      "Standardiser et automatiser le traitement afin de le rendre plus fiable, plus rapide et plus exploitable.",
    approach: [
      'Analyse du processus de reporting existant',
      'Identification des étapes répétitives',
      'Automatisation avec des macros VBA',
      'Contrôle du résultat produit',
    ],
    stack: ['Excel avancé', 'VBA', 'Macros', 'Reporting'],
    outcome:
      "Objectifs visés : gain de temps, réduction des manipulations manuelles, standardisation du traitement et réduction du risque d'erreur.",
    outcomeKind: 'targeted',
    demonstrates:
      "Automatiser un processus métier et fiabiliser un traitement de données récurrent.",
  },
  {
    id: 'kpi-paiements',
    title: 'KPI de suivi des paiements & impayés',
    category: 'finance',
    icon: 'Gauge',
    tagline: 'Mieux piloter les délais de paiement.',
    problem:
      "Le suivi des délais de paiement et des impayés manquait de visibilité pour faciliter le pilotage financier.",
    objective:
      "Concevoir un indicateur permettant d'identifier les retards, de suivre leur évolution et d'améliorer la visibilité sur les encaissements.",
    approach: [
      'Analyse du besoin de pilotage financier',
      'Identification des retards et des impayés',
      "Conception d'un indicateur de suivi (KPI)",
      "Suivi de l'évolution dans le temps",
    ],
    stack: ['KPI', 'Analyse financière', 'Reporting', 'Excel'],
    outcome:
      "Projet de conception d'un KPI visant à faciliter le pilotage financier et la visibilité sur les encaissements.",
    outcomeKind: 'design',
    demonstrates:
      "Traduire un besoin de trésorerie en indicateur de pilotage concret.",
  },
  {
    id: 'memoire-recherche',
    title: 'Mémoire — Contrôle de gestion & décision',
    category: 'research',
    icon: 'Microscope',
    tagline: 'Étude qualitative sur les PME de services.',
    problem:
      "« Quel est l'effet de l'utilisation des systèmes de contrôle de gestion sur la prise de décision stratégique dans les PME de services ? »",
    objective:
      "Comprendre le rôle des systèmes de contrôle de gestion dans la décision stratégique des dirigeants de PME de services.",
    approach: [
      'Revue de littérature scientifique',
      'Étude des systèmes de contrôle de gestion',
      'Entretiens avec des dirigeants / cofondateurs de PME',
      'Analyse qualitative des pratiques',
    ],
    stack: ['Recherche académique', 'Méthodologie qualitative', 'Entretiens', 'Synthèse'],
    outcome:
      'Recherche qualitative menée à Montpellier Business School : analyse des pratiques de contrôle de gestion et de leur rôle dans la décision.',
    outcomeKind: 'qualitative',
    demonstrates:
      'Rigueur méthodologique, esprit critique et conduite d\'une recherche structurée de bout en bout.',
  },
  {
    id: 'etudes-benchmarks',
    title: 'Études financières & benchmarks',
    category: 'consulting',
    icon: 'Briefcase',
    tagline: 'Analyses et études de marché — Consultante Junior.',
    problem:
      "Besoin d'analyses financières et d'études de marché pour éclairer les décisions des entreprises accompagnées.",
    objective:
      'Produire des analyses financières, des benchmarks et des études concurrentielles exploitables.',
    approach: [
      'Analyse de bilans et de comptes de résultat',
      'Études de marché et analyses concurrentielles',
      'Collecte et structuration des données (Excel, TCD)',
      'Synthèse et contribution aux recommandations',
    ],
    stack: ['Analyse financière', 'Études de marché', 'Benchmarking', 'Excel', 'TCD'],
    outcome:
      "Livrables d'analyse financière et d'études de marché réalisés dans le cadre de missions de conseil.",
    outcomeKind: 'deliverable',
    demonstrates:
      "Polyvalence analyse financière + étude de marché, au service de la décision.",
  },
];
