# Function: run()

> **run**(`nodeOptions?`): `Promise`\<\{ `engine`: `Engine`\<`IEngineServerConfig`, [`INodeEngineState`](../interfaces/INodeEngineState.md)\>; `server`: `EngineServer`; `shutdown`: () => `Promise`\<`void`\>; \} \| `undefined`\>

Run the TWIN Node server.

## Parameters

### nodeOptions?

[`INodeOptions`](../interfaces/INodeOptions.md)

Optional configuration options for running the server.

## Returns

`Promise`\<\{ `engine`: `Engine`\<`IEngineServerConfig`, [`INodeEngineState`](../interfaces/INodeEngineState.md)\>; `server`: `EngineServer`; `shutdown`: () => `Promise`\<`void`\>; \} \| `undefined`\>

A promise that resolves when the server is started containing a shutdown method.
