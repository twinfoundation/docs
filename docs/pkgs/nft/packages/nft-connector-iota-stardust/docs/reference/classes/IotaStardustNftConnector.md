# Class: IotaStardustNftConnector

Class for performing NFT operations on IOTA Stardust.

## Implements

- `INftConnector`

## Constructors

### Constructor

> **new IotaStardustNftConnector**(`options`): `IotaStardustNftConnector`

Create a new instance of IotaNftConnector.

#### Parameters

##### options

[`IIotaStardustNftConnectorConstructorOptions`](../interfaces/IIotaStardustNftConnectorConstructorOptions.md)

The options for the connector.

#### Returns

`IotaStardustNftConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota-stardust"`

The namespace supported by the nft connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`INftConnector.CLASS_NAME`

## Methods

### mint()

> **mint**\<`T`, `U`\>(`controllerIdentity`, `tag`, `immutableMetadata?`, `metadata?`): `Promise`\<`string`\>

Mint an NFT.

#### Type Parameters

##### T

`T` = `unknown`

##### U

`U` = `unknown`

#### Parameters

##### controllerIdentity

`string`

The identity of the user to access the vault keys.

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

> **resolve**\<`T`, `U`\>(`id`): `Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata`: `T`; `metadata`: `U`; \}\>

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

`Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata`: `T`; `metadata`: `U`; \}\>

The data for the NFT.

#### Implementation of

`INftConnector.resolve`

***

### burn()

> **burn**(`controllerIdentity`, `id`): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

##### controllerIdentity

`string`

The controller of the NFT who can make changes.

##### id

`string`

The id of the NFT to burn in urn format.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.burn`

***

### transfer()

> **transfer**\<`U`\>(`controllerIdentity`, `id`, `recipientIdentity`, `recipientAddress`, `metadata?`): `Promise`\<`void`\>

Transfer an NFT.

#### Type Parameters

##### U

`U` = `unknown`

#### Parameters

##### controllerIdentity

`string`

The controller of the NFT who can make changes.

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

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.transfer`

***

### update()

> **update**\<`U`\>(`controllerIdentity`, `id`, `metadata`): `Promise`\<`void`\>

Update the data of the NFT.

#### Type Parameters

##### U

`U` = `unknown`

#### Parameters

##### controllerIdentity

`string`

The controller of the NFT who can make changes.

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

`INftConnector.update`
