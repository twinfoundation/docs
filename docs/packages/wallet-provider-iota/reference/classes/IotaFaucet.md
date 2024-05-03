# Class: IotaFaucet

Class for performing faucet operations on IOTA.

## Implements

- `IFaucet`

## Constructors

### constructor

• **new IotaFaucet**(`config`): [`IotaFaucet`](IotaFaucet.md)

Create a new instance of IotaWalletProvider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`IIotaFaucetConfig`](../interfaces/IIotaFaucetConfig.md) | The configuration to use. |

#### Returns

[`IotaFaucet`](IotaFaucet.md)

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

IFaucet.fundAddress

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
