# Spark Daily Challenge

Application React simple pour suivre un défi créatif ou bien-être chaque jour.

## Technologies
- React
- Vite
- useState / useEffect
- localStorage

## Structure
- `src/App.jsx` : état global et logique principale
- `src/components/ChallengeCard.jsx` : carte du défi du jour
- `src/components/StreakTracker.jsx` : suivi de série et ligne des 7 derniers jours
- `src/components/HistoryList.jsx` : liste des défis complétés
- `src/components/HistoryItem.jsx` : détail d’un élément d’historique
- `src/components/CategoryFilter.jsx` : filtre par catégorie
- `src/components/CompletionMessage.jsx` : message après validation
- `src/data/challenges.js` : 30 défis préconfigurés

## Installation

1. Ouvrir le dossier `spark-daily-challenge`
2. Exécuter `npm install`
3. Lancer `npm run dev`

## Fonctionnalités
- un défi du jour généré automatiquement
- marquer le défi comme fait
- historique des défis complétés
- filtre par catégories Créatif, Bien-être, Social
- persistance des données dans `localStorage`
