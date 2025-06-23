# Interface: IAuditableItemGraphGetRequest

Get an auditable item graph vertex.

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

The id of the vertex to get.

***

### query?

> `optional` **query**: `object`

The query parameters.

#### includeDeleted?

> `optional` **includeDeleted**: `string` \| `boolean`

Whether to include deleted aliases, resource, edges, defaults to false.

#### includeChangesets?

> `optional` **includeChangesets**: `string` \| `boolean`

Whether to include the changesets of the vertex, defaults to false.

#### verifySignatureDepth?

> `optional` **verifySignatureDepth**: [`VerifyDepth`](../type-aliases/VerifyDepth.md)

How many signatures to verify, none, current or all, defaults to "none".
