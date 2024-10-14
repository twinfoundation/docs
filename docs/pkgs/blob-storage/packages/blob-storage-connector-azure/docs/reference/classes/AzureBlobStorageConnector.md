# Class: AzureBlobStorageConnector

Class for performing blob storage operations on Azure.
See https://learn.microsoft.com/en-us/azure/storage/common/storage-samples-javascript?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json for more information.

## Implements

- `IBlobStorageConnector`

## Constructors

### new AzureBlobStorageConnector()

> **new AzureBlobStorageConnector**(`options`): [`AzureBlobStorageConnector`](AzureBlobStorageConnector.md)

Create a new instance of AzureBlobStorageConnector.

#### Parameters

• **options**

The options for the connector.

• **options.config**: [`IAzureBlobStorageConnectorConfig`](../interfaces/IAzureBlobStorageConnectorConfig.md)

The configuration for the connector.

#### Returns

[`AzureBlobStorageConnector`](AzureBlobStorageConnector.md)

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

### set()

> **set**(`blob`): `Promise`\<`string`\>

Set the blob.

#### Parameters

• **blob**: `Uint8Array`

The data for the blob.

#### Returns

`Promise`\<`string`\>

The id of the stored blob in urn format.

#### Implementation of

`IBlobStorageConnector.set`

***

### get()

> **get**(`id`): `Promise`\<`undefined` \| `Uint8Array`\>

Get the blob.

#### Parameters

• **id**: `string`

The id of the blob to get in urn format.

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\>

The data for the blob if it can be found or undefined.

#### Implementation of

`IBlobStorageConnector.get`

***

### remove()

> **remove**(`id`): `Promise`\<`boolean`\>

Remove the blob.

#### Parameters

• **id**: `string`

The id of the blob to remove in urn format.

#### Returns

`Promise`\<`boolean`\>

True if the blob was found.

#### Implementation of

`IBlobStorageConnector.remove`
