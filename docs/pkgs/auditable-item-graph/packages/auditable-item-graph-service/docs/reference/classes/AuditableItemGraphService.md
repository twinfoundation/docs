# Class: AuditableItemGraphService

Class for performing auditable item graph operations.

## Implements

- `IAuditableItemGraphComponent`

## Constructors

### Constructor

> **new AuditableItemGraphService**(`options?`): `AuditableItemGraphService`

Create a new instance of AuditableItemGraphService.

#### Parameters

##### options?

[`IAuditableItemGraphServiceConstructorOptions`](../interfaces/IAuditableItemGraphServiceConstructorOptions.md)

The dependencies for the auditable item graph connector.

#### Returns

`AuditableItemGraphService`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"aig"`

The namespace for the service.

***

### NAMESPACE\_CHANGESET

> `readonly` `static` **NAMESPACE\_CHANGESET**: `string` = `"changeset"`

The namespace for the service changeset.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAuditableItemGraphComponent.CLASS_NAME`

## Methods

### create()

> **create**(`vertex`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`string`\>

Create a new graph vertex.

#### Parameters

##### vertex

The vertex to create.

###### annotationObject?

`IJsonLdNodeObject`

The annotation object for the vertex as JSON-LD.

###### aliases?

`object`[]

Alternative aliases that can be used to identify the vertex.

###### resources?

`object`[]

The resources attached to the vertex.

###### edges?

`object`[]

The edges connected to the vertex.

##### userIdentity?

`string`

The identity to create the auditable item graph operation with.

##### nodeIdentity?

`string`

The node identity to include in the auditable item graph.

#### Returns

`Promise`\<`string`\>

The id of the new graph item.

#### Implementation of

`IAuditableItemGraphComponent.create`

***

### get()

> **get**(`id`, `options?`): `Promise`\<`IAuditableItemGraphVertex`\>

Get a graph vertex.

#### Parameters

##### id

`string`

The id of the vertex to get.

##### options?

Additional options for the get operation.

###### includeDeleted?

`boolean`

Whether to include deleted/updated aliases, resource, edges, defaults to false.

###### includeChangesets?

`boolean`

Whether to include the changesets of the vertex, defaults to false.

###### verifySignatureDepth?

`VerifyDepth`

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

> **update**(`vertex`, `userIdentity?`, `nodeIdentity?`): `Promise`\<`void`\>

Update a graph vertex.

#### Parameters

##### vertex

The vertex to update.

###### id

`string`

The id of the vertex to update.

###### annotationObject?

`IJsonLdNodeObject`

The annotation object for the vertex as JSON-LD.

###### aliases?

`object`[]

Alternative aliases that can be used to identify the vertex.

###### resources?

`object`[]

The resources attached to the vertex.

###### edges?

`object`[]

The edges connected to the vertex.

##### userIdentity?

`string`

The identity to create the auditable item graph operation with.

##### nodeIdentity?

`string`

The node identity to include in the auditable item graph.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemGraphComponent.update`

***

### removeVerifiable()

> **removeVerifiable**(`id`, `nodeIdentity?`): `Promise`\<`void`\>

Remove the verifiable storage for an item.

#### Parameters

##### id

`string`

The id of the vertex to get.

##### nodeIdentity?

`string`

The node identity to use for vault operations.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the vertex is not found.

#### Implementation of

`IAuditableItemGraphComponent.removeVerifiable`

***

### query()

> **query**(`options?`, `conditions?`, `orderBy?`, `orderByDirection?`, `properties?`, `cursor?`, `pageSize?`): `Promise`\<`IAuditableItemGraphVertexList`\>

Query the graph for vertices.

#### Parameters

##### options?

The query options.

###### id?

`string`

The optional id to look for.

###### idMode?

`"id"` \| `"alias"` \| `"both"`

Look in id, alias or both, defaults to both.

###### includesResourceTypes?

`string`[]

Include vertices with specific resource types.

##### conditions?

`IComparator`[]

Conditions to use in the query.

##### orderBy?

The order for the results, defaults to created.

`"dateCreated"` | `"dateModified"`

##### orderByDirection?

`SortDirection`

The direction for the order, defaults to desc.

##### properties?

keyof `IAuditableItemGraphVertex`[]

The properties to return, if not provided defaults to id, created, aliases and object.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<`IAuditableItemGraphVertexList`\>

The entities, which can be partial if a limited keys list was provided.

#### Implementation of

`IAuditableItemGraphComponent.query`
