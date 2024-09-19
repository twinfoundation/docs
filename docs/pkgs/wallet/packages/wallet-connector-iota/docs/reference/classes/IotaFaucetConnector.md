# Class: IotaFaucetConnector

Class for performing faucet operations on IOTA.

## Implements

- `IFaucetConnector`

## Constructors

### new IotaFaucetConnector()

> **new IotaFaucetConnector**(`options`): [`IotaFaucetConnector`](IotaFaucetConnector.md)

Create a new instance of IotaFaucetConnector.

#### Parameters

• **options**

The options for the connector.

• **options.config**: [`IIotaFaucetConnectorConfig`](../interfaces/IIotaFaucetConnectorConfig.md)

The configuration to use.

#### Returns

[`IotaFaucetConnector`](IotaFaucetConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota"`

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

• **identity**: `string`

The identity of the user to access the vault keys.

• **address**: `string`

The bech32 encoded address of the address to fund.

• **timeoutInSeconds**: `number` = `60`

The timeout in seconds to wait for the funding to complete.

#### Returns

`Promise`\<`bigint`\>

The amount added to the address by the faucet.

#### Implementation of

`IFaucetConnector.fundAddress`
