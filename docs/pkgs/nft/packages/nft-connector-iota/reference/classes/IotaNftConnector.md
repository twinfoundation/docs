# Class: IotaNftConnector

Class for performing NFT operations on IOTA.

## Implements

- `INftConnector`

## Constructors

### new IotaNftConnector()

> **new IotaNftConnector**(`dependencies`, `config`): [`IotaNftConnector`](IotaNftConnector.md)

Create a new instance of IotaNftConnector.

#### Parameters

• **dependencies**

The dependencies for the class.

• **dependencies.vaultConnector**: `IVaultConnector`

The vault connector.

• **dependencies.walletConnector**: `IWalletConnector`

The wallet connector.

• **config**: [`IIotaNftConnectorConfig`](../interfaces/IIotaNftConnectorConfig.md)

The configuration for the connector.

#### Returns

[`IotaNftConnector`](IotaNftConnector.md)

## Properties

### NAMESPACE

> `static` **NAMESPACE**: `string` = `"iota-nft"`

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
