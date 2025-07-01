# Class: AuditableItemStreamClient

Client for performing auditable item stream through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IAuditableItemStreamComponent`

## Constructors

### Constructor

> **new AuditableItemStreamClient**(`config`): `AuditableItemStreamClient`

Create a new instance of AuditableItemStreamClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`AuditableItemStreamClient`

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

> **create**(`stream`, `options?`): `Promise`\<`string`\>

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
A value of 0 will disable integrity checks, 1 will be every item, or any other integer for an interval.

#### Returns

`Promise`\<`string`\>

The id of the new stream item.

#### Implementation of

`IAuditableItemStreamComponent.create`

***

### get()

> **get**(`id`, `options?`): `Promise`\<`IAuditableItemStream`\>

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

`Promise`\<`IAuditableItemStream`\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found

#### Implementation of

`IAuditableItemStreamComponent.get`

***

### update()

> **update**(`stream`): `Promise`\<`void`\>

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

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemStreamComponent.update`

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Delete the stream.

#### Parameters

##### id

`string`

The id of the stream to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemStreamComponent.remove`

***

### query()

> **query**(`conditions?`, `orderBy?`, `orderByDirection?`, `properties?`, `cursor?`, `pageSize?`): `Promise`\<`IAuditableItemStreamList`\>

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

keyof `IAuditableItemStream`[]

The properties to return, if not provided defaults to id, created and object.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<`IAuditableItemStreamList`\>

The entities, which can be partial if a limited keys list was provided.

#### Implementation of

`IAuditableItemStreamComponent.query`

***

### createEntry()

> **createEntry**(`id`, `entryObject`): `Promise`\<`string`\>

Create an entry in the stream.

#### Parameters

##### id

`string`

The id of the stream to update.

##### entryObject

`IJsonLdNodeObject`

The object for the stream as JSON-LD.

#### Returns

`Promise`\<`string`\>

The id of the created entry, if not provided.

#### Implementation of

`IAuditableItemStreamComponent.createEntry`

***

### getEntry()

> **getEntry**(`id`, `entryId`, `options?`): `Promise`\<`IAuditableItemStreamEntry`\>

Get the entry from the stream.

#### Parameters

##### id

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

`Promise`\<`IAuditableItemStreamEntry`\>

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

#### Implementation of

`IAuditableItemStreamComponent.getEntryObject`

***

### updateEntry()

> **updateEntry**(`id`, `entryId`, `entryObject`): `Promise`\<`void`\>

Update an entry in the stream.

#### Parameters

##### id

`string`

The id of the stream to update.

##### entryId

`string`

The id of the entry to update.

##### entryObject

`IJsonLdNodeObject`

The object for the entry as JSON-LD.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemStreamComponent.updateEntry`

***

### removeEntry()

> **removeEntry**(`id`, `entryId`): `Promise`\<`void`\>

Remove from the stream.

#### Parameters

##### id

`string`

The id of the stream to remove from.

##### entryId

`string`

The id of the entry to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemStreamComponent.removeEntry`

***

### getEntries()

> **getEntries**(`id`, `options?`): `Promise`\<`IAuditableItemStreamEntryList`\>

Get the entries for the stream.

#### Parameters

##### id

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

`Promise`\<`IAuditableItemStreamEntryList`\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

#### Implementation of

`IAuditableItemStreamComponent.getEntries`

***

### getEntryObjects()

> **getEntryObjects**(`id`, `options?`): `Promise`\<`IAuditableItemStreamEntryObjectList`\>

Get the entry objects for the stream.

#### Parameters

##### id

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

`Promise`\<`IAuditableItemStreamEntryObjectList`\>

The stream and entries if found.

#### Throws

NotFoundError if the stream is not found.

#### Implementation of

`IAuditableItemStreamComponent.getEntryObjects`
