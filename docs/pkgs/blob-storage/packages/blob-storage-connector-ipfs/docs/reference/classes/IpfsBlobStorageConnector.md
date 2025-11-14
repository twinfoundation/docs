# Class: IpfsBlobStorageConnector

Class for performing blob storage operations on IPFS.
See https://docs.ipfs.tech/reference/kubo/rpc/ for more information.

## Implements

- `IBlobStorageConnector`

## Constructors

### Constructor

> **new IpfsBlobStorageConnector**(`options`): `IpfsBlobStorageConnector`

Create a new instance of IpfsBlobStorageConnector.

#### Parameters

##### options

[`IIpfsBlobStorageConnectorConstructorOptions`](../interfaces/IIpfsBlobStorageConnectorConstructorOptions.md)

The options for the connector.

#### Returns

`IpfsBlobStorageConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"ipfs"`

The namespace for the items.

***

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IBlobStorageConnector.className`

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

> **get**(`id`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`\>

Get the blob.

#### Parameters

##### id

`string`

The id of the blob to get in urn format.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`\>

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
