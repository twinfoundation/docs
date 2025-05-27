# Class: IotaNftConnector

Class for performing NFT operations on IOTA.

## Implements

- `INftConnector`

## Constructors

### Constructor

> **new IotaNftConnector**(`options`): `IotaNftConnector`

Create a new instance of IotaNftConnector.

#### Parameters

##### options

[`IIotaNftConnectorConstructorOptions`](../interfaces/IIotaNftConnectorConstructorOptions.md)

The options for the connector.

#### Returns

`IotaNftConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota"`

The namespace supported by the nft connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`INftConnector.CLASS_NAME`

## Methods

### start()

> **start**(`nodeIdentity`, `nodeLoggingConnectorType?`, `componentState?`): `Promise`\<`void`\>

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

###### contractDeployments?

\{[`id`: `string`]: `string`; \}

The contract deployments.

#### Returns

`Promise`\<`void`\>

void.

#### Implementation of

`INftConnector.start`

***

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

> **resolve**\<`T`, `U`\>(`nftId`): `Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata`: `T`; `metadata`: `U`; \}\>

Resolve an NFT to get its details.

#### Type Parameters

##### T

`T` = `unknown`

##### U

`U` = `unknown`

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

void.

#### Implementation of

`INftConnector.burn`

***

### transfer()

> **transfer**\<`U`\>(`controller`, `nftId`, `recipientIdentity`, `recipientAddress`, `metadata?`): `Promise`\<`void`\>

Transfer an NFT to a new owner.

#### Type Parameters

##### U

`U` = `unknown`

#### Parameters

##### controller

`string`

The identity of the user to access the vault keys.

##### nftId

`string`

The id of the NFT to transfer.

##### recipientIdentity

`string`

The recipient identity for the NFT.

##### recipientAddress

`string`

The recipient address for the NFT.

##### metadata?

`U`

Optional metadata to update during transfer.

#### Returns

`Promise`\<`void`\>

void.

#### Implementation of

`INftConnector.transfer`

***

### update()

> **update**\<`U`\>(`controllerIdentity`, `id`, `metadata`): `Promise`\<`void`\>

Update the mutable data of an NFT.

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

The new metadata for the NFT.

#### Returns

`Promise`\<`void`\>

void.

#### Implementation of

`INftConnector.update`
