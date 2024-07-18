# Class: EntityStorageWalletConnector

Class for performing wallet operations using in-memory storage.

## Implements

- `IWalletConnector`

## Constructors

### new EntityStorageWalletConnector()

> **new EntityStorageWalletConnector**(`options`?): [`EntityStorageWalletConnector`](EntityStorageWalletConnector.md)

Create a new instance of EntityStorageWalletConnector.

#### Parameters

• **options?**

The options for the wallet connector.

• **options.vaultConnectorType?**: `string`

Vault connector to use for wallet secrets, defaults to "vault".

• **options.faucetConnectorType?**: `string`

Optional faucet for requesting funds, defaults to "faucet".

• **options.walletAddressEntityStorageType?**: `string`

The entity storage for wallets, defaults to "wallet-address".

• **options.config?**: [`IEntityStorageWalletConnectorConfig`](../interfaces/IEntityStorageWalletConnectorConfig.md)

The configuration to use.

#### Returns

[`EntityStorageWalletConnector`](EntityStorageWalletConnector.md)

## Properties

### NAMESPACE

> `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the wallet connector.

***

### \_DEFAULT\_MNEMONIC\_SECRET\_NAME

> `static` `private` `readonly` **\_DEFAULT\_MNEMONIC\_SECRET\_NAME**: `string` = `"wallet-mnemonic"`

Default name for the mnemonic secret.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IWalletConnector.CLASS_NAME`

## Methods

### create()

> **create**(`requestContext`?): `Promise`\<`void`\>

Create a new wallet.

#### Parameters

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IWalletConnector.create`

***

### getAddresses()

> **getAddresses**(`startAddressIndex`, `count`, `requestContext`?): `Promise`\<`string`[]\>

Get the addresses for the requested range.

#### Parameters

• **startAddressIndex**: `number`

The start index for the addresses.

• **count**: `number`

The number of addresses to generate.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`string`[]\>

The list of addresses.

#### Implementation of

`IWalletConnector.getAddresses`

***

### getBalance()

> **getBalance**(`address`, `requestContext`?): `Promise`\<`bigint`\>

Get the balance for an address in a wallet.

#### Parameters

• **address**: `string`

The bech32 encoded address.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`bigint`\>

The balance of the wallet address.

#### Implementation of

`IWalletConnector.getBalance`

***

### getStorageCosts()

> **getStorageCosts**(`address`, `requestContext`?): `Promise`\<`bigint`\>

Get the storage costs for an address in a wallet.

#### Parameters

• **address**: `string`

The bech32 encoded address.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`bigint`\>

The storage costs for the address.

#### Implementation of

`IWalletConnector.getStorageCosts`

***

### ensureBalance()

> **ensureBalance**(`address`, `ensureBalance`, `timeoutInSeconds`?, `requestContext`?): `Promise`\<`boolean`\>

Ensure the balance for an address in a wallet.

#### Parameters

• **address**: `string`

The bech32 encoded address.

• **ensureBalance**: `bigint`

The balance to ensure on the address.

• **timeoutInSeconds?**: `number`

The timeout in seconds to wait for the funding to complete.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`boolean`\>

True if the balance has been ensured.

#### Implementation of

`IWalletConnector.ensureBalance`

***

### transfer()

> **transfer**(`addressSource`, `addressDest`, `amount`, `requestContext`?): `Promise`\<`undefined` \| `string`\>

Transfer funds to an address.

#### Parameters

• **addressSource**: `string`

The bech32 encoded address to send the funds from.

• **addressDest**: `string`

The bech32 encoded address to send the funds to.

• **amount**: `bigint`

The amount to transfer.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`undefined` \| `string`\>

An identifier for the transfer if there was one.

#### Implementation of

`IWalletConnector.transfer`

***

### sign()

> **sign**(`signatureType`, `addressIndex`, `data`, `requestContext`?): `Promise`\<`object`\>

Sign data using a wallet based key.

#### Parameters

• **signatureType**: `KeyType`

The type of signature to create.

• **addressIndex**: `number`

The index for the address.

• **data**: `Uint8Array`

The data bytes.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The signature and public key bytes.

##### publicKey

> **publicKey**: `Uint8Array`

##### signature

> **signature**: `Uint8Array`

#### Implementation of

`IWalletConnector.sign`
