# Class: S3BlobStorageConnector

Class for performing blob storage operations on S3.
See https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/ for more information.

## Implements

- `IBlobStorageConnector`

## Constructors

### new S3BlobStorageConnector()

> **new S3BlobStorageConnector**(`options`): [`S3BlobStorageConnector`](S3BlobStorageConnector.md)

Create a new instance of S3BlobStorageConnector.

#### Parameters

• **options**

The options for the connector.

• **options.config**: [`IS3BlobStorageConnectorConfig`](../interfaces/IS3BlobStorageConnectorConfig.md)

The configuration for the connector.

#### Returns

[`S3BlobStorageConnector`](S3BlobStorageConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"s3"`

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
