# Interface: IJsonLdContextDefinition

A context definition defines a local context in a node object.

## See

https://www.w3.org/TR/json-ld11/#context-definitions

## Indexable

\[`key`: `string`\]: `undefined` \| `null` \| `string` \| `boolean` \| [`IJsonLdExpandedTermDefinition`](../type-aliases/IJsonLdExpandedTermDefinition.md) \| \{ `@container`: `"@set"`; `@protected`: `boolean`; \}

## Properties

### @base?

> `optional` **@base**: `null` \| `string`

***

### @direction?

> `optional` **@direction**: `null` \| `"ltr"` \| `"rtl"`

***

### @import?

> `optional` **@import**: `string`

***

### @language?

> `optional` **@language**: `string`

***

### @propagate?

> `optional` **@propagate**: `boolean`

***

### @protected?

> `optional` **@protected**: `boolean`

***

### @type?

> `optional` **@type**: `object`

#### @container

> **@container**: `"@set"`

#### @protected?

> `optional` **@protected**: `boolean`

***

### @version?

> `optional` **@version**: `"1.1"`

***

### @vocab?

> `optional` **@vocab**: `null` \| `string`
