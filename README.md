# Bevero Screenshot Landingpage

Diese Version ersetzt die frühere Mockup-/Operations-Map-Landingpage durch eine Screenshot-first Präsentation.

## Inhalt

- 23 echte Webapp-Screenshots aus dem hochgeladenen ZIP
- Desktop-Cockpit-Rundgang
- Mobile-Webapp-Rundgang
- Kurzer Erklärungstext pro Screenshot
- Präsentationslogik für:
  - Etappe 1: Ist-Zustand / Pilot
  - Etappe 2: FoodNotify
  - Etappe 3: Gastronovi
  - Erweiterung: weitere Standorte + Cube als eigene Organisation
- Klickbare Screenshot-Vergrößerung
- Vercel-ready

## Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Vercel

Framework Preset: Vite  
Build Command: `npm run build`  
Output Directory: `dist`  
Root Directory: `./`

## Ordner

```text
public/screenshots/   echte Webapp-Screenshots
src/App.jsx           React Page
src/styles.css        Styling
```
