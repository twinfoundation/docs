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

> `static` `readonly` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the wallet connector.

***

### \_DEFAULT\_MNEMONIC\_SECRET\_NAME

> `static` `private` `readonly` **\_DEFAULT\_MNEMONIC\_SECRET\_NAME**: `string` = `"mnemonic"`

Default name for the mnemonic secret.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IWalletConnector.CLASS_NAME`

## Methods

### create()

> **create**(`identity`): `Promise`\<`void`\>

Create a new wallet.

#### Parameters

• **identity**: `string`

The identity of the user to access the vault keys.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IWalletConnector.create`

***

### getAddresses()

> **getAddresses**(`identity`, `startAddressIndex`, `count`): `Promise`\<`string`[]\>

Get the addresses for the requested range.

#### Parameters

• **identity**: `string`

The identity of the user to access the vault keys.

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

> **getBalance**(`identity`, `address`): `Promise`\<`bigint`\>

Get the balance for an address in a wallet.

#### Parameters

• **identity**: `string`

The identity of the user to access the vault keys.

• **address**: `string`

The bech32 encoded address.

#### Returns

`Promise`\<`bigint`\>

The balance of the wallet address.

#### Implementation of

`IWalletConnector.getBalance`

***

### ensureBalance()

> **ensureBalance**(`identity`, `address`, `ensureBalance`, `timeoutInSeconds`?): `Promise`\<`boolean`\>

Ensure the balance for an address in a wallet.

#### Parameters

• **identity**: `string`

The identity of the user to access the vault keys.

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

> **transfer**(`identity`, `addressSource`, `addressDest`, `amount`): `Promise`\<`undefined` \| `string`\>

Transfer funds to an address.

#### Parameters

• **identity**: `string`

The identity of the user to access the vault keys.

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
