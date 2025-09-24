# Interface: IDataAccessQueryResponse

The JSON-LD definition for the data access request.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/rights-management"`

The JSON-LD context.

***

### type

> **type**: `"DataAccessQueryResponse"`

The type of the request.

***

### items

> **items**: `IJsonLdNodeObject`[]

The items matching the query.

***

### cursor?

> `optional` **cursor**: `string`

The cursor for pagination, if any.
