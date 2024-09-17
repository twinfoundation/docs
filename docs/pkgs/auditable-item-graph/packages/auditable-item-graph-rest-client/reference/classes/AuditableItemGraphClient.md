# Class: AuditableItemGraphClient

Client for performing auditable item graph through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IAuditableItemGraphComponent`

## Constructors

### new AuditableItemGraphClient()

> **new AuditableItemGraphClient**(`config`): [`AuditableItemGraphClient`](AuditableItemGraphClient.md)

Create a new instance of AuditableItemGraphClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`AuditableItemGraphClient`](AuditableItemGraphClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAuditableItemGraphComponent.CLASS_NAME`

## Methods

### create()

> **create**(`metadata`?, `aliases`?, `resources`?, `edges`?): `Promise`\<`string`\>

Create a new graph vertex.

#### Parameters

• **metadata?**: `IJsonLdNodeObject`

The metadata for the vertex.

• **aliases?**: `object`[]

Alternative aliases that can be used to identify the vertex.

• **resources?**: `object`[]

The resources attached to the vertex.

• **edges?**: `object`[]

The edges connected to the vertex.

#### Returns

`Promise`\<`string`\>

The id of the new graph item.

#### Implementation of

`IAuditableItemGraphComponent.create`

***

### get()

> **get**\<`T`\>(`id`, `options`?, `responseType`?): `Promise`\<`JsonReturnType`\<`T`, `IAuditableItemGraphVertex` & `object`, `IJsonLdDocument`\>\>

Get a graph vertex.

#### Type parameters

• **T** *extends* `"json"` \| `"jsonld"` = `"json"`

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

• **responseType?**: `T`

The response type to return, defaults to application/json.

#### Returns

`Promise`\<`JsonReturnType`\<`T`, `IAuditableItemGraphVertex` & `object`, `IJsonLdDocument`\>\>

The vertex if found.

#### Implementation of

`IAuditableItemGraphComponent.get`

#### Throws

NotFoundError if the vertex is not found.

***

### update()

> **update**(`id`, `metadata`?, `aliases`?, `resources`?, `edges`?): `Promise`\<`void`\>

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

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuditableItemGraphComponent.update`

***

### query()

> **query**\<`T`\>(`options`?, `orderBy`?, `orderByDirection`?, `properties`?, `cursor`?, `pageSize`?, `responseType`?): `Promise`\<`JsonReturnType`\<`T`, `object`, `IJsonLdDocument`\>\>

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

• **properties?**: keyof `IAuditableItemGraphVertex`[]

The properties to return, if not provided defaults to id, created, aliases and metadata.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

• **responseType?**: `T`

The response type to return, defaults to application/json.

#### Returns

`Promise`\<`JsonReturnType`\<`T`, `object`, `IJsonLdDocument`\>\>

The entities, which can be partial if a limited keys list was provided.

#### Implementation of

`IAuditableItemGraphComponent.query`
