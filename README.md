# Real Analysis (PreTeXt)

Starter repository for a beginner-friendly Real Analysis textbook in PreTeXt.

## Project Layout

- `source/main.ptx`: main book source.
- `publication/publication.ptx`: publication settings.
- `project.ptx`: PreTeXt CLI project manifest.
- `.github/workflows/`: CI and deployment workflows.

## Local Workflow

PreTeXt is installed in `~/pt`.

```bash
~/pt/bin/pretext --version
~/pt/bin/pretext build web
~/pt/bin/pretext view web
~/pt/bin/pretext build print
```

Optional convenience targets:

```bash
make web
make view
make print
make deploy
```

## Git + GitHub Setup

Initialize and commit:

```bash
git add .
git commit -m "Initial PreTeXt book scaffold"
```

Then create/connect a GitHub repository (example with GitHub CLI):

```bash
gh repo create YOUR_REPO_NAME --public --source=. --remote=origin --push
```

## GitHub Pages Deployment

This repository includes PreTeXt-generated workflows:

- `.github/workflows/pretext-deploy.yml`: builds and deploys to `gh-pages`.
- `.github/workflows/pretext-cli.yml`: build/test workflow with optional pages deploy job.

Two deployment options:

1. Local deploy from your machine:

```bash
~/pt/bin/pretext build web
~/pt/bin/pretext deploy
```

2. GitHub Actions deploy:
- Push to `main` (automatic in this repo), or run the workflow manually in Actions.
- In repository settings, set Pages source to `Deploy from a branch` and branch `gh-pages` if needed.
