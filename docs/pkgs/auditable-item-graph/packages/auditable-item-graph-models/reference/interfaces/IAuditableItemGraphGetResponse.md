# Interface: IAuditableItemGraphGetResponse

Response to getting an auditable item graph vertex.

## Properties

### body

> **body**: `object`

The response body.

#### verified?

> `optional` **verified**: `boolean`

Whether the vertex has been verified.

#### verification?

> `optional` **verification**: `object`

The verification changes including any failure information.

##### Index signature

 \[`epoch`: `number`\]: `object`

#### vertex

> **vertex**: [`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md)

The vertex data.
