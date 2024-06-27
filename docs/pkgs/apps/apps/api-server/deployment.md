# @gtsc/api-server - Deployment

## Docker

There is an example dockerfile in `deploy/dockerfile`:

```shell
FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .
EXPOSE 3000
ENV HOST=0.0.0.0 PORT=3000
CMD ["node", "dist/es/index.js"]
```

You can build and execute this using docker from the root of the package with the following command.

```shell
docker build -t gtsc-api-server -f deploy/dockerfile .
```

This will build and deploy an image called `gtsc-api-server` to your docker server.

When you run the image you should specify an external port to be mapped to the 3000, so that you can access the REST server.
