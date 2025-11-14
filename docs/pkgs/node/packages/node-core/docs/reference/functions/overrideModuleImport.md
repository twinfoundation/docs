# Function: overrideModuleImport()

> **overrideModuleImport**(`executionDirectory`, `envVars?`): `void`

Override module imports to support protocol-based loading (npm:, https:) and local files.

## Parameters

### executionDirectory

`string`

The execution directory for resolving local module paths.

### envVars?

[`INodeEnvironmentVariables`](../interfaces/INodeEnvironmentVariables.md)

The environment variables containing extension configuration (optional, uses defaults if not provided).

## Returns

`void`
