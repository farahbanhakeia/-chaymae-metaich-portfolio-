import type { Domain, Exploration } from '@/types';

/**
 * Section « Data × Finance & Économie ».
 *
 * IMPORTANT — Honnêteté des données :
 * Les jeux de données ci-dessous sont ILLUSTRATIFS (démonstration de mise en forme).
 * Ils ne représentent aucun chiffre réel d'entreprise. Ils servent uniquement à montrer
 * le type d'analyses et de visualisations que Chaymae sait construire, en lien avec ses
 * missions réelles (suivi des encaissements, impayés, délais de paiement, automatisation).
 */

/** Domaines d'application concrets des compétences analytiques. */
export const domains: Domain[] = [
  {
    title: 'Analyse de séries temporelles',
    description: "Suivre l'évolution d'indicateurs financiers ou économiques dans le temps.",
    icon: 'LineChart',
  },
  {
    title: "Visualisation d'indicateurs",
    description: 'Rendre lisibles des KPI financiers et économiques via des tableaux de bord.',
    icon: 'BarChart3',
  },
  {
    title: 'Analyse de tendances',
    description: 'Identifier les évolutions, ruptures et signaux dans les données.',
    icon: 'TrendingUp',
  },
  {
    title: 'Modélisation statistique',
    description: 'Structurer les données pour appuyer la prévision et la décision.',
    icon: 'Activity',
  },
  {
    title: "Détection d'anomalies",
    description: 'Repérer écarts, doublons et incohérences dans les données financières.',
    icon: 'AlertTriangle',
  },
  {
    title: 'Analyse de données financières',
    description: 'Exploiter bilans, encaissements et flux pour en tirer de la valeur.',
    icon: 'Landmark',
  },
  {
    title: 'Business Intelligence',
    description: "Transformer la donnée en aide à la décision et au pilotage.",
    icon: 'Gauge',
  },
];

/**
 * Explorations & idées de projets — PAS des réalisations terminées.
 * Pistes que Chaymae souhaite explorer pour relier data, finance et économie.
 */
export const explorations: Exploration[] = [
  {
    title: "Tableau de bord d'indicateurs macroéconomiques (Maroc)",
    description:
      'Suivre et visualiser des indicateurs économiques publics (croissance, inflation, échanges).',
    icon: 'Compass',
  },
  {
    title: 'Étude de séries temporelles',
    description:
      "Analyser l'évolution d'une série économique ou financière et en dégager des tendances.",
    icon: 'LineChart',
  },
  {
    title: 'Dashboard de données économiques publiques',
    description: 'Centraliser des données ouvertes pour faciliter la lecture et la décision.',
    icon: 'BarChart3',
  },
];

/* ------------------------------------------------------------------ */
/*  Jeux de données ILLUSTRATIFS (démonstration — non réels)          */
/* ------------------------------------------------------------------ */

export interface FlowPoint {
  month: string;
  encaissements: number;
  impayes: number;
}

/** Encaissements vs impayés (illustratif). */
export const cashFlowData: FlowPoint[] = [
  { month: 'Jan', encaissements: 82, impayes: 14 },
  { month: 'Fév', encaissements: 88, impayes: 12 },
  { month: 'Mar', encaissements: 79, impayes: 16 },
  { month: 'Avr', encaissements: 94, impayes: 11 },
  { month: 'Mai', encaissements: 97, impayes: 9 },
  { month: 'Juin', encaissements: 91, impayes: 10 },
  { month: 'Juil', encaissements: 103, impayes: 8 },
  { month: 'Août', encaissements: 108, impayes: 7 },
];

export interface DsoPoint {
  month: string;
  dso: number;
}

/** Délais de paiement (DSO, en jours) — illustratif, en lien avec le KPI de suivi. */
export const dsoData: DsoPoint[] = [
  { month: 'Jan', dso: 48 },
  { month: 'Fév', dso: 46 },
  { month: 'Mar', dso: 49 },
  { month: 'Avr', dso: 43 },
  { month: 'Mai', dso: 40 },
  { month: 'Juin', dso: 38 },
  { month: 'Juil', dso: 35 },
  { month: 'Août', dso: 33 },
];

export interface NamedValue {
  name: string;
  value: number;
}

/** Répartition des anomalies détectées (illustratif). */
export const anomaliesData: NamedValue[] = [
  { name: 'Écarts de facturation', value: 38 },
  { name: 'Retards de paiement', value: 27 },
  { name: 'Données manquantes', value: 21 },
  { name: 'Doublons', value: 14 },
];

export interface AutomationPoint {
  name: string;
  temps: number;
  label: string;
}

/** Temps de traitement d'un reporting : manuel vs automatisé (illustratif, base 100). */
export const automationData: AutomationPoint[] = [
  { name: 'Traitement manuel', temps: 100, label: '100 %' },
  { name: 'Traitement automatisé', temps: 28, label: '28 %' },
];

/** Mini-série pour la composition visuelle du hero (illustratif). */
export const heroSpark: { x: string; v: number }[] = [
  { x: '1', v: 32 },
  { x: '2', v: 38 },
  { x: '3', v: 35 },
  { x: '4', v: 44 },
  { x: '5', v: 48 },
  { x: '6', v: 45 },
  { x: '7', v: 56 },
  { x: '8', v: 61 },
  { x: '9', v: 58 },
  { x: '10', v: 68 },
  { x: '11', v: 74 },
  { x: '12', v: 82 },
];

export const heroBars: { label: string; v: number }[] = [
  { label: 'T1', v: 54 },
  { label: 'T2', v: 67 },
  { label: 'T3', v: 61 },
  { label: 'T4', v: 83 },
];

/* ------------------------------------------------------------------ */
/*  Tableau de bord étendu — tous ILLUSTRATIFS (démonstration)        */
/* ------------------------------------------------------------------ */

export interface KpiTile {
  label: string;
  num: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  delta: string;
  positive: boolean;
  spark: number[];
  tone: 'emerald' | 'cyan' | 'gold' | 'navy';
}

/** Indicateurs clés de pilotage (illustratifs — compteurs animés). */
export const kpiTiles: KpiTile[] = [
  {
    label: 'Taux de recouvrement',
    num: 96,
    suffix: ' %',
    delta: '+3 pts',
    positive: true,
    spark: [88, 90, 89, 92, 93, 95, 96],
    tone: 'emerald',
  },
  {
    label: 'DSO — délai de paiement',
    num: 33,
    suffix: ' j',
    delta: '−9 j',
    positive: true,
    spark: [48, 46, 44, 41, 38, 35, 33],
    tone: 'cyan',
  },
  {
    label: "Taux d'impayés",
    num: 6.8,
    decimals: 1,
    suffix: ' %',
    delta: '−4 pts',
    positive: true,
    spark: [14, 13, 12, 10, 9, 8, 7],
    tone: 'gold',
  },
  {
    label: 'Trésorerie nette',
    num: 108,
    prefix: '+',
    suffix: ' k€',
    delta: '+18 %',
    positive: true,
    spark: [78, 82, 80, 90, 97, 103, 108],
    tone: 'navy',
  },
];

export interface IndexPoint {
  t: string;
  value: number;
}

/** Courbe de type « indice » / série de marché (illustrative). */
export const marketIndexData: IndexPoint[] = [
  { t: 'S1', value: 100 },
  { t: 'S2', value: 103 },
  { t: 'S3', value: 101 },
  { t: 'S4', value: 106 },
  { t: 'S5', value: 109 },
  { t: 'S6', value: 107 },
  { t: 'S7', value: 112 },
  { t: 'S8', value: 116 },
  { t: 'S9', value: 114 },
  { t: 'S10', value: 119 },
  { t: 'S11', value: 123 },
  { t: 'S12', value: 121 },
  { t: 'S13', value: 127 },
  { t: 'S14', value: 131 },
  { t: 'S15', value: 129 },
  { t: 'S16', value: 134 },
];

export interface ProfitabilityPoint {
  year: string;
  ca: number;
  marge: number;
}

/** Analyse de rentabilité : chiffre d'affaires vs marge (%) — illustrative. */
export const profitabilityData: ProfitabilityPoint[] = [
  { year: '2020', ca: 62, marge: 9 },
  { year: '2021', ca: 71, marge: 11 },
  { year: '2022', ca: 78, marge: 12 },
  { year: '2023', ca: 90, marge: 14 },
  { year: '2024', ca: 103, marge: 16 },
];

export interface TickerItem {
  sym: string;
  val: string;
  chg: string;
  up: boolean;
}

/** Bandeau de marché défilant (ILLUSTRATIF — données de démonstration). */
export const marketTicker: TickerItem[] = [
  { sym: 'MASI', val: '13 420', chg: '+1,24 %', up: true },
  { sym: 'CAC 40', val: '7 612', chg: '+0,48 %', up: true },
  { sym: 'S&P 500', val: '5 430', chg: '−0,21 %', up: false },
  { sym: 'EUR / MAD', val: '10,82', chg: '+0,06 %', up: true },
  { sym: 'EUR / USD', val: '1,086', chg: '−0,12 %', up: false },
  { sym: 'Brent', val: '82,4 $', chg: '+0,90 %', up: true },
  { sym: 'Or', val: '2 340 $', chg: '+0,52 %', up: true },
  { sym: 'DAX', val: '18 240', chg: '+0,33 %', up: true },
];

export interface EcoPoint {
  year: string;
  croissance: number;
  inflation: number;
}

/** Indicateurs économiques (illustratifs) — exploration data meets economics. */
export const economicIndicatorsData: EcoPoint[] = [
  { year: '2020', croissance: -6.3, inflation: 0.7 },
  { year: '2021', croissance: 8.0, inflation: 1.4 },
  { year: '2022', croissance: 1.3, inflation: 6.6 },
  { year: '2023', croissance: 3.4, inflation: 6.1 },
  { year: '2024', croissance: 3.2, inflation: 2.2 },
];
