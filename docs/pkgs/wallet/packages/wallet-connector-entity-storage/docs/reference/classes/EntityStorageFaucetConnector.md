# Class: EntityStorageFaucetConnector

Class for performing faucet operations using entity storage.

## Implements

- `IFaucetConnector`

## Constructors

### new EntityStorageFaucetConnector()

> **new EntityStorageFaucetConnector**(`options`?): [`EntityStorageFaucetConnector`](EntityStorageFaucetConnector.md)

Create a new instance of EntityStorageFaucetConnector.

#### Parameters

##### options?

[`IEntityStorageFaucetConnectorConstructorOptions`](../interfaces/IEntityStorageFaucetConnectorConstructorOptions.md)

The options for the wallet connector.

#### Returns

[`EntityStorageFaucetConnector`](EntityStorageFaucetConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace supported by the wallet connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IFaucetConnector.CLASS_NAME`

## Methods

### fundAddress()

> **fundAddress**(`identity`, `address`, `timeoutInSeconds`): `Promise`\<`bigint`\>

Fund the wallet from the faucet.

#### Parameters

##### identity

`string`

The identity of the user to access the vault keys.

##### address

`string`

The bech32 encoded address of the address to fund.

##### timeoutInSeconds

`number` = `60`

The timeout in seconds to wait for the funding to complete.

#### Returns

`Promise`\<`bigint`\>

The amount added to the address by the faucet.

#### Implementation of

`IFaucetConnector.fundAddress`
