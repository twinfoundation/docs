# Type Alias: IJsonLdKeyword

> **IJsonLdKeyword**: `object`

A list of keywords and their types.
Only used for internal reference; not an actual interface.
Not for export.

## Type declaration

### @base

> **@base**: `string` \| `null`

### @container

> **@container**: `"@list"` \| `"@set"` \| [`IJsonLdContainerType`](IJsonLdContainerType.md) \| (`"@list"` \| `"@set"` \| [`IJsonLdContainerType`](IJsonLdContainerType.md))[] \| [`IJsonLdContainerTypeArray`](IJsonLdContainerTypeArray.md) \| `null`

### @context

> **@context**: `null` \| `string` \| [`IJsonLdContextDefinition`](../interfaces/IJsonLdContextDefinition.md) \| (`null` \| `string` \| [`IJsonLdContextDefinition`](../interfaces/IJsonLdContextDefinition.md))[]

### @direction

> **@direction**: `"ltr"` \| `"rtl"` \| `null`

### @graph

> **@graph**: [`IJsonLdValueObject`](IJsonLdValueObject.md) \| [`IJsonLdNodeObject`](../interfaces/IJsonLdNodeObject.md) \| ([`IJsonLdValueObject`](IJsonLdValueObject.md) \| [`IJsonLdNodeObject`](../interfaces/IJsonLdNodeObject.md))[]

### @id

> **@id**: `string` \| `string`[]

### @import

> **@import**: `string`

### @included

> **@included**: [`IJsonLdIncludedBlock`](IJsonLdIncludedBlock.md)

### @index

> **@index**: `string`

### @json

> **@json**: `"@json"`

### @language

> **@language**: `string`

### @list

> **@list**: [`IJsonLdListOrSetItem`](IJsonLdListOrSetItem.md) \| [`IJsonLdListOrSetItem`](IJsonLdListOrSetItem.md)[]

### @nest

> **@nest**: `object`

### @none

> **@none**: `"@none"`

### @prefix

> **@prefix**: `boolean`

### @propagate

> **@propagate**: `boolean`

### @protected

> **@protected**: `boolean`

### @reverse

> **@reverse**: `string`

### @set

> **@set**: [`IJsonLdListOrSetItem`](IJsonLdListOrSetItem.md) \| [`IJsonLdListOrSetItem`](IJsonLdListOrSetItem.md)[]

### @type

> **@type**: `string`

### @value

> **@value**: `null` \| `boolean` \| `number` \| `string`

### @version

> **@version**: `"1.1"`

### @vocab

> **@vocab**: `string` \| `null`

## See

https://www.w3.org/TR/json-ld/#keywords
