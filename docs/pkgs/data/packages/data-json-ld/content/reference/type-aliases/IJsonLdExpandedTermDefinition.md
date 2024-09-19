# Type Alias: IJsonLdExpandedTermDefinition

> **IJsonLdExpandedTermDefinition**: `object` & `object` \| `object`

An expanded term definition is used to describe the mapping between a term
and its expanded identifier, as well as other properties of the value
associated with the term when it is used as key in a node object.

## Type declaration

### @type?

> `optional` **@type**: `"@id"` \| `"@json"` \| `"@none"` \| `"@vocab"` \| `string`

### @language?

> `optional` **@language**: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@language"`\]

### @index?

> `optional` **@index**: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@index"`\]

### @context?

> `optional` **@context**: [`IJsonLdContextDefinition`](../interfaces/IJsonLdContextDefinition.md)

### @prefix?

> `optional` **@prefix**: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@prefix"`\]

### @propagate?

> `optional` **@propagate**: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@propagate"`\]

### @protected?

> `optional` **@protected**: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@protected"`\]

## See

https://www.w3.org/TR/json-ld11/#expanded-term-definition
