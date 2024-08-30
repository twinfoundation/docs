# Class: IotaNftConnector

Class for performing NFT operations on IOTA.

## Implements

- `INftConnector`

## Constructors

### new IotaNftConnector()

> **new IotaNftConnector**(`options`): [`IotaNftConnector`](IotaNftConnector.md)

Create a new instance of IotaNftConnector.

#### Parameters

• **options**

The options for the connector.

• **options.vaultConnectorType?**: `string`

The type of the vault connector, defaults to "vault".

• **options.config**: [`IIotaNftConnectorConfig`](../interfaces/IIotaNftConnectorConfig.md)

The configuration for the connector.

#### Returns

[`IotaNftConnector`](IotaNftConnector.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"iota"`

The namespace supported by the nft connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`INftConnector.CLASS_NAME`

## Methods

### mint()

> **mint**\<`T`, `U`\>(`controller`, `issuer`, `tag`, `immutableMetadata`?, `metadata`?): `Promise`\<`string`\>

Mint an NFT.

#### Type parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

• **controller**: `string`

The identity of the user to access the vault keys.

• **issuer**: `string`

The issuer for the NFT, will also be the initial owner.

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

### resolve()

> **resolve**\<`T`, `U`\>(`id`): `Promise`\<`object`\>

Resolve an NFT.

#### Type parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to resolve.

#### Returns

`Promise`\<`object`\>

The data for the NFT.

##### issuer

> **issuer**: `string`

##### owner

> **owner**: `string`

##### tag

> **tag**: `string`

##### immutableMetadata?

> `optional` **immutableMetadata**: `T`

##### metadata?

> `optional` **metadata**: `U`

#### Implementation of

`INftConnector.resolve`

***

### burn()

> **burn**(`controller`, `id`): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

• **controller**: `string`

The controller of the NFT who can make changes.

• **id**: `string`

The id of the NFT to burn in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.burn`

***

### transfer()

> **transfer**\<`T`\>(`controller`, `id`, `recipient`, `metadata`?): `Promise`\<`void`\>

Transfer an NFT.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **controller**: `string`

The controller of the NFT who can make changes.

• **id**: `string`

The id of the NFT to transfer in urn format.

• **recipient**: `string`

The recipient of the NFT.

• **metadata?**: `T`

Optional mutable data to include during the transfer.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.transfer`

***

### update()

> **update**\<`T`\>(`controller`, `id`, `metadata`): `Promise`\<`void`\>

Update the data of the NFT.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **controller**: `string`

The controller of the NFT who can make changes.

• **id**: `string`

The id of the NFT to update in urn format.

• **metadata**: `T`

The mutable data to update.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.update`
