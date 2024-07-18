# Class: BlobStorageClient

Client for performing blob storage through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IBlobStorage`

## Constructors

### new BlobStorageClient()

> **new BlobStorageClient**(`config`): [`BlobStorageClient`](BlobStorageClient.md)

Create a new instance of BlobStorageClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`BlobStorageClient`](BlobStorageClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string` = `BlobStorageClient._CLASS_NAME`

Runtime name for the class.

#### Implementation of

`IBlobStorage.CLASS_NAME`

## Methods

### getEndpointWithPrefix()

> **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

#### Inherited from

`BaseRestClient.getEndpointWithPrefix`

***

### fetch()

> **fetch**\<`T`, `U`\>(`route`, `method`, `request`?): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

• **T** *extends* `IHttpRequest`\<`any`\>

• **U** *extends* `IHttpResponse`\<`any`\>

#### Parameters

• **route**: `string`

The route of the request.

• **method**: `HttpMethod`

The http method.

• **request?**: `T`

Request to send to the endpoint.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

***

### set()

> **set**(`blob`, `options`?): `Promise`\<`string`\>

Set the blob.

#### Parameters

• **blob**: `Uint8Array`

The data for the blob.

• **options?**

Additional options for the blob.

• **options.namespace?**: `string`

The namespace to use for storing, defaults to service configured namespace.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorage.set`

***

### get()

> **get**(`id`): `Promise`\<`Uint8Array`\>

Get the blob.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

#### Returns

`Promise`\<`Uint8Array`\>

The data for the blob if it can be found.

#### Implementation of

`IBlobStorage.get`

#### Throws

Not found error if the blob cannot be found.

***

### remove()

> **remove**(`id`): `Promise`\<`void`\>

Remove the blob.

#### Parameters

• **id**: `string`

The id of the blob to remove in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBlobStorage.remove`
