# Interface: IOpenApiPathMethod

The Open API config definition.

## Properties

### operationId

• **operationId**: `string`

The operation id.

___

### parameters

• `Optional` **parameters**: \{ `description?`: `string` ; `in`: `string` ; `name`: `string` ; `required`: `boolean` ; `schema`: \{ `type`: `string`  } ; `style?`: `string`  }[]

Parameters.

___

### requestBody

• `Optional` **requestBody**: `Object`

Request body.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content?` | \{ `[contentType: string]`: \{ `examples?`: \{ `[id: string]`: [`IOpenApiExample`](IOpenApiExample.md);  } ; `schema`: \{ `$ref`: `string`  }  };  } |
| `description?` | `string` |
| `required` | `boolean` |

___

### responses

• `Optional` **responses**: `Object`

Response body.

#### Index signature

▪ [code: `string`]: [`IOpenApiResponse`](IOpenApiResponse.md)

___

### security

• `Optional` **security**: \{ `[name: string]`: `string`[];  }[]

Security model for the API.

___

### summary

• **summary**: `string`

Summary.

___

### tags

• `Optional` **tags**: `string`[]

Tags.
