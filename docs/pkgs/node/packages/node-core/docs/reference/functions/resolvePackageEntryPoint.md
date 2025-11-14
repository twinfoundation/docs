# Function: resolvePackageEntryPoint()

> **resolvePackageEntryPoint**(`packagePath`, `packageName`, `fallback`): `Promise`\<`string`\>

Resolve the main entry point from a package directory using Node.js resolution with fallback.
Uses require.resolve() when possible for standard Node.js behavior, with manual fallback.

## Parameters

### packagePath

`string`

The absolute path to the package directory.

### packageName

`string`

The package name for require.resolve().

### fallback

`string` = `"index.js"`

The fallback file name if no entry point is found.

## Returns

`Promise`\<`string`\>

The resolved entry point file name (relative to package directory).
