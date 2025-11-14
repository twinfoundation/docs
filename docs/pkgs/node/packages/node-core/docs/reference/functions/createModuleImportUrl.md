# Function: createModuleImportUrl()

> **createModuleImportUrl**(`filePath`): `string`

Convert a file path to an import-compatible URL for cross-platform module loading.
On Windows, adds the 'file://' protocol prefix required for dynamic imports.
On other platforms, returns the path unchanged.

## Parameters

### filePath

`string`

The absolute file path to convert.

## Returns

`string`

A URL string compatible with dynamic import().
