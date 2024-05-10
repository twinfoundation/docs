# Class: CLI

The main entry point for the CLI.

## Constructors

### constructor

• **new CLI**(): [`CLI`](CLI.md)

#### Returns

[`CLI`](CLI.md)

## Methods

### extractTypes

▸ **extractTypes**(`allSchemas`, `requiredTypes`, `referencedSchemas`): `void`

Extract the required types from all the known schemas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allSchemas` | `Object` | All the known schemas. |
| `requiredTypes` | `string`[] | The required types. |
| `referencedSchemas` | `Object` | The references schemas. |

#### Returns

`void`

___

### extractTypesFromSchema

▸ **extractTypesFromSchema**(`allTypes`, `schema`, `output`): `void`

Extract type from properties definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allTypes` | `Object` | All the known types. |
| `schema` | `JSONSchema7` | The schema to extract from. |
| `output` | `Object` | The output types. |

#### Returns

`void`

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

___

### runShellCmd

▸ **runShellCmd**(`app`, `args`, `cwd`): `Promise`\<`void`\>

Run a shell app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `string` | The app to run in the shell. |
| `args` | `string`[] | The args for the app. |
| `cwd` | `string` | The working directory to execute the command in. |

#### Returns

`Promise`\<`void`\>

Promise to wait for command execution to complete.

___

### tidySchemaProperties

▸ **tidySchemaProperties**(`props`): `void`

Tidy up the schemas for use in OpenAPI context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | The properties to tidy up. |

#### Returns

`void`
