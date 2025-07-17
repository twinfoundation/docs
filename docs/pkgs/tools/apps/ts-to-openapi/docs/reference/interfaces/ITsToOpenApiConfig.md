# Interface: ITsToOpenApiConfig

Configuration for the API.

## Properties

### title

> **title**: `string`

Title of the API.

***

### version

> **version**: `string`

The version.

***

### description

> **description**: `string`

Description of the API.

***

### licenseName

> **licenseName**: `string`

The license to use.

***

### licenseUrl

> **licenseUrl**: `string`

The license URL.

***

### servers

> **servers**: `string`[]

The servers for the endpoints.

***

### authMethods?

> `optional` **authMethods**: `string`[]

The authentication methods.

***

### restRoutes

> **restRoutes**: `object`[]

The packages containing routes.

#### package?

> `optional` **package**: `string`

The package containing the routes.

#### version?

> `optional` **version**: `string`

The version of the package to use, defaults to latest.

#### packageRoot?

> `optional` **packageRoot**: `string`

To point to a local instance of a package use this property instead of package/version.

#### entryPoints?

> `optional` **entryPoints**: [`ITsToOpenApiConfigEntryPoint`](ITsToOpenApiConfigEntryPoint.md)[]

The rest entry points to include, defaults to all exported entry points.

***

### externalReferences?

> `optional` **externalReferences**: `object`

External type references

#### Index Signature

\[`id`: `string`\]: `string`

***

### overrides?

> `optional` **overrides**: `object`

Override for specific types, to be used when the type cannot be generated automatically, or is generated incorrectly.

#### Index Signature

\[`id`: `string`\]: `AnySchemaObject`

***

### autoExpandTypes?

> `optional` **autoExpandTypes**: `string`[]

The types to automatically expand inline in type definitions, reg ex string matches.
