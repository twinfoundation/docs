# Interface: ITsToOpenApiConfigEntryPoint

Configuration for the API.

## Properties

### name

> **name**: `string`

Match the name of the exported entry point.

***

### baseRoutePath?

> `optional` **baseRoutePath**: `string`

The base route path to use, defaults to the one in the entry point.

***

### operationIdDistinguisher?

> `optional` **operationIdDistinguisher**: `string`

If using the same routes on multiple paths use the distinguisher to avoid operationId clashes, will be appended to operationIds.
