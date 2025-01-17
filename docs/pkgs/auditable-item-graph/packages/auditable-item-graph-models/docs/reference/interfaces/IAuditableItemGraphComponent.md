# Interface: IAuditableItemGraphComponent

Interface describing an auditable item graph contract.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`annotationObject`?, `aliases`?, `resources`?, `edges`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`string`\>

Create a new graph vertex.

#### Parameters

##### annotationObject?

`IJsonLdNodeObject`

The annotation object for the vertex as JSON-LD.

##### aliases?

`object`[]

Alternative aliases that can be used to identify the vertex.

##### resources?

`object`[]

The resources attached to the vertex.

##### edges?

`object`[]

The edges connected to the vertex.

##### userIdentity?

`string`

The identity to create the auditable item graph operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`string`\>

The id of the new graph item.

***

### update()

> **update**(`id`, `annotationObject`?, `aliases`?, `resources`?, `edges`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`void`\>

Update a graph vertex.

#### Parameters

##### id

`string`

The id of the vertex to update.

##### annotationObject?

`IJsonLdNodeObject`

The annotation object for the vertex as JSON-LD.

##### aliases?

`object`[]

Alternative aliases that can be used to identify the vertex.

##### resources?

`object`[]

The resources attached to the vertex.

##### edges?

`object`[]

The edges connected to the vertex.

##### userIdentity?

`string`

The identity to create the auditable item graph operation with.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### get()

> **get**(`id`, `options`?): `Promise`\<[`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md)\>

Get a graph vertex.

#### Parameters

##### id

`string`

The id of the vertex to get.

##### options?

Additional options for the get operation.

###### includeDeleted

`boolean`

Whether to include deleted aliases, resource, edges, defaults to false.

###### includeChangesets

`boolean`

Whether to include the changesets of the vertex, defaults to false.

###### verifySignatureDepth

[`VerifyDepth`](../type-aliases/VerifyDepth.md)

How many signatures to verify, defaults to "none".

#### Returns

`Promise`\<[`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md)\>

The vertex if found.

#### Throws

NotFoundError if the vertex is not found.

***

### removeImmutable()

> **removeImmutable**(`id`, `nodeIdentity`?): `Promise`\<`void`\>

Remove the immutable storage for an item.

#### Parameters

##### id

`string`

The id of the vertex to remove the storage from.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the vertex is not found.

***

### query()

> **query**(`options`?, `conditions`?, `orderBy`?, `orderByDirection`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<[`IAuditableItemGraphVertexList`](IAuditableItemGraphVertexList.md)\>

Query the graph for vertices.

#### Parameters

##### options?

The query options.

###### id

`string`

The optional id to look for.

###### idMode

`"both"` \| `"id"` \| `"alias"`

Look in id, alias or both, defaults to both.

##### conditions?

`IComparator`[]

Conditions to use in the query.

##### orderBy?

The order for the results, defaults to dateCreated.

`"dateCreated"` | `"dateModified"`

##### orderByDirection?

`SortDirection`

The direction for the order, defaults to descending.

##### properties?

keyof [`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md)[]

The properties to return, if not provided defaults to id, dateCreated, aliases and object.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<[`IAuditableItemGraphVertexList`](IAuditableItemGraphVertexList.md)\>

The entities, which can be partial if a limited keys list was provided.
