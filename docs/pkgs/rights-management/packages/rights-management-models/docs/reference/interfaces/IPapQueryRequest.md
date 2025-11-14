# Interface: IPapQueryRequest

The request structure for querying policies.

## Properties

### query?

> `optional` **query**: `object`

The query parameters of the request.

#### conditions?

> `optional` **conditions**: `string`

The condition for the query.

#### limit?

> `optional` **limit**: `string`

Limit the number of entities to return.

#### cursor?

> `optional` **cursor**: `string`

The cursor to get next chunk of data, returned in previous response.
