# Interface: IAuditableItemStreamGetRequest

Get an auditable item stream.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept

> **accept**: `"application/json"` \| `"application/ld+json"`

***

### pathParams

> **pathParams**: `object`

The parameters from the path.

#### id

> **id**: `string`

The id of the stream to get.

***

### query?

> `optional` **query**: `object`

The parameters from the query.

#### includeEntries?

> `optional` **includeEntries**: `boolean`

Whether to include the entries, defaults to false.
The entries will be limited to the first page of entries in date descending order.
If you want to get more entries you can use the returned cursor with the get entries method.

#### includeDeleted?

> `optional` **includeDeleted**: `boolean`

Whether to include deleted entries, defaults to false.

#### verifyStream?

> `optional` **verifyStream**: `boolean`

Should the stream be verified, defaults to false.

#### verifyEntries?

> `optional` **verifyEntries**: `boolean`

Should the entries be verified, defaults to false.
