# Type Alias: IJsonLdValueObject

> **IJsonLdValueObject** = `object` & \{ `@value`: `null` \| `boolean` \| `number` \| `string`; `@language?`: `string`; `@direction?`: `"ltr"` \| `"rtl"` \| `null`; \} \| \{ `@value`: `null` \| `boolean` \| `number` \| `string`; `@type`: `string`; \} \| \{ `@value`: `null` \| `boolean` \| `number` \| `string` \| [`IJsonLdJsonObject`](../interfaces/IJsonLdJsonObject.md) \| [`IJsonLdJsonArray`](IJsonLdJsonArray.md); `@type`: `"@json"`; \}

A value object is used to explicitly associate a type or a language with a value
to create a typed value or a language-tagged string and possibly associate a base direction.

## Type declaration

### @index?

> `optional` **@index**: `string`

### @context?

> `optional` **@context**: [`IJsonLdContextDefinitionRoot`](IJsonLdContextDefinitionRoot.md)

## See

https://www.w3.org/TR/json-ld11/#value-objects
