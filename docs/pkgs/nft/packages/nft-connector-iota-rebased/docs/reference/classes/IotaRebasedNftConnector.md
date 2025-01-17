# Class: IotaRebasedNftConnector

Class for performing NFT operations on IOTA Rebased.

## Implements

- `INftConnector`

## Constructors

### new IotaRebasedNftConnector()

> **new IotaRebasedNftConnector**(`options`): [`IotaRebasedNftConnector`](IotaRebasedNftConnector.md)

Create a new instance of IotaRebasedNftConnector.

#### Parameters

##### options

[`IIotaRebasedNftConnectorConstructorOptions`](../interfaces/IIotaRebasedNftConnectorConstructorOptions.md)

The options for the connector.

#### Returns

[`IotaRebasedNftConnector`](IotaRebasedNftConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota-rebased"`

The namespace supported by the nft connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`INftConnector.CLASS_NAME`

## Methods

### start()

> **start**(`nodeIdentity`, `nodeLoggingConnectorType`?, `componentState`?): `Promise`\<`void`\>

Bootstrap the NFT contract.

#### Parameters

##### nodeIdentity

`string`

The identity of the node.

##### nodeLoggingConnectorType?

`string`

The node logging connector type, defaults to "node-logging".

##### componentState?

The component state.

#### Returns

`Promise`\<`void`\>

void.

#### Implementation of

`INftConnector.start`

***

### mint()

> **mint**\<`T`, `U`\>(`controller`, `issuer`, `tag`, `immutableMetadata`?, `metadata`?): `Promise`\<`string`\>

Mint an NFT.

#### Type Parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### issuer

`string`

The issuer for the NFT, will also be the initial owner.

##### tag

`string`

The tag for the NFT.

##### immutableMetadata?

`T`

The immutable metadata for the NFT.

##### metadata?

`U`

The metadata for the NFT.

#### Returns

`Promise`\<`string`\>

The id of the created NFT in urn format.

#### Implementation of

`INftConnector.mint`

***

### resolve()

> **resolve**\<`T`, `U`\>(`nftId`): `Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata`: `T`; `metadata`: `U`; \}\>

Resolve an NFT to get its details.

#### Type Parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

##### nftId

`string`

The id of the NFT to resolve.

#### Returns

`Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata`: `T`; `metadata`: `U`; \}\>

The NFT details.

#### Implementation of

`INftConnector.resolve`

***

### burn()

> **burn**(`controller`, `id`): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

##### controller

`string`

The controller of the NFT who can make changes.

##### id

`string`

The id of the NFT to burn in urn format.

#### Returns

`Promise`\<`void`\>

void.

#### Implementation of

`INftConnector.burn`

***

### transfer()

> **transfer**\<`T`\>(`controller`, `nftId`, `recipient`, `metadata`?): `Promise`\<`void`\>

Transfer an NFT to a new owner.

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### nftId

`string`

The id of the NFT to transfer.

##### recipient

`string`

The address to transfer the NFT to.

##### metadata?

`T`

Optional metadata to update during transfer.

#### Returns

`Promise`\<`void`\>

void.

#### Implementation of

`INftConnector.transfer`

***

### update()

> **update**\<`T`\>(`controller`, `id`, `metadata`): `Promise`\<`void`\>

Update the mutable data of an NFT.

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### controller

`string`

The controller of the NFT who can make changes.

##### id

`string`

The id of the NFT to update in urn format.

##### metadata

`T`

The new metadata for the NFT.

#### Returns

`Promise`\<`void`\>

void.

#### Implementation of

`INftConnector.update`
