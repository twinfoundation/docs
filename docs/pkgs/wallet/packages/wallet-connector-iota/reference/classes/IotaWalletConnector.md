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

### MNEMONIC\_SECRET\_NAME

> `static` **MNEMONIC\_SECRET\_NAME**: `string` = `"wallet-mnemonic"`

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
