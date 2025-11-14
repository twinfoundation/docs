# Function: start()

> **start**(`nodeOptions`, `nodeEngineConfig`, `envVars`, `contextIdKeys?`): `Promise`\<\{ `engine`: `Engine`\<`IEngineServerConfig`, [`INodeEngineState`](../interfaces/INodeEngineState.md)\>; `server`: `EngineServer`; `shutdown`: () => `Promise`\<`void`\>; \} \| `undefined`\>

Start the engine server.

## Parameters

### nodeOptions

Optional run options for the engine server.

[`INodeOptions`](../interfaces/INodeOptions.md) | `undefined`

### nodeEngineConfig

[`INodeEngineConfig`](../interfaces/INodeEngineConfig.md)

The configuration for the engine server.

### envVars

[`INodeEnvironmentVariables`](../interfaces/INodeEnvironmentVariables.md)

The environment variables.

### contextIdKeys?

`string`[]

The context ID keys.

## Returns

`Promise`\<\{ `engine`: `Engine`\<`IEngineServerConfig`, [`INodeEngineState`](../interfaces/INodeEngineState.md)\>; `server`: `EngineServer`; `shutdown`: () => `Promise`\<`void`\>; \} \| `undefined`\>

The engine server.
