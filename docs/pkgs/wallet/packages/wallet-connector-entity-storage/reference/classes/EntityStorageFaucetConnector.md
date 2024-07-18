# Class: EntityStorageFaucetConnector

Class for performing faucet operations using entity storage.

## Implements

- `IFaucetConnector`

## Constructors

### new EntityStorageFaucetConnector()

> **new EntityStorageFaucetConnector**(`options`?): [`EntityStorageFaucetConnector`](EntityStorageFaucetConnector.md)

Create a new instance of EntityStorageFaucetConnector.

#### Parameters

• **options?**

The options for the wallet connector.

• **options.walletAddressEntityStorageType?**: `string`

The entity storage type for wallet addresses, defaults to "wallet-address".

#### Returns

[`EntityStorageFaucetConnector`](EntityStorageFaucetConnector.md)

## Properties

### NAMESPACE

> `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the wallet connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IFaucetConnector.CLASS_NAME`

## Methods

### fundAddress()

> **fundAddress**(`address`, `timeoutInSeconds`, `requestContext`?): `Promise`\<`bigint`\>

Fund the wallet from the faucet.

#### Parameters

• **address**: `string`

The bech32 encoded address of the address to fund.

• **timeoutInSeconds**: `number`= `60`

The timeout in seconds to wait for the funding to complete.

• **requestContext?**: `IServiceRequestContext`

The context for the request.

#### Returns

`Promise`\<`bigint`\>

The amount added to the address by the faucet.

#### Implementation of

`IFaucetConnector.fundAddress`
