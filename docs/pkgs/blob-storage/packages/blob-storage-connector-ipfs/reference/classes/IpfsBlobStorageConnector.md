# Class: IpfsBlobStorageConnector

Class for performing blob storage operations on IPFS.
See https://docs.ipfs.tech/reference/kubo/rpc/ for more information.

## Implements

- `IBlobStorageConnector`

## Constructors

### new IpfsBlobStorageConnector()

> **new IpfsBlobStorageConnector**(`config`): [`IpfsBlobStorageConnector`](IpfsBlobStorageConnector.md)

Create a new instance of Ipfs.

#### Parameters

• **config**: [`IIpfsBlobStorageConnectorConfig`](../interfaces/IIpfsBlobStorageConnectorConfig.md)

The configuration for the blob storage connector.

#### Returns

[`IpfsBlobStorageConnector`](IpfsBlobStorageConnector.md)

## Methods

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
