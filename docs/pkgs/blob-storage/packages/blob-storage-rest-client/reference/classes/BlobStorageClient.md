# Class: BlobStorageClient

Client for performing blob storage through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IBlobStorageComponent`

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

`IBlobStorageComponent.CLASS_NAME`

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

### create()

> **create**(`blob`, `metadata`?, `namespace`?): `Promise`\<`string`\>

Create the blob with some metadata.

#### Parameters

• **blob**: `string`

The data for the blob in base64 format.

• **metadata?**: `IProperty`[]

Metadata to associate with the blob.

• **namespace?**: `string`

The namespace to use for storing, defaults to component configured namespace.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageComponent.create`

***

### get()

> **get**(`id`, `includeContent`): `Promise`\<`object`\>

Get the blob and metadata.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

• **includeContent**: `boolean`

Include the content, or just get the metadata.

#### Returns

`Promise`\<`object`\>

The metadata and data for the blob if it can be found.

##### blob?

> `optional` **blob**: `string`

##### metadata

> **metadata**: `IProperty`[]

#### Implementation of

`IBlobStorageComponent.get`

#### Throws

Not found error if the blob cannot be found.

***

### update()

> **update**(`id`, `metadata`): `Promise`\<`void`\>

Update the blob with metadata.

#### Parameters

• **id**: `string`

The id of the blob metadata to update.

• **metadata**: `IProperty`[]

Metadata to associate with the blob.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBlobStorageComponent.update`

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

`IBlobStorageComponent.remove`

***

### createDownloadLink()

> **createDownloadLink**(`id`, `download`?, `filename`?): `string`

Create a download link for the blob.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

• **download?**: `boolean`

Should the content disposition be set to download.

• **filename?**: `string`

The filename to use for the download.

#### Returns

`string`

The download link.
