# Interface: IAuditableItemStreamListRequest

Get the a list of the streams.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### Accept

> **Accept**: `"application/json"` \| `"application/ld+json"`

***

### query?

> `optional` **query**: `object`

The query parameters.

#### conditions?

> `optional` **conditions**: `string`

The conditions to filter the streams, consist of property|comparison|value comma separated.

#### orderBy?

> `optional` **orderBy**: `"created"` \| `"updated"`

The order for the results, default to created.

#### orderByDirection?

> `optional` **orderByDirection**: `SortDirection`

The direction for the order, defaults to desc.

#### properties?

> `optional` **properties**: `string`

The properties to return as a comma separated list, defaults to "id,metadata".

#### cursor?

> `optional` **cursor**: `string`

The optional cursor to get next chunk.

#### pageSize?

> `optional` **pageSize**: `number`

The maximum number of entities in a page.
