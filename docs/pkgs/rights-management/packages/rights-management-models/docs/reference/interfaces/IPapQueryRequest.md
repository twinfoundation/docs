# Interface: IPapQueryRequest

The request structure for querying policies.

## Properties

### query?

> `optional` **query**: `object`

The query parameters of the request.

#### conditions?

> `optional` **conditions**: `string`

The condition for the query.

#### pageSize?

> `optional` **pageSize**: `string`

The number of entries to return per page.

#### cursor?

> `optional` **cursor**: `string`

The cursor to get next chunk of data, returned in previous response.
