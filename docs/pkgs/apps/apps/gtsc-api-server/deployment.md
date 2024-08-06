# @gtsc/gtsc-api-server - Deployment

## Docker Building

To run the API server in the docker environment there is an example dockerfile in `deploy/dockerfile`:

```shell
# Set the base image
FROM node:20

# Create the app directory
WORKDIR /app

# Copy the package.json
COPY package.json .

# Install only the production dependencies
RUN npm install --omit=dev

# Copy the rest of the files to the image
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set the environment variables that will override the .env file in the package
ENV GTSC_HOST=0.0.0.0
ENV GTSC_PORT=3000
ENV GTSC_STORAGE_FILE_ROOT=/gtsc/data

# Start the server
CMD ["node", "dist/es/index.js"]
```

You can build and execute this using docker from the root of the package with the following command.

```shell
docker build -t gtsc-api-server -f deploy/dockerfile .
```

This will build and deploy an image called `gtsc-api-server` to your docker server.

## Docker Bootstrapping

To initialize the server instance you must first run it in `bootstrap` mode. If you have any entity storage configured to use `file` storage you should map a folder on the local host to contain the data, so that it remains persistent.

To bootstrap the docker image run the following command:

```shell
docker run -t -i -v d:/docker-host/gtsc/data:/gtsc/data -e GTSC_BOOTSTRAP=true gtsc-api-server
```

This example will map the local folder `d:/docker-host/gtsc/data` and make it available in the docker container as `/gtsc/data` which is used to configure file entity storage using the environment variable `GTSC_STORAGE_FILE_ROOT`.

The output from the docker container should be something like the following.

```shell
🌩️ GTSC API Server v1.0.0

➡️  Bootstrapping mode

INFO [2024-07-24T08:35:58.760Z] Configuring Information Service
INFO [2024-07-24T08:35:58.761Z] Configuring Vault Connector Factory
INFO [2024-07-24T08:35:58.761Z] Configuring Entity Storage with name "vault-key" using "file" connector
INFO [2024-07-24T08:35:58.762Z] Configuring Entity Storage with name "vault-secret" using "file" connector
INFO [2024-07-24T08:35:58.762Z] Configuring Identity Connector Factory
INFO [2024-07-24T08:35:58.762Z] Configuring Entity Storage with name "identity-document" using "file" connector
INFO [2024-07-24T08:35:58.763Z] Configuring Identity Service
INFO [2024-07-24T08:35:58.763Z] Configuring Entity Storage with name "identity-profile" using "file" connector
INFO [2024-07-24T08:35:58.764Z] Configuring Entity Storage with name "authentication-user" using "file" connector
INFO [2024-07-24T08:35:58.764Z] Bootstrap FileEntityStorageConnector
INFO [2024-07-24T08:35:58.765Z] Creating directory "/gtsc/data/vault-key"
INFO [2024-07-24T08:35:58.766Z] Created directory "/gtsc/data/vault-key"
INFO [2024-07-24T08:35:58.766Z] Bootstrap FileEntityStorageConnector
INFO [2024-07-24T08:35:58.767Z] Creating directory "/gtsc/data/vault-secret"
INFO [2024-07-24T08:35:58.768Z] Created directory "/gtsc/data/vault-secret"
INFO [2024-07-24T08:35:58.768Z] Bootstrap FileEntityStorageConnector
INFO [2024-07-24T08:35:58.768Z] Creating directory "/gtsc/data/identity"
INFO [2024-07-24T08:35:58.770Z] Created directory "/gtsc/data/identity"
INFO [2024-07-24T08:35:58.770Z] Bootstrap FileEntityStorageConnector
INFO [2024-07-24T08:35:58.771Z] Creating directory "/gtsc/data/identity-profile"
INFO [2024-07-24T08:35:58.772Z] Created directory "/gtsc/data/identity-profile"
INFO [2024-07-24T08:35:58.774Z] Bootstrap FileEntityStorageConnector
INFO [2024-07-24T08:35:58.775Z] Creating directory "/gtsc/data/auth-user"
INFO [2024-07-24T08:35:58.776Z] Created directory "/gtsc/data/auth-user"
INFO [2024-07-24T08:35:58.776Z] Bootstrap EntityStorageAuthenticationService
INFO [2024-07-24T08:35:58.829Z] The signing encryption key was created in the vault
INFO [2024-07-24T08:35:58.839Z] The default system user has been created, email: "system@system", password: "Jn2D0CyQu?DhZRGV"
```

You will see it generated an API key and system user with password for future use, these should be recorded as they will not be made visible again.

Running bootstrap again will not overwrite any existing data, to perform a clean bootstrap you must manually clear the storage.

## Docker Running

You can now use a similar command to run docker and launch the API server. This time instead of setting the bootstrap environment variable we expose the port so that the API server can be accessed externally.

```shell
docker run -t -i -v d:/docker-host/gtsc/data:/gtsc/data -p 3000:3000 gtsc-api-server
```

You should now see output similar to the following:

```shell
🌩️ GTSC API Server v1.0.0

Debugging Enabled: true

INFO [2024-07-24T08:43:02.989Z] Configuring Information Service
INFO [2024-07-24T08:43:02.992Z] Configuring Vault Connector Factory
INFO [2024-07-24T08:43:02.993Z] Configuring Entity Storage with name "vault-key" using "file" connector
INFO [2024-07-24T08:43:02.993Z] Configuring Entity Storage with name "vault-secret" using "file" connector
INFO [2024-07-24T08:43:02.993Z] Configuring Identity Connector Factory
INFO [2024-07-24T08:43:02.994Z] Configuring Entity Storage with name "identity-document" using "file" connector
INFO [2024-07-24T08:43:02.994Z] Configuring Identity Service
INFO [2024-07-24T08:43:02.994Z] Configuring Entity Storage with name "identity-profile" using "file" connector
INFO [2024-07-24T08:43:02.995Z] Configuring Entity Storage with name "authentication-user" using "file" connector
INFO [2024-07-24T08:43:02.995Z] Starting InformationService
INFO [2024-07-24T08:43:02.997Z] Starting EntityStorageAuthenticationService
INFO [2024-07-24T08:43:02.998Z] Starting EntityStorageAuthenticationProcessor
INFO [2024-07-24T08:43:03.002Z] Building Web Server
INFO [2024-07-24T08:43:03.008Z] Added REST route "/" "GET"
INFO [2024-07-24T08:43:03.009Z] Added REST route "/info" "GET"
INFO [2024-07-24T08:43:03.009Z] Added REST route "/health" "GET"
INFO [2024-07-24T08:43:03.010Z] Added REST route "/spec" "GET"
INFO [2024-07-24T08:43:03.010Z] Added REST route "/authentication/login" "POST"
INFO [2024-07-24T08:43:03.010Z] Added REST route "/identity" "POST"
INFO [2024-07-24T08:43:03.011Z] Added REST route "/identity/profile" "POST"
INFO [2024-07-24T08:43:03.011Z] Added REST route "/identity/profile/:identity" "GET"
INFO [2024-07-24T08:43:03.012Z] Added REST route "/identity/profile/:identity" "PUT"
INFO [2024-07-24T08:43:03.012Z] Added REST route "/identity/profile/:identity" "DELETE"
INFO [2024-07-24T08:43:03.013Z] Added REST route "/identity/profile" "GET"
INFO [2024-07-24T08:43:03.013Z] Starting Web Server at address "0.0.0.0" on port "3000"
INFO [2024-07-24T08:43:03.017Z] The Web Server started on http://0.0.0.0:3000
```

You should now be able to access the server in the browser [http://localhost:3000/info](http://localhost:3000/info).

On successfully communicating with the server you should see something similar to the following returned from the request:

```json
{
  "name": "GTSC API Server",
  "version": "1.0.0"
}
```

The logging in the docker container should also show the request and response.

```shell
INFO [2024-07-24T08:46:25.283Z] ===> GET /info
INFO [2024-07-24T08:46:25.287Z] <=== 200 GET /info duration: 3987µs {"name":"GTSC API Server","version":"1.0.0"}
```

The API server responds to the correct terminate signals so that when the docker container is stopped the server will also stop gracefully.
