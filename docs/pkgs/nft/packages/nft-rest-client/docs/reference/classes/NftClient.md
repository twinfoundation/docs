# Class: NftClient

Client for performing NFT through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `INftComponent`

## Constructors

### Constructor

> **new NftClient**(`config`): `NftClient`

Create a new instance of NftClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`NftClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`INftComponent.CLASS_NAME`

## Methods

### mint()

> **mint**\<`T`, `U`\>(`tag`, `immutableMetadata?`, `metadata?`, `namespace?`): `Promise`\<`string`\>

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

The namespace of the connector to use for the NFT, defaults to component configured namespace.

#### Returns

`Promise`\<`string`\>

The id of the created NFT in urn format.

#### Implementation of

`INftComponent.mint`

***

### resolve()

> **resolve**\<`T`, `U`\>(`id`): `Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata?`: `T`; `metadata?`: `U`; \}\>

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

#### Returns

`Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata?`: `T`; `metadata?`: `U`; \}\>

The data for the NFT.

#### Implementation of

`INftComponent.resolve`

***

### burn()

> **burn**(`id`): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

##### id

`string`

The id of the NFT to burn in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftComponent.burn`

***

### transfer()

> **transfer**\<`T`\>(`id`, `recipientIdentity`, `recipientAddress`, `metadata?`): `Promise`\<`void`\>

Transfer an NFT.

#### Type Parameters

##### T

`T` = `unknown`

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

`T`

Optional mutable data to include during the transfer.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftComponent.transfer`

***

### update()

> **update**\<`U`\>(`id`, `metadata`): `Promise`\<`void`\>

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

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftComponent.update`
