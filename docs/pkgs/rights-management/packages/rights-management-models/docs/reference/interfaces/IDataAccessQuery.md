# Interface: IDataAccessQuery

The JSON-LD definition for the data access request.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/rights-management"`

The JSON-LD context.

***

### type

> **type**: `"DataAccessQuery"`

The type of the request.

***

### assetType?

> `optional` **assetType**: `string`

The asset type being requested.

***

### conditions?

> `optional` **conditions**: `EntityCondition`\<`IJsonLdNodeObject`\>

The conditions to filter the items.

***

### cursor?

> `optional` **cursor**: `string`

The cursor for pagination, if any.

***

### options?

> `optional` **options**: `unknown`

Additional options which might be supported by the handler.
