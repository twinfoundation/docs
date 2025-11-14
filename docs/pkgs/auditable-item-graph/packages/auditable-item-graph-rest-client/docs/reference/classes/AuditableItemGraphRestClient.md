# Class: AuditableItemGraphRestClient

Client for performing auditable item graph through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IAuditableItemGraphComponent`

## Constructors

### Constructor

> **new AuditableItemGraphRestClient**(`config`): `AuditableItemGraphRestClient`

Create a new instance of AuditableItemGraphRestClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`AuditableItemGraphRestClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IAuditableItemGraphComponent.className`

***

### create()

> **create**(`vertex`): `Promise`\<`string`\>

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

> **update**(`vertex`): `Promise`\<`void`\>

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

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemGraphComponent.update`

***

### removeVerifiable()

> **removeVerifiable**(`id`): `Promise`\<`void`\>

Remove the verifiable storage for an item, not supported on client.

#### Parameters

##### id

`string`

The id of the vertex to get.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Throws

NotFoundError if the vertex is not found.

#### Implementation of

`IAuditableItemGraphComponent.removeVerifiable`

***

### query()

> **query**(`options?`, `conditions?`, `orderBy?`, `orderByDirection?`, `properties?`, `cursor?`, `limit?`): `Promise`\<`IAuditableItemGraphVertexList`\>

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

###### idExact?

`boolean`

Find only exact matches, default to false meaning partial matching.

###### resourceTypes?

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

The direction for the order, defaults to descending.

##### properties?

keyof `IAuditableItemGraphVertex`[]

The properties to return, if not provided defaults to id, created, aliases and object.

##### cursor?

`string`

The cursor to request the next chunk of entities.

##### limit?

`number`

Limit the number of entities to return.

#### Returns

`Promise`\<`IAuditableItemGraphVertexList`\>

The entities, which can be partial if a limited keys list was provided.

#### Implementation of

`IAuditableItemGraphComponent.query`
