# Class: AuditableItemStreamClient

Client for performing auditable item stream through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IAuditableItemStreamComponent`

## Constructors

### new AuditableItemStreamClient()

> **new AuditableItemStreamClient**(`config`): [`AuditableItemStreamClient`](AuditableItemStreamClient.md)

Create a new instance of AuditableItemStreamClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`AuditableItemStreamClient`](AuditableItemStreamClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAuditableItemStreamComponent.CLASS_NAME`

## Methods

### create()

> **create**(`metadata`?, `entries`?, `options`?): `Promise`\<`string`\>

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

#### Returns

`Promise`\<`string`\>

The id of the new stream item.

#### Implementation of

`IAuditableItemStreamComponent.create`

***

### get()

> **get**\<`T`\>(`id`, `options`?, `responseType`?): `Promise`\<`JsonReturnType`\<`T`, `IAuditableItemStream` & `object`, `IJsonLdDocument`\>\>

Get a stream header without the entries.

#### Type Parameters

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

The response type to return, defaults to application/json.

#### Returns

`Promise`\<`JsonReturnType`\<`T`, `IAuditableItemStream` & `object`, `IJsonLdDocument`\>\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found

#### Implementation of

`IAuditableItemStreamComponent.get`

***

### update()

> **update**(`id`, `metadata`?): `Promise`\<`void`\>

Update a stream.

#### Parameters

• **id**: `string`

The id of the stream to update.

• **metadata?**: `IJsonLdNodeObject`

The metadata for the stream as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemStreamComponent.update`

***

### query()

> **query**\<`T`\>(`conditions`?, `orderBy`?, `orderByDirection`?, `properties`?, `cursor`?, `pageSize`?, `responseType`?): `Promise`\<`JsonReturnType`\<`T`, `object`, `IJsonLdDocument`\>\>

Query all the streams, will not return entries.

#### Type Parameters

• **T** *extends* `"json"` \| `"jsonld"` = `"json"`

#### Parameters

• **conditions?**: `IComparator`[]

Conditions to use in the query.

• **orderBy?**: `"created"` \| `"updated"`

The order for the results, defaults to created.

• **orderByDirection?**: `SortDirection`

The direction for the order, defaults to descending.

• **properties?**: keyof `IAuditableItemStream`[]

The properties to return, if not provided defaults to id, created and metadata.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

• **responseType?**: `T`

The response type to return, defaults to application/json.

#### Returns

`Promise`\<`JsonReturnType`\<`T`, `object`, `IJsonLdDocument`\>\>

The entities, which can be partial if a limited keys list was provided.

#### Implementation of

`IAuditableItemStreamComponent.query`

***

### createEntry()

> **createEntry**(`id`, `entryObject`): `Promise`\<`string`\>

Create an entry in the stream.

#### Parameters

• **id**: `string`

The id of the stream to update.

• **entryObject**: `IJsonLdNodeObject`

The metadata for the stream as JSON-LD.

#### Returns

`Promise`\<`string`\>

The id of the created entry, if not provided.

#### Implementation of

`IAuditableItemStreamComponent.createEntry`

***

### getEntry()

> **getEntry**\<`T`\>(`id`, `entryId`, `options`?, `responseType`?): `Promise`\<`JsonReturnType`\<`T`, `IAuditableItemStreamEntry` & `object`, `IJsonLdDocument`\>\>

Get the entry from the stream.

#### Type Parameters

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

`Promise`\<`JsonReturnType`\<`T`, `IAuditableItemStreamEntry` & `object`, `IJsonLdDocument`\>\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

#### Implementation of

`IAuditableItemStreamComponent.getEntry`

***

### getEntryObject()

> **getEntryObject**(`id`, `entryId`): `Promise`\<`IJsonLdNodeObject`\>

Get the entry object from the stream.

#### Parameters

• **id**: `string`

The id of the stream to get.

• **entryId**: `string`

The id of the stream entry to get.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

#### Implementation of

`IAuditableItemStreamComponent.getEntryObject`

***

### updateEntry()

> **updateEntry**(`id`, `entryId`, `entryObject`): `Promise`\<`void`\>

Update an entry in the stream.

#### Parameters

• **id**: `string`

The id of the stream to update.

• **entryId**: `string`

The id of the entry to update.

• **entryObject**: `IJsonLdNodeObject`

The object for the entry as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemStreamComponent.updateEntry`

***

### removeEntry()

> **removeEntry**(`id`, `entryId`): `Promise`\<`void`\>

Delete from the stream.

#### Parameters

• **id**: `string`

The id of the stream to update.

• **entryId**: `string`

The id of the entry to delete.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemStreamComponent.removeEntry`

***

### getEntries()

> **getEntries**\<`T`\>(`id`, `options`?, `responseType`?): `Promise`\<`JsonReturnType`\<`T`, `object`, `IJsonLdDocument`\>\>

Get the entries for the stream.

#### Type Parameters

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

`Promise`\<`JsonReturnType`\<`T`, `object`, `IJsonLdDocument`\>\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

#### Implementation of

`IAuditableItemStreamComponent.getEntries`

***

### getEntryObjects()

> **getEntryObjects**(`id`, `options`?): `Promise`\<`IJsonLdDocument`\>

Get the entry objects for the stream.

#### Parameters

• **id**: `string`

The id of the stream to get.

• **options?**

Additional options for the get operation.

• **options.conditions?**: `IComparator`[]

The conditions to filter the stream.

• **options.includeDeleted?**: `boolean`

Whether to include deleted entries, defaults to false.

• **options.pageSize?**: `number`

How many entries to return.

• **options.cursor?**: `string`

Cursor to use for next chunk of data.

• **options.order?**: `SortDirection`

Retrieve the entries in ascending/descending time order, defaults to Ascending.

#### Returns

`Promise`\<`IJsonLdDocument`\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

#### Implementation of

`IAuditableItemStreamComponent.getEntryObjects`
