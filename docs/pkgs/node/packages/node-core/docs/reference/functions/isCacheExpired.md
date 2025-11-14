# Function: isCacheExpired()

> **isCacheExpired**(`metadataPath`, `ttlHours`, `forceRefresh`): `Promise`\<`boolean`\>

Check if a cached file has expired based on TTL and force refresh settings.

## Parameters

### metadataPath

`string`

Path to the cache metadata file.

### ttlHours

`number`

Time to live in hours.

### forceRefresh

`boolean`

Whether to force refresh regardless of TTL.

## Returns

`Promise`\<`boolean`\>

True if the cache is expired or should be refreshed.
