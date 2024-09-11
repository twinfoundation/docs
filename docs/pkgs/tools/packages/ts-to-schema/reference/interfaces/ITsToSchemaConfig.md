# Interface: ITsToSchemaConfig

Configuration for the tool.

## Properties

### baseUrl

> **baseUrl**: `string`

The base url for the type references e.g. https://schema.gtsc.io/my-namespace/.

***

### sources

> **sources**: `string`[]

The list of glob sources that can be used to generate the schemas.

***

### types

> **types**: `string`[]

The list of types to generate.

***

### externalReferences?

> `optional` **externalReferences**: `object`

External type references

#### Index signature

 \[`id`: `string`\]: `string`
