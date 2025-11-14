# Function: buildEngineServerConfiguration()

> **buildEngineServerConfiguration**(`envVars`, `contextIdKeys`, `coreEngineConfig`, `serverInfo`, `openApiSpecPath?`, `favIconPath?`): `Promise`\<`IEngineServerConfig`\>

Handles the configuration of the server.

## Parameters

### envVars

[`IEngineServerEnvironmentVariables`](../interfaces/IEngineServerEnvironmentVariables.md)

The environment variables for the engine server.

### contextIdKeys

`string`[]

The context ID keys.

### coreEngineConfig

`IEngineCoreConfig`

The core engine config.

### serverInfo

`IServerInfo`

The server information.

### openApiSpecPath?

`string`

The path to the open api spec.

### favIconPath?

`string`

The path to the favicon.

## Returns

`Promise`\<`IEngineServerConfig`\>

The config for the core and the server.
