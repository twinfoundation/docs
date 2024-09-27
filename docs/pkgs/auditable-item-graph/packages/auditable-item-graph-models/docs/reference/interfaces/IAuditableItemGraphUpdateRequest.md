# Interface: IAuditableItemGraphUpdateRequest

Update an auditable item graph vertex.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### id

> **id**: `string`

The id of the vertex to update.

***

### body?

> `optional` **body**: `object`

The data to be used in the vertex.

#### vertexObject?

> `optional` **vertexObject**: `IJsonLdNodeObject`

The object to be used in the vertex as JSON-LD.

#### aliases?

> `optional` **aliases**: `object`[]

Alternative aliases that can be used to identify the vertex.

#### resources?

> `optional` **resources**: `object`[]

The resources attached to the vertex.

#### edges?

> `optional` **edges**: `object`[]

The edges connected to the vertex.
