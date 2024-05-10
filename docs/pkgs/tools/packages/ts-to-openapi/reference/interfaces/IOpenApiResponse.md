# Interface: IOpenApiResponse

The Open API config definition.

## Properties

### content

• `Optional` **content**: `Object`

Content for the response.

#### Index signature

▪ [contentType: `string`]: \{ `examples?`: \{ `[id: string]`: [`IOpenApiExample`](IOpenApiExample.md);  } ; `schema`: \{ `$ref?`: `string` ; `format?`: `string` ; `type?`: `string`  }  }

___

### description

• `Optional` **description**: `string`

Descriptions for the response.

___

### headers

• `Optional` **headers**: `Object`

The headers for the response.

#### Index signature

▪ [id: `string`]: [`IOpenApiHeader`](IOpenApiHeader.md)
