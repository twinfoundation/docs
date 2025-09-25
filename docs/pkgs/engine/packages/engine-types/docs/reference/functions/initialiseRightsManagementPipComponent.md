# Function: initialiseRightsManagementPipComponent()

> **initialiseRightsManagementPipComponent**(`engineCore`, `context`, `instanceConfig`, `overrideInstanceType?`): `Promise`\<`undefined` \| `string`\>

Initialise the rights management PIP component.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`RightsManagementPipComponentConfig`](../type-aliases/RightsManagementPipComponentConfig.md)

The instance config.

### overrideInstanceType?

`string`

The instance type to override the default.

## Returns

`Promise`\<`undefined` \| `string`\>

The name of the instance created.

## Throws

GeneralError if the component type is unknown.
