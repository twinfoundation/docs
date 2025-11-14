# Function: handleNpmProtocol()

> **handleNpmProtocol**(`packageName`, `executionDirectory`, `cacheDirectory?`): `Promise`\<[`IProtocolHandlerResult`](../interfaces/IProtocolHandlerResult.md)\>

Handle the npm: protocol by installing the package if needed.

## Parameters

### packageName

`string`

The npm package name (without npm: prefix).

### executionDirectory

`string`

The execution directory.

### cacheDirectory?

`string`

The cache directory base path.

## Returns

`Promise`\<[`IProtocolHandlerResult`](../interfaces/IProtocolHandlerResult.md)\>

The resolved path to the installed module.
