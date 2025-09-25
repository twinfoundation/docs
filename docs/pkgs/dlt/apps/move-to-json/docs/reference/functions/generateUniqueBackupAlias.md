# Function: generateUniqueBackupAlias()

> **generateUniqueBackupAlias**(`baseAlias`, `existingKeys`): `string`

Generate a unique backup alias that doesn't conflict with existing keys.
Uses cryptographically secure random bytes to avoid conflicts.

## Parameters

### baseAlias

`string`

The original alias name.

### existingKeys

`object`[]

Array of existing keys from keystore.

## Returns

`string`

A unique backup alias name.
