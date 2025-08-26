# Class: AzureBlobStorageConnector

Class for performing blob storage operations on Azure.
See https://learn.microsoft.com/en-us/azure/storage/common/storage-samples-javascript?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json for more information.

## Implements

- `IBlobStorageConnector`

## Constructors

### Constructor

> **new AzureBlobStorageConnector**(`options`): `AzureBlobStorageConnector`

Create a new instance of AzureBlobStorageConnector.

#### Parameters

##### options

[`IAzureBlobStorageConnectorConstructorOptions`](../interfaces/IAzureBlobStorageConnectorConstructorOptions.md)

The options for the connector.

#### Returns

`AzureBlobStorageConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"azure"`

The namespace for the items.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IBlobStorageConnector.CLASS_NAME`

## Methods

### bootstrap()

> **bootstrap**(`nodeLoggingComponentType?`): `Promise`\<`boolean`\>

Bootstrap the component by creating and initializing any resources it needs.

#### Parameters

##### nodeLoggingComponentType?

`string`

The node logging component type.

#### Returns

`Promise`\<`boolean`\>

True if the bootstrapping process was successful.

#### Implementation of

`IBlobStorageConnector.bootstrap`

***

### set()

> **set**(`blob`): `Promise`\<`string`\>

Set the blob.

#### Parameters

##### blob

`Uint8Array`

The data for the blob.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageConnector.set`

***

### get()

> **get**(`id`): `Promise`\<`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>\>

Get the blob.

#### Parameters

##### id

`string`

The id of the blob to get in urn format.

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>\>

The data for the blob if it can be found or undefined.

#### Implementation of

`IBlobStorageConnector.get`

***

### remove()

> **remove**(`id`): `Promise`\<`boolean`\>

Remove the blob.

#### Parameters

##### id

`string`

The id of the blob to remove in urn format.

#### Returns

`Promise`\<`boolean`\>

True if the blob was found.

#### Implementation of

`IBlobStorageConnector.remove`
