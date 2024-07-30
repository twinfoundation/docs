# Class: FileBlobStorageConnector

Class for performing blob storage operations in file.

## Implements

- `IBlobStorageConnector`

## Constructors

### new FileBlobStorageConnector()

> **new FileBlobStorageConnector**(`options`): [`FileBlobStorageConnector`](FileBlobStorageConnector.md)

Create a new instance of FileBlobStorageConnector.

#### Parameters

• **options**

The options for the connector.

• **options.config**: [`IFileBlobStorageConnectorConfig`](../interfaces/IFileBlobStorageConnectorConfig.md)

The configuration for the connector.

#### Returns

[`FileBlobStorageConnector`](FileBlobStorageConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"file"`

The namespace for the items.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IBlobStorageConnector.CLASS_NAME`

## Methods

### bootstrap()

> **bootstrap**(`systemLoggingConnectorType`?): `Promise`\<`void`\>

Bootstrap the connector by creating and initializing any resources it needs.

#### Parameters

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

The response of the bootstrapping as log entries.

#### Implementation of

`IBlobStorageConnector.bootstrap`

***

### set()

> **set**(`blob`, `requestContext`?): `Promise`\<`string`\>

Set the blob.

#### Parameters

• **blob**: `Uint8Array`

The data for the blob.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageConnector.set`

***

### get()

> **get**(`id`, `requestContext`?): `Promise`\<`undefined` \| `Uint8Array`\>

Get the blob.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\>

The data for the blob if it can be found or undefined.

#### Implementation of

`IBlobStorageConnector.get`

***

### remove()

> **remove**(`id`, `requestContext`?): `Promise`\<`boolean`\>

Remove the blob.

#### Parameters

• **id**: `string`

The id of the blob to remove in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`boolean`\>

True if the blob was found.

#### Implementation of

`IBlobStorageConnector.remove`
