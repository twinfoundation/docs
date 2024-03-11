# GTSC Docs

This is the main repository for the GTSC documentation.

## Installation

```shell
npm i
```

## Development

```shell
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```shell
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The `preview` version is deployed to vercel when you perform changes on a branch. When the changes are merged to `main` the production version is deployed.

## Adding a new package group

To add a new package group modify `docs/packages/package-groups.json`

You should also update the `.github/workflows/update-packages-dev.yaml` and `.github/workflows/update-packages-main.yaml` and include a new `Copy x to Docs` section for your new package group.
