# Interface: IPapQueryResponse

The response structure for querying policies.

## Properties

### body

> **body**: `object`

The body of the response.

#### cursor?

> `optional` **cursor**: `string`

The cursor for the next page of results, if there are more results available.

#### policies

> **policies**: `IOdrlPolicy`[]

The policies matching the query.
