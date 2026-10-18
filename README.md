# Portfolio — Chaymae Metaich

Portfolio web personnel, moderne et responsive, pour **Chaymae Metaich** — profil
**Finance × Data × Contrôle**. Identité visuelle premium inspirée des tableaux de bord
financiers (bleu marine, vert émeraude, blanc cassé, gris ardoise, cyan discret),
thème clair + sombre, visualisations de données et animations sobres.

> **Note de contenu.** Tout le contenu provient du CV / portfolio réels de Chaymae Metaich.
> Aucune compétence, expérience, certification ou performance n'a été inventée. Les
> graphiques de la section « Data × Finance & Économie » utilisent des **données
> illustratives** clairement signalées (démonstration de mise en forme uniquement).

---

## ✨ Fonctionnalités

- **Hero** avec photo, positionnement, chiffres clés réels (TOEIC 940/990, alternance, PGE, SKEMA) et composition analytique.
- **À propos** (synthèse du parcours) et **Ma méthode** (process de travail en 7 étapes).
- **Compétences** catégorisées, avec niveau honnête (_mis en pratique / étudié / notions_) — pas de barres « 95 % » arbitraires.
- **Projets** filtrables (Finance & Contrôle, Data & Automatisation, Recherche, Conseil) avec détail dépliable et badge de nature du résultat.
- **Data × Finance & Économie** : domaines d'application, 4 visualisations (Recharts) et explorations de projets, toutes marquées « données illustratives ».
- **Expérience** et **Formation** en frise chronologique.
- **Contact** : email, LinkedIn, localisation et formulaire fonctionnel via `mailto:` (ouvre votre logiciel de messagerie).
- **Thème clair / sombre** (mémorisé), **responsive mobile-first**, **accessibilité** (navigation clavier, `prefers-reduced-motion`, HTML sémantique), **SEO** (meta, Open Graph, sitemap, robots, favicon).
- **Performance** : la librairie de graphiques (Recharts) est chargée à la demande (code-splitting) quand on approche de la section concernée.

## 🧱 Stack technique

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 5](https://vite.dev/) (build statique, déploiement Vercel)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Recharts](https://recharts.org/) (visualisations)
- [Lucide React](https://lucide.dev/) (icônes)

## 📁 Structure du projet

```
.
├── public/                     # Fichiers statiques servis à la racine
│   ├── chaymae-metaich.jpg     # Photo de profil (remplaçable)
│   ├── CV_Chaymae_Metaich.pdf  # CV téléchargeable (placeholder — à remplacer)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── data/                   # ⭐ Contenu éditable (profil, compétences, projets…)
│   │   ├── profile.ts          # Nom, liens, localisation, textes clés, chiffres
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── method.ts
│   │   ├── finance.ts          # Domaines + jeux de données illustratifs
│   │   └── nav.ts
│   ├── components/             # Composants réutilisables + charts/
│   ├── sections/               # Sections de la page
│   ├── hooks/                  # useTheme, useScrollSpy, useScrolled
│   ├── types/                  # Types TypeScript
│   ├── lib/                    # Utilitaires
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Tailwind + design system
├── index.html                  # Meta / SEO / polices
├── tailwind.config.js          # Palette & tokens de design
├── vite.config.ts
└── vercel.json
```

## 🚀 Démarrage

**Prérequis :** [Node.js](https://nodejs.org/) 18 ou plus récent.

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement (http://localhost:5173)
npm run dev

# 3. Construire la version de production (dossier dist/)
npm run build

# 4. Prévisualiser le build de production localement
npm run preview
```

Vérifications :

```bash
npm run typecheck   # Contrôle des types TypeScript
npm run lint        # ESLint
```

## ✏️ Personnalisation

Tout le contenu est centralisé dans **`src/data/`** — aucun besoin de toucher aux composants.

| Pour modifier…                    | Éditez…                              |
| --------------------------------- | ------------------------------------ |
| Nom, liens, email, localisation   | `src/data/profile.ts`                |
| Compétences                       | `src/data/skills.ts`                 |
| Projets                           | `src/data/projects.ts`               |
| Expériences                       | `src/data/experience.ts`             |
| Formation                         | `src/data/education.ts`              |
| Méthode de travail                | `src/data/method.ts`                 |
| Domaines / graphiques / explorations | `src/data/finance.ts`             |
| Couleurs & polices                | `tailwind.config.js`                 |

**À remplacer avant publication :**

1. **Votre CV** → déposez votre PDF final dans `public/CV_Chaymae_Metaich.pdf`
   (le fichier actuel est un simple placeholder).
2. **Votre photo** → remplacez `public/chaymae-metaich.jpg` (format portrait recommandé).
3. **GitHub (optionnel)** → renseignez `github:` dans `src/data/profile.ts` pour afficher le lien
   (laissé vide, il est automatiquement masqué partout).
4. **URL du site** → après déploiement, remplacez `https://chaymae-metaich.vercel.app`
   par votre URL réelle dans : `index.html` (canonical + Open Graph), `public/robots.txt`,
   `public/sitemap.xml`.
5. **Image de partage (optionnel)** → ajoutez `public/og-image.jpg` (1200×630) pour un
   bel aperçu sur LinkedIn (le chemin est déjà référencé dans `index.html`).

## ☁️ Déploiement — GitHub + Vercel

### 1. Créer un dépôt GitHub

```bash
git init
git add .
git commit -m "Initial commit — portfolio Chaymae Metaich"
git branch -M main
# Créez un dépôt vide sur github.com, puis :
git remote add origin https://github.com/VOTRE-COMPTE/chaymae-metaich-portfolio.git
git push -u origin main
```

### 2. Déployer sur Vercel

1. Connectez-vous sur [vercel.com](https://vercel.com/) avec votre compte GitHub.
2. **Add New… → Project**, puis importez le dépôt.
3. Vercel détecte automatiquement **Vite**. Paramètres par défaut :
   - **Build Command :** `npm run build`
   - **Output Directory :** `dist`
   - **Install Command :** `npm install`
4. Cliquez sur **Deploy**. Votre site est en ligne en ~1 minute.

> Le fichier `vercel.json` est déjà configuré (framework, build, cache des assets).

### 3. Vérifications après publication

- [ ] La page se charge et toutes les sections s'affichent (clair **et** sombre).
- [ ] Le bouton **Télécharger mon CV** ouvre bien votre PDF (remplacez le placeholder).
- [ ] La photo s'affiche correctement.
- [ ] Les liens **LinkedIn** et **Email** fonctionnent.
- [ ] L'URL réelle a remplacé l'URL d'exemple (canonical, OG, `robots.txt`, `sitemap.xml`).
- [ ] L'aperçu de partage LinkedIn est correct (ajoutez une `og-image.jpg` si besoin).
- [ ] Testé sur mobile.

## ♿ Accessibilité & SEO

- HTML sémantique, hiérarchie de titres correcte, `alt` sur les images, lien « Aller au contenu ».
- Navigation au clavier, états de focus visibles, respect de `prefers-reduced-motion`.
- Meta description, Open Graph / Twitter Card, `sitemap.xml`, `robots.txt`, favicon SVG.

## 📄 Licence

Projet personnel de Chaymae Metaich. Tous droits réservés.
