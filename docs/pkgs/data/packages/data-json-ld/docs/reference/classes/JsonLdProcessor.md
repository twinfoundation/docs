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

• **context?**: [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The context to compact the document to, if not provided will try and gather from the object.

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

***

### combineContexts()

> `static` **combineContexts**(`context1`, `context2`): `undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

Combine contexts.

#### Parameters

• **context1**: `undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The first JSON-LD context to combine.

• **context2**: `undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The second JSON-LD context to combine.

#### Returns

`undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The combined context.

***

### gatherContexts()

> `static` **gatherContexts**(`element`, `initial`?): `undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

Gather all the contexts from the element and it's children.

#### Parameters

• **element**

The element to gather the contexts from.

• **initial?**: [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The initial context.

#### Returns

`undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The combined contexts.

***

### removeContexts()

> `static` **removeContexts**(`context`, `match`?): `undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

Remove all the contexts that match the pattern.

#### Parameters

• **context**: `undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The context to remove the entries from.

• **match?**: [`IJsonLdContextDefinitionElement`](../type-aliases/IJsonLdContextDefinitionElement.md)[]

The element to try and match.

#### Returns

`undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The updated contexts.
