# Type Alias: IJsonLdValueObject

> **IJsonLdValueObject**: `object` & \{ `@value`: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@value"`\]; `@language`: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@language"`\]; `@direction`: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@direction"`\]; \} \| \{ `@value`: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@value"`\]; `@type`: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@type"`\]; \} \| \{ `@value`: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@value"`\] \| [`IJsonLdJsonObject`](../interfaces/IJsonLdJsonObject.md) \| [`IJsonLdJsonArray`](IJsonLdJsonArray.md); `@type`: `"@json"`; \}

A value object is used to explicitly associate a type or a language with a value
to create a typed value or a language-tagged string and possibly associate a base direction.

## Type declaration

### @index?

> `optional` **@index**: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@index"`\]

### @context?

> `optional` **@context**: [`IJsonLdKeyword`](IJsonLdKeyword.md)\[`"@context"`\]

## See

https://www.w3.org/TR/json-ld11/#value-objects
