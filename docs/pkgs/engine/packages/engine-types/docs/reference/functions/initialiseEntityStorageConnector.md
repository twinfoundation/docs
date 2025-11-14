# Function: initialiseEntityStorageConnector()

> **initialiseEntityStorageConnector**(`engineCore`, `context`, `typeCustom`, `schema`, `partitionContextIds`): `string`

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

### partitionContextIds

`string`[]

The context IDs to use for partitioning the data.

## Returns

`string`

The name of the instance type that was created.

## Throws

GeneralError when the configuration is invalid.
