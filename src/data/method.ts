import type { MethodStep } from '@/types';

/**
 * « Mon process de travail » — issu du CV.
 * Montre comment je travaille, pas seulement ce que je sais faire.
 */
export const methodSteps: MethodStep[] = [
  {
    num: '01',
    title: 'Comprendre',
    description:
      "Avant de commencer, je cherche le « pourquoi » : quel est le problème, l'objectif, le résultat attendu et qui utilisera le livrable.",
    icon: 'Lightbulb',
  },
  {
    num: '02',
    title: 'Collecter',
    description:
      "Je rassemble les informations nécessaires : données, sources, documents, historique, contraintes, et je questionne les interlocuteurs concernés.",
    icon: 'Database',
  },
  {
    num: '03',
    title: 'Vérifier',
    description:
      "Avant toute analyse, je contrôle la qualité des données : cohérence, complétude, doublons, erreurs, écarts. Une donnée n'est pas fiable simplement parce qu'elle existe.",
    icon: 'ShieldCheck',
  },
  {
    num: '04',
    title: 'Analyser',
    description:
      "Je structure l'information, j'identifie les tendances et les anomalies, je compare les données, j'analyse les écarts et je construis les indicateurs nécessaires.",
    icon: 'BarChart3',
  },
  {
    num: '05',
    title: 'Construire une solution',
    description:
      "Selon le problème : reporting, KPI, tableau de bord, contrôle, automatisation ou amélioration d'un processus. J'automatise dès que c'est pertinent.",
    icon: 'Workflow',
  },
  {
    num: '06',
    title: 'Contrôler',
    description:
      "Je vérifie le résultat : les données sont-elles cohérentes, les calculs corrects, les résultats conformes aux attentes, les écarts expliqués ?",
    icon: 'ClipboardCheck',
  },
  {
    num: '07',
    title: 'Synthétiser & communiquer',
    description:
      "Je transforme l'analyse en information claire et utile. Données → Analyse → Information → Décision : produire un résultat compréhensible, pas seulement un résultat.",
    icon: 'Send',
  },
];
