# Interface: IJsonLdContextDefinition

A context definition defines a local context in a node object.

## See

https://www.w3.org/TR/json-ld11/#context-definitions

## Indexable

\[`key`: `string`\]: `string` \| `boolean` \| [`IJsonLdExpandedTermDefinition`](../type-aliases/IJsonLdExpandedTermDefinition.md) \| \{ `@container`: `"@set"`; `@protected?`: `boolean`; \} \| `null` \| `undefined`

## Properties

### @base?

> `optional` **@base**: `string` \| `null`

***

### @direction?

> `optional` **@direction**: `"ltr"` \| `"rtl"` \| `null`

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

> `optional` **@vocab**: `string` \| `null`
