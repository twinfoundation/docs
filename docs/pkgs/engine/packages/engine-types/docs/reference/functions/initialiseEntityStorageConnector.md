# Function: initialiseEntityStorageConnector()

> **initialiseEntityStorageConnector**(`engineCore`, `context`, `typeCustom`, `schema`): `string`

Initialise the entity storage connector.

## Parameters

### engineCore

`IEngineCore`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The engine core.

### context

`IEngineCoreContext`\<[`IEngineConfig`](../interfaces/IEngineConfig.md)\>

The context for the engine.

### typeCustom

Override the type of connector to use instead of default configuration.

`undefined` | `string`

### schema

`string`

The schema for the entity storage.

## Returns

`string`

The name of the instance type that was created.

## Throws

GeneralError if the connector type is unknown.
