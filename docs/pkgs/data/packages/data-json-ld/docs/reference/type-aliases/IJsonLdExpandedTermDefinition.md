# Type Alias: IJsonLdExpandedTermDefinition

> **IJsonLdExpandedTermDefinition** = `object` & \{ `@id?`: `string` \| `string`[] \| `null`; `@nest?`: `"@nest"` \| `string`; `@container?`: `"@list"` \| `"@set"` \| [`IJsonLdContainerType`](IJsonLdContainerType.md) \| (`"@list"` \| `"@set"` \| [`IJsonLdContainerType`](IJsonLdContainerType.md))[] \| [`IJsonLdContainerTypeArray`](IJsonLdContainerTypeArray.md) \| `null`; \} \| \{ `@reverse`: `string`; `@container?`: `"@set"` \| `"@index"` \| `null`; \}

An expanded term definition is used to describe the mapping between a term
and its expanded identifier, as well as other properties of the value
associated with the term when it is used as key in a node object.

## Type declaration

### @type?

> `optional` **@type**: `"@id"` \| `"@json"` \| `"@none"` \| `"@vocab"` \| `string`

### @language?

> `optional` **@language**: `string`

### @index?

> `optional` **@index**: `string`

### @context?

> `optional` **@context**: [`IJsonLdContextDefinition`](../interfaces/IJsonLdContextDefinition.md)

### @prefix?

> `optional` **@prefix**: `boolean`

### @propagate?

> `optional` **@propagate**: `boolean`

### @protected?

> `optional` **@protected**: `boolean`

## See

https://www.w3.org/TR/json-ld11/#expanded-term-definition
