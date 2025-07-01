# Interface: INftComponent

Interface describing an NFT component.

## Extends

- `IComponent`

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

The namespace of the connector to use for the NFT, defaults to component configured namespace.

##### identity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`string`\>

The id of the created NFT in urn format.

***

### resolve()

> **resolve**\<`T`, `U`\>(`id`, `controllerIdentity?`): `Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata?`: `T`; `metadata?`: `U`; \}\>

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

##### controllerIdentity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata?`: `T`; `metadata?`: `U`; \}\>

The data for the NFT.

***

### burn()

> **burn**(`id`, `controllerIdentity?`): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

##### id

`string`

The id of the NFT to burn in urn format.

##### controllerIdentity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### transfer()

> **transfer**\<`U`\>(`id`, `recipientIdentity`, `recipientAddress`, `metadata?`, `controllerIdentity?`): `Promise`\<`void`\>

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

##### controllerIdentity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### update()

> **update**\<`U`\>(`id`, `metadata`, `controllerIdentity?`): `Promise`\<`void`\>

Update the mutable data of the NFT.

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

##### controllerIdentity?

`string`

The identity to perform the nft operation on.

#### Returns

`Promise`\<`void`\>

Nothing.
