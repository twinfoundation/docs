# Class: EntityStorageFaucetConnector

Class for performing faucet operations using entity storage.

## Implements

- `IFaucetConnector`

## Constructors

### new EntityStorageFaucetConnector()

> **new EntityStorageFaucetConnector**(`dependencies`): [`EntityStorageFaucetConnector`](EntityStorageFaucetConnector.md)

Create a new instance of MemoryFaucetConnector.

#### Parameters

• **dependencies**

The dependencies for the wallet connector.

• **dependencies.walletAddressEntityStorage**: `IEntityStorageConnector`\<[`WalletAddress`](WalletAddress.md)\>

The entity storage for wallet addresses.

#### Returns

[`EntityStorageFaucetConnector`](EntityStorageFaucetConnector.md)

## Properties

### NAMESPACE

> `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the wallet connector.

## Methods

### fundAddress()

> **fundAddress**(`requestContext`, `address`, `timeoutInSeconds`): `Promise`\<`bigint`\>

Fund the wallet from the faucet.

#### Parameters

• **requestContext**: `IRequestContext`

The context for the request.

• **address**: `string`

The bech32 encoded address of the address to fund.

• **timeoutInSeconds**: `number`= `60`

The timeout in seconds to wait for the funding to complete.

#### Returns

`Promise`\<`bigint`\>

The amount added to the address by the faucet.

#### Implementation of

`IFaucetConnector.fundAddress`
