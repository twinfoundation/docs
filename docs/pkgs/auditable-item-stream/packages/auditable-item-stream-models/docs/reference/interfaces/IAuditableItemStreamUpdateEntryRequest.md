# Interface: IAuditableItemStreamUpdateEntryRequest

Update an entry in the auditable item stream.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### id

> **id**: `string`

The id of the stream to update the entry in.

#### entryId

> **entryId**: `string`

The id of the entry to update.

***

### body

> **body**: `object`

The data to be used in the entry.

#### entryObject

> **entryObject**: `IJsonLdNodeObject`

The object to be used in the entry as JSON-LD.
