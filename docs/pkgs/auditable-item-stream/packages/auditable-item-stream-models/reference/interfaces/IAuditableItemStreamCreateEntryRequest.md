# Interface: IAuditableItemStreamCreateEntryRequest

Append to an auditable item stream.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### id

> **id**: `string`

The id of the stream to create the entry in.

***

### body

> **body**: `object`

The data to be used in the stream.

#### object

> **object**: `IJsonLdNodeObject`

The object to be used for the entry in the stream as JSON-LD.
