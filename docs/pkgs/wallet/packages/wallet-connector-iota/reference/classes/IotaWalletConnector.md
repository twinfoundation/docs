# Class: IotaWalletConnector

Class for performing wallet operations on IOTA.

## Implements

- `IWalletConnector`

## Constructors

### new IotaWalletConnector()

> **new IotaWalletConnector**(`options`): [`IotaWalletConnector`](IotaWalletConnector.md)

Create a new instance of IotaWalletConnector.

#### Parameters

• **options**

The options for the wallet connector.

• **options.vaultConnectorType?**: `string`

Vault connector to use for wallet secrets, defaults to "vault".

• **options.faucetConnectorType?**: `string`

Optional faucet for requesting funds, defaults to "faucet".

• **options.config**: [`IIotaWalletConnectorConfig`](../interfaces/IIotaWalletConnectorConfig.md)

The configuration to use.

#### Returns

[`IotaWalletConnector`](IotaWalletConnector.md)

## Properties

### NAMESPACE

> `static` **NAMESPACE**: `string` = `"iota"`

The namespace supported by the wallet connector.

***

### \_DEFAULT\_MNEMONIC\_SECRET\_NAME

> `static` `private` `readonly` **\_DEFAULT\_MNEMONIC\_SECRET\_NAME**: `string` = `"mnemonic"`

Default name for the mnemonic secret.

***

### \_DEFAULT\_SEED\_SECRET\_NAME

> `static` `private` `readonly` **\_DEFAULT\_SEED\_SECRET\_NAME**: `string` = `"seed"`

Default name for the seed secret.

## Methods

### create()

> **create**(`requestContext`): `Promise`\<`void`\>

Create a new wallet.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IWalletConnector.create`

***

### getAddresses()

> **getAddresses**(`requestContext`, `startAddressIndex`, `count`): `Promise`\<`string`[]\>

Get the addresses for the requested range.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **startAddressIndex**: `number`

The start index for the addresses.

• **count**: `number`

The number of addresses to generate.

#### Returns

`Promise`\<`string`[]\>

The list of addresses.

#### Implementation of

`IWalletConnector.getAddresses`

***

### getBalance()

> **getBalance**(`requestContext`, `address`): `Promise`\<`bigint`\>

Get the balance for an address in a wallet.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **address**: `string`

The bech32 encoded address.

#### Returns

`Promise`\<`bigint`\>

The balance of the wallet address.

#### Implementation of

`IWalletConnector.getBalance`

***

### getStorageCosts()

> **getStorageCosts**(`requestContext`, `address`): `Promise`\<`bigint`\>

Get the storage costs for an address in a wallet.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **address**: `string`

The bech32 encoded address.

#### Returns

`Promise`\<`bigint`\>

The storage costs for the address.

#### Implementation of

`IWalletConnector.getStorageCosts`

***

### ensureBalance()

> **ensureBalance**(`requestContext`, `address`, `ensureBalance`, `timeoutInSeconds`?): `Promise`\<`boolean`\>

Ensure the balance for an address in a wallet.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **address**: `string`

The bech32 encoded address.

• **ensureBalance**: `bigint`

The balance to ensure on the address.

• **timeoutInSeconds?**: `number`

The timeout in seconds to wait for the funding to complete.

#### Returns

`Promise`\<`boolean`\>

True if the balance has been ensured.

#### Implementation of

`IWalletConnector.ensureBalance`

***

### transfer()

> **transfer**(`requestContext`, `addressSource`, `addressDest`, `amount`): `Promise`\<`undefined` \| `string`\>

Transfer funds to an address.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **addressSource**: `string`

The bech32 encoded address to send the funds from.

• **addressDest**: `string`

The bech32 encoded address to send the funds to.

• **amount**: `bigint`

The amount to transfer.

#### Returns

`Promise`\<`undefined` \| `string`\>

An identifier for the transfer if there was one.

#### Implementation of

`IWalletConnector.transfer`

***

### sign()

> **sign**(`requestContext`, `signatureType`, `addressIndex`, `data`): `Promise`\<`object`\>

Sign data using a wallet based key.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **signatureType**: `KeyType`

The type of signature to create.

• **addressIndex**: `number`

The index for the address.

• **data**: `Uint8Array`

The data bytes.

#### Returns

`Promise`\<`object`\>

The signature and public key bytes.

##### publicKey

> **publicKey**: `Uint8Array`

##### signature

> **signature**: `Uint8Array`

#### Implementation of

`IWalletConnector.sign`

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
