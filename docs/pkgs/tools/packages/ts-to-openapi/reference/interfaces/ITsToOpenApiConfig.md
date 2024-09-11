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

***

### externalReferences?

> `optional` **externalReferences**: `object`

External type references

#### Index signature

 \[`id`: `string`\]: `string`
