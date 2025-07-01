# Class: NftService

Service for performing NFT operations to a connector.

## Implements

- `INftComponent`

## Constructors

### Constructor

> **new NftService**(`options?`): `NftService`

Create a new instance of NftService.

#### Parameters

##### options?

[`INftServiceConstructorOptions`](../interfaces/INftServiceConstructorOptions.md)

The options for the service.

#### Returns

`NftService`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"nft"`

The namespace supported by the nft service.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`INftComponent.CLASS_NAME`

## Methods

### mint()

> **mint**\<`T`, `U`\>(`tag`, `immutableMetadata?`, `metadata?`, `namespace?`, `identity?`): `Promise`\<`string`\>

Mint an NFT.

#### Type Parameters

##### T

`T` = `unknown`

##### U

`U` = `unknown`

#### Parameters

##### tag

`string`

The tag for the NFT.

##### immutableMetadata?

`T`

The immutable metadata for the NFT.

##### metadata?

`U`

The metadata for the NFT.

##### namespace?

`string`

The namespace of the connector to use for the NFT, defaults to service configured namespace.

##### identity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`string`\>

The id of the created NFT in urn format.

#### Implementation of

`INftComponent.mint`

***

### resolve()

> **resolve**\<`T`, `U`\>(`id`, `identity?`): `Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata?`: `T`; `metadata?`: `U`; \}\>

Resolve an NFT.

#### Type Parameters

##### T

`T` = `unknown`

##### U

`U` = `unknown`

#### Parameters

##### id

`string`

The id of the NFT to resolve.

##### identity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata?`: `T`; `metadata?`: `U`; \}\>

The data for the NFT.

#### Implementation of

`INftComponent.resolve`

***

### burn()

> **burn**(`id`, `identity?`): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

##### id

`string`

The id of the NFT to burn in urn format.

##### identity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftComponent.burn`

***

### transfer()

> **transfer**\<`U`\>(`id`, `recipientIdentity`, `recipientAddress`, `metadata?`, `identity?`): `Promise`\<`void`\>

Transfer an NFT.

#### Type Parameters

##### U

`U` = `unknown`

#### Parameters

##### id

`string`

The id of the NFT to transfer in urn format.

##### recipientIdentity

`string`

The recipient identity for the NFT.

##### recipientAddress

`string`

The recipient address for the NFT.

##### metadata?

`U`

Optional mutable data to include during the transfer.

##### identity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftComponent.transfer`

***

### update()

> **update**\<`U`\>(`id`, `metadata`, `identity?`): `Promise`\<`void`\>

Update the data of the NFT.

#### Type Parameters

##### U

`U` = `unknown`

#### Parameters

##### id

`string`

The id of the NFT to update in urn format.

##### metadata

`U`

The mutable data to update.

##### identity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftComponent.update`
