# Class: IotaWalletConnector

Class for performing wallet operations on IOTA.

## Implements

- `IWalletConnector`

## Constructors

### new IotaWalletConnector()

> **new IotaWalletConnector**(`dependencies`, `config`): [`IotaWalletConnector`](IotaWalletConnector.md)

Create a new instance of IotaWalletConnector.

#### Parameters

• **dependencies**

The dependencies for the wallet connector.

• **dependencies.vaultConnector**: `IVaultConnector`

Vault connector to use for wallet secrets.

• **dependencies.faucetConnector?**: `IFaucetConnector`

Optional faucet for requesting funds.

• **config**: [`IIotaWalletConnectorConfig`](../interfaces/IIotaWalletConnectorConfig.md)

The configuration to use.

#### Returns

[`IotaWalletConnector`](IotaWalletConnector.md)

## Properties

### NAMESPACE

> `static` **NAMESPACE**: `string` = `"iota"`

The namespace supported by the wallet connector.

***

### \_DEFAULT\_MNEMONIC\_SECRET\_NAME

> `static` `private` `readonly` **\_DEFAULT\_MNEMONIC\_SECRET\_NAME**: `string` = `"wallet-mnemonic"`

Default name for the mnemonic secret.

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

> **transfer**(`requestContext`, `address`, `amount`): `Promise`\<`void`\>

Transfer funds to an address.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **address**: `string`

The bech32 encoded address to send the funds to.

• **amount**: `bigint`

The amount to transfer.

#### Returns

`Promise`\<`void`\>

Nothing.

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
