# Class: NftService

Service for performing NFT operations to a connector.

## Implements

- `INft`

## Constructors

### new NftService()

> **new NftService**(`config`?): [`NftService`](NftService.md)

Create a new instance of NftService.

#### Parameters

• **config?**: [`INftServiceConfig`](../interfaces/INftServiceConfig.md)

The configuration for the service.

#### Returns

[`NftService`](NftService.md)

## Properties

### NAMESPACE

> `static` `readonly` **NAMESPACE**: `string` = `"nft"`

The namespace supported by the nft service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`INft.CLASS_NAME`

## Methods

### mint()

> **mint**\<`T`, `U`\>(`issuer`, `tag`, `immutableMetadata`?, `metadata`?, `options`?, `identity`?): `Promise`\<`string`\>

Mint an NFT.

#### Type parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

• **issuer**: `string`

The issuer for the NFT, will also be the initial owner.

• **tag**: `string`

The tag for the NFT.

• **immutableMetadata?**: `T`

The immutable metadata for the NFT.

• **metadata?**: `U`

The metadata for the NFT.

• **options?**

Additional options for the NFT service.

• **options.namespace?**: `string`

The namespace of the connector to use for the NFT, defaults to service configured namespace.

• **identity?**: `string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`string`\>

The id of the created NFT in urn format.

#### Implementation of

`INft.mint`

***

### resolve()

> **resolve**\<`T`, `U`\>(`id`, `identity`?): `Promise`\<`object`\>

Resolve an NFT.

#### Type parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to resolve.

• **identity?**: `string`

The identity to perform the nft operation on.

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

`INft.resolve`

***

### burn()

> **burn**(`id`, `identity`?): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

• **id**: `string`

The id of the NFT to burn in urn format.

• **identity?**: `string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INft.burn`

***

### transfer()

> **transfer**\<`T`\>(`id`, `recipient`, `metadata`?, `identity`?): `Promise`\<`void`\>

Transfer an NFT.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to transfer in urn format.

• **recipient**: `string`

The recipient of the NFT.

• **metadata?**: `T`

Optional mutable data to include during the transfer.

• **identity?**: `string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INft.transfer`

***

### update()

> **update**\<`T`\>(`id`, `metadata`, `identity`?): `Promise`\<`void`\>

Update the data of the NFT.

#### Type parameters

• **T** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to update in urn format.

• **metadata**: `T`

The mutable data to update.

• **identity?**: `string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INft.update`
