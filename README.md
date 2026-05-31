# React + TypeScript + Vite

This is the standalone GearUp client repository.

This project uses Biome as the single tool for linting, formatting, and code quality checks.

## Commands

- `npm run lint` runs Biome linting.
- `npm run check` runs the full Biome check suite.
- `npm run format` formats the project with Biome.

## Repo Setup

If this folder was split from a larger repository, initialize and connect its own remote:

```bash
git init
git add .
git commit -m "Initial standalone client"
git remote add origin <your-new-client-repo-url>
git branch -M main
git push -u origin main
```

## Stack

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev and build performance. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
