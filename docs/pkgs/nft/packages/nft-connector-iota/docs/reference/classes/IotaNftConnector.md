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

> **start**(`nodeIdentity`, `nodeLoggingComponentType?`): `Promise`\<`void`\>

Bootstrap the NFT contract.

#### Parameters

##### nodeIdentity

`string`

The identity of the node.

##### nodeLoggingComponentType?

`string`

The node logging component type.

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

> **resolve**\<`T`, `U`\>(`nftId`): `Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata?`: `T`; `metadata?`: `U`; \}\>

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

`Promise`\<\{ `issuer`: `string`; `owner`: `string`; `tag`: `string`; `immutableMetadata?`: `T`; `metadata?`: `U`; \}\>

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

***

### migrateNft()

> **migrateNft**(`controllerIdentity`, `nftId`): `Promise`\<`void`\>

Migrate an NFT to the current version using admin privileges.

#### Parameters

##### controllerIdentity

`string`

The identity of the controller with AdminCap privileges.

##### nftId

`string`

The id of the NFT to migrate.

#### Returns

`Promise`\<`void`\>

void.

***

### enableMigration()

> **enableMigration**(`controllerIdentity`): `Promise`\<`void`\>

Enable migration operations using admin privileges.

#### Parameters

##### controllerIdentity

`string`

The identity of the controller with AdminCap privileges.

#### Returns

`Promise`\<`void`\>

void.

***

### disableMigration()

> **disableMigration**(`controllerIdentity`): `Promise`\<`void`\>

Disable migration operations using admin privileges.

#### Parameters

##### controllerIdentity

`string`

The identity of the controller with AdminCap privileges.

#### Returns

`Promise`\<`void`\>

void.

***

### isMigrationActive()

> **isMigrationActive**(): `Promise`\<`boolean`\>

Check if migration is currently active.

#### Returns

`Promise`\<`boolean`\>

True if migration is enabled, false otherwise.

***

### validateNftVersion()

> **validateNftVersion**(`nftId`): `Promise`\<`boolean`\>

Validate that an NFT version is compatible with the current contract.

#### Parameters

##### nftId

`string`

The id of the NFT to validate.

#### Returns

`Promise`\<`boolean`\>

True if the NFT version is compatible, false otherwise.

***

### getNftContractVersion()

> **getNftContractVersion**(`nftId`): `Promise`\<`number`\>

Get the smart contract version of a specific NFT.
This version indicates which contract version was used to create/migrate the NFT.

#### Parameters

##### nftId

`string`

The id of the NFT to get the contract version for.

#### Returns

`Promise`\<`number`\>

The contract version number of the NFT.

***

### getCurrentContractVersion()

> **getCurrentContractVersion**(): `Promise`\<`number`\>

Get the current contract version from the deployed smart contract.

#### Returns

`Promise`\<`number`\>

The current version number of the contract.
