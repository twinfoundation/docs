# Interface: IPnapQueryResponse

The response structure for querying manual policy negotiations.

## Properties

### body

> **body**: `object`

The body of the response.

#### items

> **items**: [`IPolicyNegotiation`](IPolicyNegotiation.md)[]

The list of policy negotiations.

#### cursor?

> `optional` **cursor**: `string`

The cursor for pagination.
