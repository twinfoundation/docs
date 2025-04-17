# Interface: IAuditableItemStreamComponent

Interface describing an auditable item stream component.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`stream`, `options?`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`string`\>

Create a new stream.

#### Parameters

##### stream

The stream to create.

###### annotationObject?

`IJsonLdNodeObject`

The object for the stream as JSON-LD.

###### entries?

`object`[]

Entries to store in the stream.

##### options?

Options for creating the stream.

###### immutableInterval?

`number`

After how many entries do we add immutable checks, defaults to service configured value.
A value of 0 will disable immutable checks, 1 will be every item, or any other integer for an interval.

##### userIdentity?

`string`

The identity to create the auditable item stream operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`string`\>

The id of the new stream item.

***

### update()

> **update**(`stream`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`void`\>

Update a stream.

#### Parameters

##### stream

The stream to update.

###### id

`string`

The id of the stream to update.

###### annotationObject?

`IJsonLdNodeObject`

The object for the stream as JSON-LD.

##### userIdentity?

`string`

The identity to create the auditable item stream operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### get()

> **get**(`id`, `options?`): `Promise`\<[`IAuditableItemStream`](IAuditableItemStream.md)\>

Get a stream header without the entries.

#### Parameters

##### id

`string`

The id of the stream to get.

##### options?

Additional options for the get operation.

###### includeEntries?

`boolean`

Whether to include the entries, defaults to false.

###### includeDeleted?

`boolean`

Whether to include deleted entries, defaults to false.

###### verifyStream?

`boolean`

Should the stream be verified, defaults to false.

###### verifyEntries?

`boolean`

Should the entries be verified, defaults to false.

#### Returns

`Promise`\<[`IAuditableItemStream`](IAuditableItemStream.md)\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

***

### remove()

> **remove**(`id`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`void`\>

Delete the stream.

#### Parameters

##### id

`string`

The id of the stream to remove.

##### userIdentity?

`string`

The identity to create the auditable item stream operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`conditions?`, `orderBy?`, `orderByDirection?`, `properties?`, `cursor?`, `pageSize?`): `Promise`\<[`IAuditableItemStreamList`](IAuditableItemStreamList.md)\>

Query all the streams, will not return entries.

#### Parameters

##### conditions?

`IComparator`[]

Conditions to use in the query.

##### orderBy?

The order for the results, defaults to created.

`"dateCreated"` | `"dateModified"`

##### orderByDirection?

`SortDirection`

The direction for the order, defaults to descending.

##### properties?

keyof [`IAuditableItemStream`](IAuditableItemStream.md)[]

The properties to return, if not provided defaults to id, dateCreated, dateModified and annotationObject.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<[`IAuditableItemStreamList`](IAuditableItemStreamList.md)\>

The entities, which can be partial if a limited keys list was provided.

***

### createEntry()

> **createEntry**(`streamId`, `entryObject`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`string`\>

Create an entry in the stream.

#### Parameters

##### streamId

`string`

The id of the stream to create the entry in.

##### entryObject

`IJsonLdNodeObject`

The object for the stream as JSON-LD.

##### userIdentity?

`string`

The identity to create the auditable item stream operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`string`\>

The id of the created entry, if not provided.

***

### getEntry()

> **getEntry**(`streamId`, `entryId`, `options?`): `Promise`\<[`IAuditableItemStreamEntry`](IAuditableItemStreamEntry.md)\>

Get the entry from the stream.

#### Parameters

##### streamId

`string`

The id of the stream to get.

##### entryId

`string`

The id of the stream entry to get.

##### options?

Additional options for the get operation.

###### verifyEntry?

`boolean`

Should the entry be verified, defaults to false.

#### Returns

`Promise`\<[`IAuditableItemStreamEntry`](IAuditableItemStreamEntry.md)\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

***

### getEntryObject()

> **getEntryObject**(`id`, `entryId`): `Promise`\<`IJsonLdNodeObject`\>

Get the entry object from the stream.

#### Parameters

##### id

`string`

The id of the stream to get.

##### entryId

`string`

The id of the stream entry to get.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

***

### updateEntry()

> **updateEntry**(`streamId`, `entryId`, `entryObject`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`void`\>

Update an entry in the stream.

#### Parameters

##### streamId

`string`

The id of the stream to update.

##### entryId

`string`

The id of the entry to update.

##### entryObject

`IJsonLdNodeObject`

The object for the entry as JSON-LD.

##### userIdentity?

`string`

The identity to create the auditable item stream operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### removeEntry()

> **removeEntry**(`streamId`, `entryId`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`void`\>

Remove from the stream.

#### Parameters

##### streamId

`string`

The id of the stream to remove from.

##### entryId

`string`

The id of the entry to delete.

##### userIdentity?

`string`

The identity to create the auditable item stream operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### getEntries()

> **getEntries**(`streamId`, `options?`): `Promise`\<[`IAuditableItemStreamEntryList`](IAuditableItemStreamEntryList.md)\>

Get the entries for the stream.

#### Parameters

##### streamId

`string`

The id of the stream to get.

##### options?

Additional options for the get operation.

###### conditions?

`IComparator`[]

The conditions to filter the stream.

###### includeDeleted?

`boolean`

Whether to include deleted entries, defaults to false.

###### verifyEntries?

`boolean`

Should the entries be verified, defaults to false.

###### entryObjects?

`boolean`

Return just the embedded entry objects, defaults to false.

###### pageSize?

`number`

How many entries to return.

###### cursor?

`string`

Cursor to use for next chunk of data.

###### order?

`SortDirection`

Retrieve the entries in ascending/descending time order, defaults to Ascending.

#### Returns

`Promise`\<[`IAuditableItemStreamEntryList`](IAuditableItemStreamEntryList.md)\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

***

### getEntryObjects()

> **getEntryObjects**(`streamId`, `options?`): `Promise`\<[`IAuditableItemStreamEntryObjectList`](IAuditableItemStreamEntryObjectList.md)\>

Get the entry objects for the stream.

#### Parameters

##### streamId

`string`

The id of the stream to get.

##### options?

Additional options for the get operation.

###### conditions?

`IComparator`[]

The conditions to filter the stream.

###### includeDeleted?

`boolean`

Whether to include deleted entries, defaults to false.

###### pageSize?

`number`

How many entries to return.

###### cursor?

`string`

Cursor to use for next chunk of data.

###### order?

`SortDirection`

Retrieve the entries in ascending/descending time order, defaults to Ascending.

#### Returns

`Promise`\<[`IAuditableItemStreamEntryObjectList`](IAuditableItemStreamEntryObjectList.md)\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

***

### removeVerifiable()

> **removeVerifiable**(`streamId`, `nodeIdentity?`): `Promise`\<`void`\>

Remove the verifiable storage for the stream and entries.

#### Parameters

##### streamId

`string`

The id of the stream to remove the storage from.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the vertex is not found.
