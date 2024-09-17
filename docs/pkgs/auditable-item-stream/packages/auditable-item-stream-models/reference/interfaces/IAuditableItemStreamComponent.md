# Interface: IAuditableItemStreamComponent

Interface describing an auditable item stream contract.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`metadata`?, `entries`?, `options`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`string`\>

Create a new stream.

#### Parameters

• **metadata?**: `IJsonLdNodeObject`

The metadata for the stream as JSON-LD.

• **entries?**: `object`[]

Entries to store in the stream.

• **options?**

Options for creating the stream.

• **options.immutableInterval?**: `number`

After how many entries do we add immutable checks, defaults to service configured value.
A value of 0 will disable immutable checks, 1 will be every item, or any other integer for an interval.

• **userIdentity?**: `string`

The identity to create the auditable item stream operation with.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`string`\>

The id of the new stream item.

***

### update()

> **update**(`id`, `metadata`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`void`\>

Update a stream.

#### Parameters

• **id**: `string`

The id of the stream to update.

• **metadata?**: `IJsonLdNodeObject`

The metadata for the stream as JSON-LD.

• **userIdentity?**: `string`

The identity to create the auditable item stream operation with.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### get()

> **get**\<`T`\>(`id`, `options`?, `responseType`?): `Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, [`IAuditableItemStream`](IAuditableItemStream.md) & `object`, `IJsonLdDocument`\>\>

Get a stream header without the entries.

#### Type parameters

• **T** *extends* `"json"` \| `"jsonld"` = `"json"`

#### Parameters

• **id**: `string`

The id of the stream to get.

• **options?**

Additional options for the get operation.

• **options.includeEntries?**: `boolean`

Whether to include the entries, defaults to false.

• **options.includeDeleted?**: `boolean`

Whether to include deleted entries, defaults to false.

• **options.verifyStream?**: `boolean`

Should the stream be verified, defaults to false.

• **options.verifyEntries?**: `boolean`

Should the entries be verified, defaults to false.

• **responseType?**: `T`

Should the response be JSON-LD.

#### Returns

`Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, [`IAuditableItemStream`](IAuditableItemStream.md) & `object`, `IJsonLdDocument`\>\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

***

### query()

> **query**\<`T`\>(`conditions`?, `orderBy`?, `orderByDirection`?, `properties`?, `cursor`?, `pageSize`?, `responseType`?): `Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, `object`, `IJsonLdDocument`\>\>

Query all the streams, will not return entries.

#### Type parameters

• **T** *extends* `"json"` \| `"jsonld"` = `"json"`

#### Parameters

• **conditions?**: `IComparator`[]

Conditions to use in the query.

• **orderBy?**: `"created"` \| `"updated"`

The order for the results, defaults to created.

• **orderByDirection?**: `SortDirection`

The direction for the order, defaults to descending.

• **properties?**: keyof [`IAuditableItemStream`](IAuditableItemStream.md)[]

The properties to return, if not provided defaults to id, created and metadata.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

• **responseType?**: `T`

The response type to return, defaults to application/json.

#### Returns

`Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, `object`, `IJsonLdDocument`\>\>

The entities, which can be partial if a limited keys list was provided.

***

### createEntry()

> **createEntry**(`id`, `object`, `userIdentity`?, `nodeIdentity`?): `Promise`\<`string`\>

Create an entry in the stream.

#### Parameters

• **id**: `string`

The id of the stream to update.

• **object**: `IJsonLdNodeObject`

The object for the stream as JSON-LD.

• **userIdentity?**: `string`

The identity to create the auditable item stream operation with.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`string`\>

The id of the created entry, if not provided.

***

### getEntry()

> **getEntry**\<`T`\>(`id`, `entryId`, `options`?, `responseType`?): `Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, [`IAuditableItemStreamEntry`](IAuditableItemStreamEntry.md) & `object`, `IJsonLdDocument`\>\>

Get the entry from the stream.

#### Type parameters

• **T** *extends* `"json"` \| `"jsonld"` = `"json"`

#### Parameters

• **id**: `string`

The id of the stream to get.

• **entryId**: `string`

The id of the stream entry to get.

• **options?**

Additional options for the get operation.

• **options.verifyEntry?**: `boolean`

Should the entry be verified, defaults to false.

• **responseType?**: `T`

The response type to return, defaults to application/json.

#### Returns

`Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, [`IAuditableItemStreamEntry`](IAuditableItemStreamEntry.md) & `object`, `IJsonLdDocument`\>\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

***

### updateEntry()

> **updateEntry**(`id`, `entryId`, `entryObject`, `userIdentity`?, `nodeIdentity`?): `Promise`\<`void`\>

Update an entry in the stream.

#### Parameters

• **id**: `string`

The id of the stream to update.

• **entryId**: `string`

The id of the entry to update.

• **entryObject**: `IJsonLdNodeObject`

The object for the entry as JSON-LD.

• **userIdentity?**: `string`

The identity to create the auditable item stream operation with.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### removeEntry()

> **removeEntry**(`id`, `entryId`, `identity`?, `nodeIdentity`?): `Promise`\<`void`\>

Delete from the stream.

#### Parameters

• **id**: `string`

The id of the stream to update.

• **entryId**: `string`

The id of the entry to delete.

• **identity?**: `string`

The identity to create the auditable item stream operation with.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### getEntries()

> **getEntries**\<`T`\>(`id`, `options`?, `responseType`?): `Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, `object`, `IJsonLdDocument`\>\>

Get the entries for the stream.

#### Type parameters

• **T** *extends* `"json"` \| `"jsonld"` = `"json"`

#### Parameters

• **id**: `string`

The id of the stream to get.

• **options?**

Additional options for the get operation.

• **options.conditions?**: `IComparator`[]

The conditions to filter the stream.

• **options.includeDeleted?**: `boolean`

Whether to include deleted entries, defaults to false.

• **options.verifyEntries?**: `boolean`

Should the entries be verified, defaults to false.

• **options.pageSize?**: `number`

How many entries to return.

• **options.cursor?**: `string`

Cursor to use for next chunk of data.

• **options.order?**: `SortDirection`

Retrieve the entries in ascending/descending time order, defaults to Ascending.

• **responseType?**: `T`

The response type to return, defaults to application/json.

#### Returns

`Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, `object`, `IJsonLdDocument`\>\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

***

### removeImmutable()

> **removeImmutable**(`id`, `nodeIdentity`?): `Promise`\<`void`\>

Remove the immutable storage for the stream and entries.

#### Parameters

• **id**: `string`

The id of the stream to remove the storage from.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the vertex is not found.
