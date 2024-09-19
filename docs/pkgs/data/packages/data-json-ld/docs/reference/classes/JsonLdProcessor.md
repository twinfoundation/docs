# Class: JsonLdProcessor

JSON-LD Processor.

## Constructors

### new JsonLdProcessor()

> **new JsonLdProcessor**(): [`JsonLdProcessor`](JsonLdProcessor.md)

#### Returns

[`JsonLdProcessor`](JsonLdProcessor.md)

## Methods

### DOCUMENT\_LOADER()

> `static` **DOCUMENT\_LOADER**(`url`): `Promise`\<`RemoteDocument`\>

The document loader to use.

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<`RemoteDocument`\>

***

### compact()

> `static` **compact**(`document`, `context`?): `Promise`\<[`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md)\>

Compact a document according to a particular context.

#### Parameters

• **document**: [`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md)

The JSON-LD document to compact.

• **context?**: [`IJsonLdContextDefinition`](../interfaces/IJsonLdContextDefinition.md)

The context to compact the document to.

#### Returns

`Promise`\<[`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md)\>

The compacted JSON-LD document.

***

### expand()

> `static` **expand**(`compacted`): `Promise`\<[`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md)\>

Expand a document, removing its context.

#### Parameters

• **compacted**: [`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md)

The compacted JSON-LD document to expand.

#### Returns

`Promise`\<[`IJsonLdDocument`](../type-aliases/IJsonLdDocument.md)\>

The expanded JSON-LD document.

***

### addRedirect()

> `static` **addRedirect**(`from`, `to`): `void`

Add a redirect to use during document resolution.

#### Parameters

• **from**: `RegExp`

The URL to redirect from.

• **to**: `string`

The URL to redirect to.

#### Returns

`void`
