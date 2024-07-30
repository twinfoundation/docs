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

### \_DEFAULT\_SEED\_SECRET\_NAME

> `static` `private` `readonly` **\_DEFAULT\_SEED\_SECRET\_NAME**: `string` = `"seed"`

Default name for the seed secret.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`INftConnector.CLASS_NAME`

## Methods

### mint()

> **mint**\<`T`, `U`\>(`issuer`, `tag`, `immutableMetadata`?, `metadata`?, `requestContext`?): `Promise`\<`string`\>

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

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`string`\>

The id of the created NFT in urn format.

#### Implementation of

`INftConnector.mint`

***

### resolve()

> **resolve**\<`T`, `U`\>(`id`, `requestContext`?): `Promise`\<`object`\>

Resolve an NFT.

#### Type parameters

• **T** = `unknown`

• **U** = `unknown`

#### Parameters

• **id**: `string`

The id of the NFT to resolve.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

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

> **burn**(`id`, `requestContext`?): `Promise`\<`void`\>

Burn an NFT.

#### Parameters

• **id**: `string`

The id of the NFT to burn in urn format.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.burn`

***

### transfer()

> **transfer**\<`T`\>(`id`, `recipient`, `metadata`?, `requestContext`?): `Promise`\<`void`\>

Transfer an NFT.

#### Type parameters

• **T**

#### Parameters

• **id**: `string`

The id of the NFT to transfer in urn format.

• **recipient**: `string`

The recipient of the NFT.

• **metadata?**: `T`

Optional mutable data to include during the transfer.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.transfer`

***

### update()

> **update**\<`T`\>(`id`, `metadata`, `requestContext`?): `Promise`\<`void`\>

Update the mutable data of the NFT.

#### Type parameters

• **T**

#### Parameters

• **id**: `string`

The id of the NFT to update in urn format.

• **metadata**: `T`

The mutable data to update.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`INftConnector.update`

***

### extractPayloadError()

> `private` **extractPayloadError**(`error`): `IError`

Extract error from SDK payload.

#### Parameters

• **error**: `unknown`

The error to extract.

#### Returns

`IError`

The extracted error.
