# Class: FileBlobStorageConnector

Class for performing blob storage operations in file.

## Implements

- `IBlobStorageConnector`

## Constructors

### new FileBlobStorageConnector()

> **new FileBlobStorageConnector**(`dependencies`, `config`): [`FileBlobStorageConnector`](FileBlobStorageConnector.md)

Create a new instance of FileBlobStorageConnector.

#### Parameters

• **dependencies**

The dependencies for the connector.

• **dependencies.logging**: `ILogging`

The logging contract.

• **config**: [`IFileBlobStorageConnectorConfig`](../interfaces/IFileBlobStorageConnectorConfig.md)

The configuration for the blob storage connector.

#### Returns

[`FileBlobStorageConnector`](FileBlobStorageConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"blob-file"`

The namespace for the items.

## Methods

### bootstrap()

> **bootstrap**(`requestContext`): `Promise`\<`void`\>

Bootstrap the connector by creating and initializing any resources it needs.

#### Parameters

• **requestContext**: `IRequestContext`

The request context for bootstrapping.

#### Returns

`Promise`\<`void`\>

The response of the bootstrapping as log entries.

#### Implementation of

`IBlobStorageConnector.bootstrap`

***

### set()

> **set**(`requestContext`, `blob`): `Promise`\<`string`\>

Set the blob.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **blob**: `Uint8Array`

The data for the blob.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageConnector.set`

***

### get()

> **get**(`requestContext`, `id`): `Promise`\<`undefined` \| `Uint8Array`\>

Get the blob.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **id**: `string`

The id of the blob to get in urn format.

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\>

The data for the blob if it can be found or undefined.

#### Implementation of

`IBlobStorageConnector.get`

***

### remove()

> **remove**(`requestContext`, `id`): `Promise`\<`boolean`\>

Remove the blob.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **id**: `string`

The id of the blob to remove in urn format.

#### Returns

`Promise`\<`boolean`\>

True if the blob was found.

#### Implementation of

`IBlobStorageConnector.remove`
