# Interface: IBlobStorageListRequest

Query the entries from blob storage.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept

> **accept**: `"application/json"` \| `"application/ld+json"`

***

### query?

> `optional` **query**: `object`

The parameters from the query.

#### conditions?

> `optional` **conditions**: `string`

The condition for the query as JSON version of EntityCondition type.

#### orderBy?

> `optional` **orderBy**: `"dateCreated"` \| `"dateModified"`

The order for the results, default to created.

#### orderByDirection?

> `optional` **orderByDirection**: `SortDirection`

The direction for the order, defaults to desc.

#### pageSize?

> `optional` **pageSize**: `string` \| `number`

The number of entries to return per page.

#### cursor?

> `optional` **cursor**: `string`

The cursor to get next chunk of data, returned in previous response.
