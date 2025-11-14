# @twin.org/node - Deployment Docker

## Docker Building

To run the API server in the docker environment there is an example dockerfile in `deploy/dockerfile`:

```shell
# Set the base image
FROM node:22

# Create the app directory
WORKDIR /app

# Copy the package.json
COPY package.json .

# Install dependencies including dev dependencies needed for merge-locales
RUN npm install --ignore-scripts

# Copy the rest of the files to the image
COPY . .

# Compile translation messages
RUN npm run merge-locales

# Remove dev dependencies to reduce image size
RUN npm prune --omit=dev

# Expose the port the app runs on
EXPOSE 3000

# Set the environment variables that will override the .env file in the package
ENV TWIN_HOST=0.0.0.0
ENV TWIN_PORT=3000
ENV TWIN_STORAGE_FILE_ROOT=/twin-node/data

# Start the server
CMD ["node", "src/index.mjs"]
```

You can build and execute this using docker from the root of the package with the following command.

```shell
docker build -t twin-node -f deploy/dockerfile . --load
```

> **Note**: The `--load` flag is required when using Docker Buildx to ensure the image is loaded into your local Docker registry. Without it, the image will only exist in the build cache.

This will build and deploy an image called `twin-node` to your local docker server.

## Bootstrapping

Whenever the server starts it bootstraps all the components. If you have any entity storage configured to use `file` storage you should map a directory on the local host to contain the data, so that it remains persistent.

```shell
docker run -t -i -v /home/twin-node/data:/twin-node/data -p 3000:3000 twin-node
```

This example will map the local directory `/home/twin-node/data` and make it available in the docker container as `/twin-node/data` which is used to configure file entity storage using the environment variable `TWIN_STORAGE_FILE_ROOT`.

The output from the docker container should be something like the following.

```shell
🌩️  TWIN Node Server v1.0.0

Execution Directory: /app
Locales Directory: /app/dist/locales
Locales File: /app/dist/locales/en.json
OpenAPI Spec File: /app/docs/open-api/spec.json
Favicon File: /app/static/favicon.ico
Environment Variable Prefix: TWIN_
Default Environment File: /app/.env

INFO [2025-10-03T01:23:42.634Z] EngineCore Engine is starting
INFO [2025-10-03T01:23:42.635Z] EngineCore Debugging is enabled
INFO [2025-10-03T01:23:42.636Z] EngineCore Loading state from file storage with filename "twin-node/data/engine-state.json"
INFO [2025-10-03T01:23:42.637Z] EngineCore Configuring loggingConnector: console
INFO [2025-10-03T01:23:42.637Z] EngineCore Configuring loggingConnector: entity-storage
INFO [2025-10-03T01:23:42.638Z] EngineCore Configuring Entity Storage with name "log-entry" using "file" connector
INFO [2025-10-03T01:23:42.638Z] EngineCore Configuring loggingConnector: multi
INFO [2025-10-03T01:23:42.638Z] EngineCore Configuring loggingComponent: service
...
INFO [2025-10-03T01:23:42.655Z] EngineCore Bootstrap started
...
INFO [2025-10-03T01:23:42.662Z] EngineCore Generating mnemonic "weird focus prevent jewel enemy reveal supply dove then swallow topple goose case over endless garage width panic learn ask close fault immune shadow"
INFO [2025-10-03T01:23:42.662Z] EngineCore Storing mnemonic
INFO [2025-10-03T01:23:43.912Z] EngineCore Funding wallet "https://explorer.iota.org/address/0x69d531810657960fa07d346cb9bb7003e016e38c0b7486607002a10990ea0dd9?network=testnet"
INFO [2025-10-03T01:23:46.547Z] EngineCore Generating node identity
INFO [2025-10-03T01:23:49.584Z] EngineCore Node identity created "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82"
INFO [2025-10-03T01:23:49.585Z] EngineCore Identity explorer "https://explorer.iota.org/object/0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82?network=testnet"
INFO [2025-10-03T01:23:49.595Z] EngineCore Node identity "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82"
INFO [2025-10-03T01:23:49.596Z] EngineCore Creating node user "admin@node"
INFO [2025-10-03T01:23:49.597Z] EngineCore Node Admin User Email "admin@node"
INFO [2025-10-03T01:23:49.597Z] EngineCore Node Admin User Password "ayc^YC31TF%BVshQ"
INFO [2025-10-03T01:23:49.600Z] EngineCore Creating user profile "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82"
INFO [2025-10-03T01:23:49.601Z] EngineCore Creating authentication key "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82/auth-signing"
INFO [2025-10-03T01:23:49.617Z] EngineCore Creating blob encryption key "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82/blob-encryption"
INFO [2025-10-03T01:23:49.624Z] EngineCore Created blob encryption key "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82/blob-encryption" with value "4+S7bupEk/vLVhGxjKJ3jWw3uKo+3JsF8wYoB5B59bc="
INFO [2025-10-03T01:23:50.314Z] EngineCore Adding attestation verification method "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82#attestation-assertion"
INFO [2025-10-03T01:23:56.408Z] EngineCore Adding immutable proof verification method "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82#immutable-proof-assertion"
INFO [2025-10-03T01:24:01.772Z] EngineCore Bootstrap complete
INFO [2025-10-03T01:24:01.773Z] EngineCore Components are starting
...
INFO [2025-10-03T01:24:02.476Z] EngineCore Components have started
INFO [2025-10-03T01:24:02.476Z] EngineCore Engine has started
INFO [2025-10-03T01:24:02.477Z] EngineCore Saving state to file storage with filename "twin-node/data/engine-state.json"
INFO [2025-10-03T01:24:02.496Z] FastifyWebServer Building Web Server
...
INFO [2025-10-03T01:24:03.111Z] FastifyWebServer Starting Web Server at address "0.0.0.0" on port "3000"
INFO [2025-10-03T01:24:03.128Z] FastifyWebServer The Web Server started on http://0.0.0.0:3000
```

You will see it generated a node admin user with password for future use, these should be recorded as they will not be made visible again.

To run the bootstrap again you would have to manually remove the `engine-state.json` from the data directory.

## Docker Running

To run the server we use exactly the same command as before, when the `engine-state.json` exists the component states are passed in to the components.

```shell
docker run -t -i -v /home/twin-node/data:/twin-node/data -p 3000:3000 twin-node
```

You should now see output similar to the following:

```shell
🌩️  TWIN Node Server v1.0.0

Execution Directory: /app
Locales Directory: /app/dist/locales
Locales File: /app/dist/locales/en.json
OpenAPI Spec File: /app/docs/open-api/spec.json
Favicon File: /app/static/favicon.ico
Environment Variable Prefix: TWIN_
Default Environment File: /app/.env

INFO [2025-10-03T01:23:42.634Z] EngineCore Engine is starting
INFO [2025-10-03T01:23:42.635Z] EngineCore Debugging is enabled
INFO [2025-10-03T01:23:42.636Z] EngineCore Loading state from file storage with filename "twin-node/data/engine-state.json"
INFO [2025-10-03T01:23:42.637Z] EngineCore Configuring loggingConnector: console
INFO [2025-10-03T01:23:42.637Z] EngineCore Configuring loggingConnector: entity-storage
INFO [2025-10-03T01:23:42.638Z] EngineCore Configuring Entity Storage with name "log-entry" using "file" connector
INFO [2025-10-03T01:23:42.638Z] EngineCore Configuring loggingConnector: multi
INFO [2025-10-03T01:23:42.638Z] EngineCore Configuring loggingComponent: service
...
INFO [2025-10-03T01:23:42.655Z] EngineCore Bootstrap started
...
INFO [2025-10-03T01:27:34.331Z] EngineCore Wallet already funded
INFO [2025-10-03T01:27:35.064Z] EngineCore Node identity already exists "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82"
INFO [2025-10-03T01:27:35.065Z] EngineCore Identity explorer "https://explorer.iota.org/object/0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82?network=testnet"
INFO [2025-10-03T01:27:35.065Z] EngineCore Node identity "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82"
INFO [2025-10-03T01:27:35.066Z] EngineCore Node user already exists "admin@node"
INFO [2025-10-03T01:27:35.066Z] EngineCore User profile already exists "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82"
INFO [2025-10-03T01:27:35.067Z] EngineCore Authentication key already exists "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82/auth-signing"
INFO [2025-10-03T01:27:35.067Z] EngineCore Blob encryption key already exists "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82/blob-encryption"
INFO [2025-10-03T01:27:35.807Z] EngineCore Verification method for attestation already exists "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82#attestation-assertion"
INFO [2025-10-03T01:27:36.512Z] EngineCore Verification method for immutable proof already exists "did:iota:testnet:0xc7aa88cd54c8c90fc1cbe5927b3e2fe33d478ca7b6b058020c0d87e8f88fac82#immutable-proof-assertion"
INFO [2025-10-03T01:27:36.512Z] EngineCore Bootstrap complete
INFO [2025-10-03T01:24:01.773Z] EngineCore Components are starting
...
INFO [2025-10-03T01:24:02.476Z] EngineCore Components have started
INFO [2025-10-03T01:24:02.476Z] EngineCore Engine has started
INFO [2025-10-03T01:24:02.477Z] EngineCore Saving state to file storage with filename "twin-node/data/engine-state.json"
INFO [2025-10-03T01:24:02.496Z] FastifyWebServer Building Web Server
...
INFO [2025-10-03T01:24:03.111Z] FastifyWebServer Starting Web Server at address "0.0.0.0" on port "3000"
INFO [2025-10-03T01:24:03.128Z] FastifyWebServer The Web Server started on http://0.0.0.0:3000
```

You should now be able to access the server in the browser [http://localhost:3000/info](http://localhost:3000/info).

On successfully communicating with the server you should see something similar to the following returned from the request:

```json
{
  "name": "TWIN Node Server",
  "version": "1.0.0"
}
```

The logging in the docker container should also show the request and response.

```shell
INFO [2024-07-24T08:46:25.283Z] ===> GET /info
INFO [2024-07-24T08:46:25.287Z] <=== 200 GET /info duration: 3987µs {"name":"TWIN Node Server","version":"1.0.0"}
```

The API server responds to the correct terminate signals so that when the docker container is stopped the server will also stop gracefully.
