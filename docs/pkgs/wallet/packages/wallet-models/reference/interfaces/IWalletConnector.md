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

> `optional` **bootstrap**(`requestContext`?): `Promise`\<`void`\>

Bootstrap the service by creating and initializing any resources it needs.

#### Parameters

• **requestContext?**: `IServiceRequestContext`

The request context for bootstrapping.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.bootstrap`

***

### start()?

> `optional` **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.start`

***

### stop()?

> `optional` **stop**(): `Promise`\<`void`\>

The service needs to be stopped when the application is closed.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IService.stop`

***

### create()

> **create**(`requestContext`?): `Promise`\<`void`\>

Create a new wallet.

#### Parameters

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### getAddresses()

> **getAddresses**(`startAddressIndex`, `count`, `requestContext`?): `Promise`\<`string`[]\>

Get the addresses for the requested range.

#### Parameters

• **startAddressIndex**: `number`

The start index for the addresses.

• **count**: `number`

The end index for the addresses.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`string`[]\>

The list of addresses.

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

The data bytes.,

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`object`\>

The signature and public key bytes.

##### publicKey

> **publicKey**: `Uint8Array`

##### signature

> **signature**: `Uint8Array`
