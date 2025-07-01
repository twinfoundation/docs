# Interface: IEntityStorageListRequest

Query the entries from entity storage.

## Properties

### query?

> `optional` **query**: `object`

The parameters from the query.

#### conditions?

> `optional` **conditions**: `string`

The condition for the query as JSON version of EntityCondition type.

#### orderBy?

> `optional` **orderBy**: `string`

The order property for the results.

#### orderByDirection?

> `optional` **orderByDirection**: `SortDirection`

The direction for the order, defaults to desc.

#### properties?

> `optional` **properties**: `string`

The properties to return in the response as a comma separated list, by default returns all properties.

#### pageSize?

> `optional` **pageSize**: `string` \| `number`

The number of entries to return per page.

#### cursor?

> `optional` **cursor**: `string`

The cursor to get next chunk of data, returned in previous response.
