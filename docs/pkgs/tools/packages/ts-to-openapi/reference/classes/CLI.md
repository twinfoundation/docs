# Class: CLI

The main entry point for the CLI.

## Constructors

### new CLI()

> **new CLI**(): [`CLI`](CLI.md)

#### Returns

[`CLI`](CLI.md)

## Methods

### run()

> **run**(`argv`): `Promise`\<`number`\>

Run the app.

#### Parameters

• **argv**: `string`[]

The process arguments.

#### Returns

`Promise`\<`number`\>

The exit code.

***

### process()

> **process**(`tsToOpenApiConfig`, `outputApiJson`, `outputWorkingDir`): `Promise`\<`boolean`\>

Process the configuration.

#### Parameters

• **tsToOpenApiConfig**: [`ITsToOpenApiConfig`](../interfaces/ITsToOpenApiConfig.md)

The API Configuration

• **outputApiJson**: `string`

The json file to output the API to.

• **outputWorkingDir**: `string`

The working directory.

#### Returns

`Promise`\<`boolean`\>

The true if the process was successful.
