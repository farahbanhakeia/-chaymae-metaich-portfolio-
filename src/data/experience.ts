import type { ExperienceItem } from '@/types';

/** Expériences professionnelles & engagement — strictement issues du CV. */
export const experiences: ExperienceItem[] = [
  {
    id: 'alternance',
    role: 'Assistante financière & administrative',
    org: 'École de formation en périnatalité — Alternance',
    period: 'Août 2024 — Août 2026',
    tag: 'Alternance · 2 ans',
    context:
      "Alternance de deux ans sous la responsabilité du responsable financier, au cœur du suivi financier, du contrôle des données et du reporting.",
    groups: [
      {
        title: 'Facturation & règlements',
        items: [
          'Gestion de la facturation via Training Orchestra',
          'Enregistrement des paiements et suivi des règlements',
          'Contrôle des échéances et relances des impayés',
          'Suivi des dossiers France Travail',
          'Vérification de la cohérence facturation / encaissements',
        ],
      },
      {
        title: 'Contrôle & rapprochement des données',
        items: [
          'Rapprochement données Training Orchestra / règlements reçus',
          'Identification des écarts et recherche des causes',
          'Correction des anomalies',
          'Mise en place de contrôles sur Excel (RechercheV, TCD)',
        ],
      },
      {
        title: 'Reporting & analyse',
        items: [
          'Production de reportings hebdomadaires',
          'Suivi des principaux indicateurs financiers',
          'Identification des anomalies et des évolutions',
          'Transmission d\'informations synthétiques à la hiérarchie',
          'Propositions d\'amélioration du suivi des données',
        ],
      },
      {
        title: 'Trésorerie & automatisation',
        items: [
          'Suivi des encaissements et de la trésorerie',
          'Identification des retards de paiement',
          'Création / utilisation de macros VBA',
          'Automatisation de traitements et d\'étapes de reporting récurrents',
        ],
      },
    ],
    tools: ['Training Orchestra', 'Excel avancé', 'VBA', 'France Travail'],
  },
  {
    id: 'consultante',
    role: 'Consultante Junior',
    org: 'Mission de conseil',
    period: 'Expérience précédente',
    tag: 'Conseil',
    context:
      "Missions d'analyse financière, d'études de marché et d'exploitation de données au service de la décision.",
    groups: [
      {
        title: 'Analyse financière',
        items: [
          'Analyse de bilans et de comptes de résultat / CPC',
          'Identification des principaux indicateurs financiers',
          'Analyse de la situation économique et financière des entreprises',
        ],
      },
      {
        title: 'Études & marché',
        items: [
          'Études de marché et benchmarks',
          'Analyses concurrentielles',
          'Collecte, analyse et synthèse des données',
        ],
      },
      {
        title: 'Data & conseil',
        items: [
          'Création et exploitation de bases de données Excel (TCD)',
          'Structuration et analyse de données',
          "Collecte d'informations auprès des parties prenantes",
          'Contribution aux recommandations',
        ],
      },
    ],
    tools: ['Excel', 'TCD', 'Analyse financière'],
  },
  {
    id: 'fh',
    role: 'Fondatrice — F&H',
    org: 'Projet associatif · Accompagnement & orientation étudiante',
    period: 'Depuis septembre 2021',
    tag: 'Associatif · Leadership',
    context:
      "Projet associatif créé autour de l'accompagnement et de l'orientation des étudiants. Également engagée auprès de la Banque Alimentaire et de l'UNICEF.",
    groups: [
      {
        title: 'Missions',
        items: [
          'Accompagnement et orientation de jeunes / étudiants',
          'Aide dans les choix scolaires',
          "Organisation d'événements et coordination de projets",
          'Communication',
        ],
      },
      {
        title: 'Compétences développées',
        items: [
          'Leadership et gestion de projet',
          'Organisation et coordination',
          'Prise d\'initiative et travail en équipe',
        ],
      },
    ],
  },
];
