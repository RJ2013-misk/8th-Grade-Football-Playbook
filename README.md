# Cranford Cougars 8th Grade Football Playbook

Static offline-ready playbook app generated from `8th Grade PAL Offense (2).pdf`.

## Local preview

```powershell
python -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Deployment

This repository includes a GitHub Pages workflow in `.github/workflows/pages.yml`. After pushing to `main`, enable Pages with GitHub Actions as the source if it is not already enabled.

## Updating plays

Replace the PDF, rerender the pages into `assets/plays/play-XX.png`, and update the play data in `app.js` if the play count or labels change.
