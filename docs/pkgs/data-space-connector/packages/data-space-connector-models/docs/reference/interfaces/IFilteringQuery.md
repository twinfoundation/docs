# Interface: IFilteringQuery

A query over a data asset that to be processed by a DS Connector App.

## Properties

### type

> **type**: `string`

The query type.

***

### q

> **q**: `unknown`

The representation of the query.

***

### jsonLdContext?

> `optional` **jsonLdContext**: `IJsonLdContextDefinitionElement`[]

The JSON-LD context to be applied over the query terms.
