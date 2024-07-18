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

> `static` **NAMESPACE**: `string` = `"iota"`

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

***

### getBalance()

> `private` **getBalance**(`address`): `Promise`\<`bigint`\>

Calculate the balance on an address.

#### Parameters

• **address**: `string`

The bech32 encoded address to get the balance.

#### Returns

`Promise`\<`bigint`\>

The amount available on the wallet address.

***

### extractPayloadError()

> `private` **extractPayloadError**(`error`): `IError`

Extract error from SDK payload.

#### Parameters

• **error**: `unknown`

The error to extract.

#### Returns

`IError`

The extracted error.
