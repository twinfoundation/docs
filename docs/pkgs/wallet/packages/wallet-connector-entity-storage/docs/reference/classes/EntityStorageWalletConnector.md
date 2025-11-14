# Class: EntityStorageWalletConnector

Class for performing wallet operations using in-memory storage.

## Implements

- `IWalletConnector`

## Constructors

### Constructor

> **new EntityStorageWalletConnector**(`options?`): `EntityStorageWalletConnector`

Create a new instance of EntityStorageWalletConnector.

#### Parameters

##### options?

[`IEntityStorageWalletConnectorConstructorOptions`](../interfaces/IEntityStorageWalletConnectorConstructorOptions.md)

The options for the wallet connector.

#### Returns

`EntityStorageWalletConnector`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

***

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the wallet connector.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IWalletConnector.className`

***

### create()

> **create**(`identity`): `Promise`\<`void`\>

Create a new wallet.

#### Parameters

##### identity

`string`

The identity of the user to access the vault keys.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IWalletConnector.create`

***

### getAddresses()

> **getAddresses**(`identity`, `accountIndex`, `startAddressIndex`, `count`): `Promise`\<`string`[]\>

Get the addresses for the requested range.

#### Parameters

##### identity

`string`

The identity of the user to access the vault keys.

##### accountIndex

`number`

The account index to get the addresses for.

##### startAddressIndex

`number`

The start index for the addresses.

##### count

`number`

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

##### identity

`string`

The identity of the user to access the vault keys.

##### address

`string`

The hex encoded address.

#### Returns

`Promise`\<`bigint`\>

The balance of the wallet address.

#### Implementation of

`IWalletConnector.getBalance`

***

### ensureBalance()

> **ensureBalance**(`identity`, `address`, `ensureBalance`, `timeoutInSeconds?`): `Promise`\<`boolean`\>

Ensure the balance for an address in a wallet.

#### Parameters

##### identity

`string`

The identity of the user to access the vault keys.

##### address

`string`

The hex encoded address.

##### ensureBalance

`bigint`

The balance to ensure on the address.

##### timeoutInSeconds?

`number`

The timeout in seconds to wait for the funding to complete.

#### Returns

`Promise`\<`boolean`\>

True if the balance has been ensured.

#### Implementation of

`IWalletConnector.ensureBalance`

***

### transfer()

> **transfer**(`identity`, `addressSource`, `addressDest`, `amount`): `Promise`\<`string` \| `undefined`\>

Transfer funds to an address.

#### Parameters

##### identity

`string`

The identity of the user to access the vault keys.

##### addressSource

`string`

The hex encoded address to send the funds from.

##### addressDest

`string`

The hex encoded address to send the funds to.

##### amount

`bigint`

The amount to transfer.

#### Returns

`Promise`\<`string` \| `undefined`\>

An identifier for the transfer if there was one.

#### Implementation of

`IWalletConnector.transfer`
