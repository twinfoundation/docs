# Interface: ITsToSchemaConfig

Configuration for the tool.

## Properties

### baseUrl

> **baseUrl**: `string`

The base url for the type references e.g. https://schema.twindev.org/my-namespace/.

***

### types

> **types**: `string`[]

The source files to generate the types from.

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
