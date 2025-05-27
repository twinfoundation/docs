# Class: JsonLdProcessor

JSON-LD Processor.

## Constructors

### Constructor

> **new JsonLdProcessor**(): `JsonLdProcessor`

#### Returns

`JsonLdProcessor`

## Methods

### setDocumentLoader()

> `static` **setDocumentLoader**(`documentLoader`): `void`

The document loader to use.

#### Parameters

##### documentLoader

(`url`) => `Promise`\<`RemoteDocument`\>

The document loader to use.

#### Returns

`void`

***

### getDocumentLoader()

> `static` **getDocumentLoader**(): (`url`) => `Promise`\<`RemoteDocument`\>

The document loader to use for retrieving JSON-LD documents.

#### Returns

The document loader.

> (`url`): `Promise`\<`RemoteDocument`\>

##### Parameters

###### url

`string`

##### Returns

`Promise`\<`RemoteDocument`\>

***

### setCacheLimit()

> `static` **setCacheLimit**(`cacheLimitMs`): `void`

Set the cache time limit for documents.

#### Parameters

##### cacheLimitMs

`number`

The cache limit in milliseconds.

#### Returns

`void`

***

### getCacheLimit()

> `static` **getCacheLimit**(): `number`

Get the cache limit for documents.

#### Returns

`number`

The document loader.

***

### setRedirects()

> `static` **setRedirects**(`redirects`): `void`

Set the global redirects for JSON-LD, use addRedirect for default handling.

#### Parameters

##### redirects

`object`[]

The redirects to use.

#### Returns

`void`

***

### getRedirects()

> `static` **getRedirects**(): `object`[]

Get the global redirects for JSON-LD.

#### Returns

`object`[]

The registered redirects.

***

### compact()

> `static` **compact**\<`T`\>(`document`, `context?`, `options?`): `Promise`\<`T`\>

Compact a document according to a particular context.

#### Type Parameters

##### T

`T`

#### Parameters

##### document

`T`

The JSON-LD document to compact.

##### context?

[`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The context to compact the document to, if not provided will use the one in the document.

##### options?

The options for compacting the document.

###### itemListOverride

`boolean`

Whether to override the itemListElement context with a set, defaults to true.

#### Returns

`Promise`\<`T`\>

The compacted JSON-LD document.

***

### expand()

> `static` **expand**\<`T`\>(`compacted`): `Promise`\<[`IJsonLdNodeObject`](../interfaces/IJsonLdNodeObject.md)[]\>

Expand a document, removing its context.

#### Type Parameters

##### T

`T`

#### Parameters

##### compacted

`T`

The compacted JSON-LD document to expand.

#### Returns

`Promise`\<[`IJsonLdNodeObject`](../interfaces/IJsonLdNodeObject.md)[]\>

The expanded JSON-LD document.

***

### canonize()

> `static` **canonize**\<`T`\>(`document`, `options?`): `Promise`\<`string`\>

Canonize a document.

#### Type Parameters

##### T

`T` *extends* [`IJsonLdNodeObject`](../interfaces/IJsonLdNodeObject.md)

#### Parameters

##### document

`T`

The document to canonize.

##### options?

The options for canonization.

###### algorithm?

`"URDNA2015"` \| `"URGNA2012"`

The algorithm to use for canonization, defaults to URDNA2015.

#### Returns

`Promise`\<`string`\>

The canonized document.

***

### addRedirect()

> `static` **addRedirect**(`from`, `to`): `void`

Add a redirect to use during document resolution.

#### Parameters

##### from

`RegExp`

The URL to redirect from.

##### to

`string`

The URL to redirect to.

#### Returns

`void`

***

### combineContexts()

> `static` **combineContexts**(`context1`, `context2`): `undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

Combine contexts.

#### Parameters

##### context1

The first JSON-LD context to combine.

`undefined` | [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

##### context2

The second JSON-LD context to combine.

`undefined` | [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

#### Returns

`undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The combined context.

***

### gatherContexts()

> `static` **gatherContexts**\<`T`\>(`element`, `initial?`): `undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

Gather all the contexts from the element and it's children.

#### Type Parameters

##### T

`T`

#### Parameters

##### element

`T`

The element to gather the contexts from.

##### initial?

[`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The initial context.

#### Returns

`undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The combined contexts.

***

### removeContexts()

> `static` **removeContexts**(`context`, `match?`): `undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

Remove all the contexts that match the pattern.

#### Parameters

##### context

The context to remove the entries from.

`undefined` | [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

##### match?

[`IJsonLdContextDefinitionElement`](../type-aliases/IJsonLdContextDefinitionElement.md)[]

The element to try and match.

#### Returns

`undefined` \| [`IJsonLdContextDefinitionRoot`](../type-aliases/IJsonLdContextDefinitionRoot.md)

The updated contexts.

***

### documentCacheAdd()

> `static` **documentCacheAdd**(`url`, `ldContext`): `Promise`\<`void`\>

Add a context directly to the document loader cache.

#### Parameters

##### url

`string`

The url the ld context is for.

##### ldContext

`unknown`

The context to add.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### documentCacheRemove()

> `static` **documentCacheRemove**(`url`): `Promise`\<`void`\>

Remove a context from the document loader cache.

#### Parameters

##### url

`string`

The url the ld context is for.

#### Returns

`Promise`\<`void`\>

Nothing.
