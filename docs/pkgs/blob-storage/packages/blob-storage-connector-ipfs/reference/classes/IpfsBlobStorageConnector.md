# Class: IpfsBlobStorageConnector

Class for performing blob storage operations on IPFS.
See https://docs.ipfs.tech/reference/kubo/rpc/ for more information.

## Implements

- `IBlobStorageConnector`

## Constructors

### new IpfsBlobStorageConnector()

> **new IpfsBlobStorageConnector**(`options`): [`IpfsBlobStorageConnector`](IpfsBlobStorageConnector.md)

Create a new instance of IpfsBlobStorageConnector.

#### Parameters

• **options**

The options for the connector.

• **options.config**: [`IIpfsBlobStorageConnectorConfig`](../interfaces/IIpfsBlobStorageConnectorConfig.md)

The configuration for the connector.

#### Returns

[`IpfsBlobStorageConnector`](IpfsBlobStorageConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"ipfs"`

The namespace for the items.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IBlobStorageConnector.CLASS_NAME`

## Methods

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
