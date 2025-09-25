# Function: initialiseRightsManagementPxpComponent()

> **initialiseRightsManagementPxpComponent**(`engineCore`, `context`, `instanceConfig`, `overrideInstanceType?`): `Promise`\<`undefined` \| `string`\>

Initialise the rights management PXP component.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### instanceConfig

[`RightsManagementPxpComponentConfig`](../type-aliases/RightsManagementPxpComponentConfig.md)

The instance config.

### overrideInstanceType?

`string`

The instance type to override the default.

## Returns

`Promise`\<`undefined` \| `string`\>

The name of the instance created.

## Throws

GeneralError if the component type is unknown.
