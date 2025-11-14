# Function: handleHttpsProtocol()

> **handleHttpsProtocol**(`url`, `executionDirectory`, `maxSizeMb`, `cacheDirectory?`, `ttlHours?`, `forceRefresh?`): `Promise`\<[`IProtocolHandlerResult`](../interfaces/IProtocolHandlerResult.md)\>

Handle the https: protocol by downloading the module if needed.

## Parameters

### url

`string`

The HTTPS URL to download from.

### executionDirectory

`string`

The execution directory.

### maxSizeMb

`number`

The maximum size in MB for the download.

### cacheDirectory?

`string`

The cache directory base path.

### ttlHours?

`number`

TTL in hours for cache expiration.

### forceRefresh?

`boolean`

Whether to force refresh the cache.

## Returns

`Promise`\<[`IProtocolHandlerResult`](../interfaces/IProtocolHandlerResult.md)\>

The resolved path to the downloaded module.
