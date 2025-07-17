# Interface: IOpenApi

The Open API config definition.

## Properties

### openapi

> **openapi**: `string`

The open api version.

***

### info

> **info**: `object`

Info.

#### title

> **title**: `string`

#### version

> **version**: `string`

#### description

> **description**: `string`

#### license?

> `optional` **license**: `object`

##### license.name

> **name**: `string`

##### license.url

> **url**: `string`

***

### servers?

> `optional` **servers**: `object`[]

The servers for the endpoints.

#### url

> **url**: `string`

***

### tags?

> `optional` **tags**: `object`[]

Tags for the endpoints.

#### name

> **name**: `string`

#### description

> **description**: `string`

***

### paths

> **paths**: `object`

The paths.

#### Index Signature

\[`path`: `string`\]: `object`

***

### components?

> `optional` **components**: `object`

The components.

#### schemas?

> `optional` **schemas**: `AnySchemaObject`

#### securitySchemes?

> `optional` **securitySchemes**: `object`

##### Index Signature

\[`name`: `string`\]: [`IOpenApiSecurityScheme`](IOpenApiSecurityScheme.md)
