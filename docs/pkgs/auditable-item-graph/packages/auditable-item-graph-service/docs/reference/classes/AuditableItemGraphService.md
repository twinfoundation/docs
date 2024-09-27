# Class: AuditableItemGraphService

Class for performing auditable item graph operations.

## Implements

- `IAuditableItemGraphComponent`

## Constructors

### new AuditableItemGraphService()

> **new AuditableItemGraphService**(`options`?): [`AuditableItemGraphService`](AuditableItemGraphService.md)

Create a new instance of AuditableItemGraphService.

#### Parameters

• **options?**

The dependencies for the auditable item graph connector.

• **options.vaultConnectorType?**: `string`

The vault connector type, defaults to "vault".

• **options.vertexEntityStorageType?**: `string`

The entity storage for vertices, defaults to "auditable-item-graph-vertex".

• **options.immutableStorageType?**: `string`

The immutable storage for audit trail, defaults to "auditable-item-graph".

• **options.changesetEntityStorageType?**: `string`

The entity storage for changesets, defaults to "auditable-item-graph-changeset".

• **options.identityConnectorType?**: `string`

The identity connector type, defaults to "identity".

• **options.config?**: [`IAuditableItemGraphServiceConfig`](../interfaces/IAuditableItemGraphServiceConfig.md)

The configuration for the connector.

#### Returns

[`AuditableItemGraphService`](AuditableItemGraphService.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"aig"`

The namespace for the service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAuditableItemGraphComponent.CLASS_NAME`

## Methods

### create()

> **create**(`vertexObject`?, `aliases`?, `resources`?, `edges`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`string`\>

Create a new graph vertex.

#### Parameters

• **vertexObject?**: `IJsonLdNodeObject`

The object for the vertex as JSON-LD.

• **aliases?**: `object`[]

Alternative aliases that can be used to identify the vertex.

• **resources?**: `object`[]

The resources attached to the vertex.

• **edges?**: `object`[]

The edges connected to the vertex.

• **userIdentity?**: `string`

The identity to create the auditable item graph operation with.

• **nodeIdentity?**: `string`

The node identity to include in the auditable item graph.

#### Returns

`Promise`\<`string`\>

The id of the new graph item.

#### Implementation of

`IAuditableItemGraphComponent.create`

***

### get()

> **get**(`id`, `options`?): `Promise`\<`IAuditableItemGraphVertex`\>

Get a graph vertex.

#### Parameters

• **id**: `string`

The id of the vertex to get.

• **options?**

Additional options for the get operation.

• **options.includeDeleted?**: `boolean`

Whether to include deleted/updated aliases, resource, edges, defaults to false.

• **options.includeChangesets?**: `boolean`

Whether to include the changesets of the vertex, defaults to false.

• **options.verifySignatureDepth?**: `VerifyDepth`

How many signatures to verify, defaults to "none".

#### Returns

`Promise`\<`IAuditableItemGraphVertex`\>

The vertex if found.

#### Throws

NotFoundError if the vertex is not found.

#### Implementation of

`IAuditableItemGraphComponent.get`

***

### update()

> **update**(`id`, `vertexObject`?, `aliases`?, `resources`?, `edges`?, `userIdentity`?, `nodeIdentity`?): `Promise`\<`void`\>

Update a graph vertex.

#### Parameters

• **id**: `string`

The id of the vertex to update.

• **vertexObject?**: `IJsonLdNodeObject`

The object for the vertex.

• **aliases?**: `object`[]

Alternative aliases that can be used to identify the vertex.

• **resources?**: `object`[]

The resources attached to the vertex.

• **edges?**: `object`[]

The edges connected to the vertex.

• **userIdentity?**: `string`

The identity to create the auditable item graph operation with.

• **nodeIdentity?**: `string`

The node identity to include in the auditable item graph.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemGraphComponent.update`

***

### removeImmutable()

> **removeImmutable**(`id`, `nodeIdentity`?): `Promise`\<`void`\>

Remove the immutable storage for an item.

#### Parameters

• **id**: `string`

The id of the vertex to get.

• **nodeIdentity?**: `string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the vertex is not found.

#### Implementation of

`IAuditableItemGraphComponent.removeImmutable`

***

### query()

> **query**(`options`?, `orderBy`?, `orderByDirection`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<`IAuditableItemGraphVertexList`\>

Query the graph for vertices.

#### Parameters

• **options?**

The query options.

• **options.id?**: `string`

The optional id to look for.

• **options.idMode?**: `"both"` \| `"id"` \| `"alias"`

Look in id, alias or both, defaults to both.

• **orderBy?**: `"dateCreated"` \| `"dateModified"`

The order for the results, defaults to created.

• **orderByDirection?**: `SortDirection`

The direction for the order, defaults to desc.

• **properties?**: keyof `IAuditableItemGraphVertex`[]

The properties to return, if not provided defaults to id, created, aliases and object.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

#### Returns

`Promise`\<`IAuditableItemGraphVertexList`\>

The entities, which can be partial if a limited keys list was provided.

#### Implementation of

`IAuditableItemGraphComponent.query`
