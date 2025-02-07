# Class: IotaRebasedFaucetConnector

Class for performing faucet operations on IOTA Rebased.

## Implements

- `IFaucetConnector`

## Constructors

### new IotaRebasedFaucetConnector()

> **new IotaRebasedFaucetConnector**(`options`): [`IotaRebasedFaucetConnector`](IotaRebasedFaucetConnector.md)

Create a new instance of IotaRebasedFaucetConnector.

#### Parameters

##### options

[`IIotaRebasedFaucetConnectorConstructorOptions`](../interfaces/IIotaRebasedFaucetConnectorConstructorOptions.md)

The options for the connector.

#### Returns

[`IotaRebasedFaucetConnector`](IotaRebasedFaucetConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota-rebased"`

The namespace supported by the faucet connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IFaucetConnector.CLASS_NAME`

## Methods

### fundAddress()

> **fundAddress**(`identity`, `address`, `timeoutInSeconds`): `Promise`\<`bigint`\>

Fund an address with IOTA Rebased from the faucet.

#### Parameters

##### identity

`string`

The identity of the user to access the vault keys.

##### address

`string`

The address to fund.

##### timeoutInSeconds

`number` = `60`

The timeout in seconds to wait for the funding to complete.

#### Returns

`Promise`\<`bigint`\>

The amount funded.

#### Implementation of

`IFaucetConnector.fundAddress`
