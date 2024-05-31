# Class: EntityStorageNftConnector

Class for performing NFT operations on entity storage.

## Implements

- `INftConnector`

## Constructors

### new EntityStorageNftConnector()

> **new EntityStorageNftConnector**(`dependencies`, `config`?): [`EntityStorageNftConnector`](EntityStorageNftConnector.md)

Create a new instance of EntityStorageNftConnector.

#### Parameters

• **dependencies**

The dependencies for the class.

• **dependencies.vaultConnector**: `IVaultConnector`

The vault connector.

• **dependencies.nftEntityStorage?**: `IEntityStorageConnector`\<[`Nft`](Nft.md)\>

The entity storage for nfts.

• **config?**: [`IEntityStorageNftConnectorConfig`](../interfaces/IEntityStorageNftConnectorConfig.md)

The configuration for the connector.

#### Returns

[`EntityStorageNftConnector`](EntityStorageNftConnector.md)

## Properties

### NAMESPACE

> `static` **NAMESPACE**: `string` = `"entity-storage-nft"`

The namespace supported by the wallet connector.

## Methods

### mint()

> **mint**\<`T`, `U`\>(`requestContext`, `tag`, `immutableMetadata`?, `metadata`?): `Promise`\<`string`\>

Mint an NFT.

#### Type parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **tag**: `string`

The tag for the NFT.

• **immutableMetadata?**: `T`

The immutable metadata for the NFT.

• **metadata?**: `U`

The metadata for the NFT.

#### Returns

`Promise`\<`string`\>

The id of the created NFT in urn format.

#### Implementation of

`INftConnector.mint`

***

### burn()

> **burn**(`requestContext`, `id`): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **id**: `string`

The id of the NFT to burn in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.burn`

***

### transfer()

> **transfer**(`requestContext`, `id`, `recipient`): `Promise`\<`void`\>

Transfer an NFT.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **id**: `string`

The id of the NFT to transfer in urn format.

• **recipient**: `string`

The recipient identity of the NFT.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.transfer`
