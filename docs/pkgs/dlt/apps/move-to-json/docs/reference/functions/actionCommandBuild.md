# Function: actionCommandBuild()

> **actionCommandBuild**(`inputGlob`, `opts`): `Promise`\<`void`\>

Action for the build command.

## Parameters

### inputGlob

`string`

A glob pattern that matches one or more Move files

### opts

Additional options.

#### network?

[`NetworkTypes`](../type-aliases/NetworkTypes.md)

Target network (testnet/devnet/mainnet) - optional if NETWORK env var is set.

#### output?

`string`

Where we store the final compiled modules.

## Returns

`Promise`\<`void`\>
