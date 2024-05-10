# Interface: IOpenApi

The Open API config definition.

## Properties

### components

• `Optional` **components**: `Object`

The components.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `schemas?` | `JSONSchema7` |
| `securitySchemes?` | \{ `[name: string]`: [`IOpenApiSecurityScheme`](IOpenApiSecurityScheme.md);  } |

___

### info

• **info**: `Object`

Info.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `license?` | \{ `name`: `string` ; `url`: `string`  } |
| `license.name` | `string` |
| `license.url` | `string` |
| `title` | `string` |
| `version` | `string` |

___

### openapi

• **openapi**: `string`

The open api version.

___

### paths

• **paths**: `Object`

The paths.

#### Index signature

▪ [path: `string`]: \{ `[method: string]`: [`IOpenApiPathMethod`](IOpenApiPathMethod.md);  }

___

### servers

• `Optional` **servers**: \{ `url`: `string`  }[]

The servers for the endpoints.

___

### tags

• `Optional` **tags**: \{ `description`: `string` ; `name`: `string`  }[]

Tags for the endpoints.
