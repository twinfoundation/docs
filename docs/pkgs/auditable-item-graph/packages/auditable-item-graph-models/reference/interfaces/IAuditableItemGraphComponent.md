# Interface: IAuditableItemGraphComponent

Interface describing an auditable item graph contract.

## Extends

- `IComponent`

## Methods

### create()

> **create**(`metadata`?, `aliases`?, `resources`?, `edges`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`string`\>

Create a new graph vertex.

#### Parameters

• **metadata?**: `IJsonLdNodeObject`

The metadata for the vertex as JSON-LD.

• **aliases?**: `object`[]

Alternative aliases that can be used to identify the vertex.

• **resources?**: `object`[]

The resources attached to the vertex.

• **edges?**: `object`[]

The edges connected to the vertex.

• **userIdentity?**: `string`

The identity to create the auditable item graph operation with.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`string`\>

The id of the new graph item.

***

### update()

> **update**(`id`, `metadata`?, `aliases`?, `resources`?, `edges`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`void`\>

Update a graph vertex.

#### Parameters

• **id**: `string`

The id of the vertex to update.

• **metadata?**: `IJsonLdNodeObject`

The metadata for the vertex as JSON-LD.

• **aliases?**: `object`[]

Alternative aliases that can be used to identify the vertex.

• **resources?**: `object`[]

The resources attached to the vertex.

• **edges?**: `object`[]

The edges connected to the vertex.

• **userIdentity?**: `string`

The identity to create the auditable item graph operation with.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### get()

> **get**\<`T`\>(`id`, `options`?, `responseType`?): `Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, [`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md) & `object`, `IJsonLdDocument`\>\>

Get a graph vertex.

#### Type parameters

• **T** *extends* `"json"` \| `"jsonld"` = `"json"`

#### Parameters

• **id**: `string`

The id of the vertex to get.

• **options?**

Additional options for the get operation.

• **options.includeDeleted?**: `boolean`

Whether to include deleted aliases, resource, edges, defaults to false.

• **options.includeChangesets?**: `boolean`

Whether to include the changesets of the vertex, defaults to false.

• **options.verifySignatureDepth?**: [`VerifyDepth`](../type-aliases/VerifyDepth.md)

How many signatures to verify, defaults to "none".

• **responseType?**: `T`

The response type to return, defaults to application/json.

#### Returns

`Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, [`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md) & `object`, `IJsonLdDocument`\>\>

The vertex if found.

#### Throws

NotFoundError if the vertex is not found.

***

### removeImmutable()

> **removeImmutable**(`id`, `nodeIdentity`?): `Promise`\<`void`\>

Remove the immutable storage for an item.

#### Parameters

• **id**: `string`

The id of the vertex to remove the storage from.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the vertex is not found.

***

### query()

> **query**\<`T`\>(`options`?, `orderBy`?, `orderByDirection`?, `properties`?, `cursor`?, `pageSize`?, `responseType`?): `Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, `object`, `IJsonLdDocument`\>\>

Query the graph for vertices.

#### Type parameters

• **T** *extends* `"json"` \| `"jsonld"` = `"json"`

#### Parameters

• **options?**

The query options.

• **options.id?**: `string`

The optional id to look for.

• **options.idMode?**: `"both"` \| `"id"` \| `"alias"`

Look in id, alias or both, defaults to both.

• **orderBy?**: `"created"` \| `"updated"`

The order for the results, defaults to created.

• **orderByDirection?**: `SortDirection`

The direction for the order, defaults to descending.

• **properties?**: keyof [`IAuditableItemGraphVertex`](IAuditableItemGraphVertex.md)[]

The properties to return, if not provided defaults to id, created, aliases and metadata.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

• **responseType?**: `T`

The response type to return, defaults to application/json.

#### Returns

`Promise`\<[`JsonReturnType`](../type-aliases/JsonReturnType.md)\<`T`, `object`, `IJsonLdDocument`\>\>

The entities, which can be partial if a limited keys list was provided.
