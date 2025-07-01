# Type Alias: IJsonLdDocument

> **IJsonLdDocument** = [`IJsonLdNodeObject`](../interfaces/IJsonLdNodeObject.md) \| [`IJsonLdNodeObject`](../interfaces/IJsonLdNodeObject.md)[] \| \{ `@context?`: [`IJsonLdContextDefinitionRoot`](IJsonLdContextDefinitionRoot.md); `@graph?`: [`IJsonLdValueObject`](IJsonLdValueObject.md) \| [`IJsonLdNodeObject`](../interfaces/IJsonLdNodeObject.md) \| ([`IJsonLdValueObject`](IJsonLdValueObject.md) \| [`IJsonLdNodeObject`](../interfaces/IJsonLdNodeObject.md))[]; \}

A JSON-LD document MUST be valid JSON text as described in [RFC8259],
or some format that can be represented in the JSON-LD internal representation
that is equivalent to valid JSON text.

## See

https://www.w3.org/TR/json-ld11/#json-ld-grammar
