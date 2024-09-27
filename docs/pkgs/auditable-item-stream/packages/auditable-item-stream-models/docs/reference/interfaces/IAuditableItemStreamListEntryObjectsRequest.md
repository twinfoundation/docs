# Interface: IAuditableItemStreamListEntryObjectsRequest

Get an auditable item stream entry objects.

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

The query parameters.

#### conditions?

> `optional` **conditions**: `string`

The conditions to filter the stream, consist of property|comparison|value comma separated.

#### includeDeleted?

> `optional` **includeDeleted**: `boolean`

Whether to include deleted entries, defaults to false.

#### order?

> `optional` **order**: `SortDirection`

Retrieve the entries in ascending/descending time order, defaults to Ascending.

#### pageSize?

> `optional` **pageSize**: `number`

How many entries to return.

#### cursor?

> `optional` **cursor**: `string`

Cursor to use for next chunk of data.
