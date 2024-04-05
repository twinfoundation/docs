# Class: IotaFaucetProvider

Class for performing faucet operations on IOTA.

## Implements

- `IFaucetProvider`

## Constructors

### constructor

• **new IotaFaucetProvider**(`config`): [`IotaFaucetProvider`](IotaFaucetProvider.md)

Create a new instance of IotaWalletProvider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`IIotaFaucetProviderConfig`](../interfaces/IIotaFaucetProviderConfig.md) | The configuration to use. |

#### Returns

[`IotaFaucetProvider`](IotaFaucetProvider.md)

## Properties

### NAMESPACE

▪ `Static` **NAMESPACE**: `string` = `"iota"`

The namespace supported by the wallet provider.

## Methods

### fundAddress

▸ **fundAddress**(`address`, `timeoutInSeconds?`): `Promise`\<`bigint`\>

Fund the wallet from the faucet.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `address` | `string` | `undefined` | The bech32 encoded address of the address to fund. |
| `timeoutInSeconds` | `number` | `60` | The timeout in seconds to wait for the funding to complete. |

#### Returns

`Promise`\<`bigint`\>

The amount available on the wallet address.

#### Implementation of

IFaucetProvider.fundAddress

___

### getBalance

▸ **getBalance**(`address`): `Promise`\<`bigint`\>

Calculate the balance on an address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The bech32 encoded address to get the balance. |

#### Returns

`Promise`\<`bigint`\>

The amount available on the wallet address.
