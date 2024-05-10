# Class: CLI

The main entry point for the CLI.

## Constructors

### constructor

• **new CLI**(): [`CLI`](CLI.md)

#### Returns

[`CLI`](CLI.md)

## Methods

### process

▸ **process**(`tsToOpenApiConfig`, `outputApiJson`, `outputWorkingDir`): `Promise`\<`boolean`\>

Process the configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tsToOpenApiConfig` | [`ITsToOpenApiConfig`](../interfaces/ITsToOpenApiConfig.md) | The API Configuration |
| `outputApiJson` | `string` | The json file to output the API to. |
| `outputWorkingDir` | `string` | The working directory. |

#### Returns

`Promise`\<`boolean`\>

The true if the process was successful.

___

### run

▸ **run**(`argv`): `Promise`\<`number`\>

Run the app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `argv` | `string`[] | The process arguments. |

#### Returns

`Promise`\<`number`\>

The exit code.
