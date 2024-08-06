# Interface: IWalletConnector

Interface describing a wallet connector.

## Extends

- `IService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the service.

#### Inherited from

`IService.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`systemLoggingConnectorType`?): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(`systemIdentity`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Parameters

• **systemIdentity**: `string`

The identity of the system.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(`systemIdentity`, `systemLoggingConnectorType`?): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Parameters

• **systemIdentity**: `string`

The identity of the system.

• **systemLoggingConnectorType?**: `string`

The system logging connector type, defaults to "system-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### create()

> **create**(`identity`): `Promise`\<`void`\>

Create a new wallet.

#### Parameters

• **identity**: `string`

The identity of the user to access the vault keys.

#### Returns

`Promise`\<`void`\>

Nothing.

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

The end index for the addresses.

#### Returns

`Promise`\<`string`[]\>

The list of addresses.

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
