# Interface: IFaucetProvider

Interface describing a faucet.

## Methods

### fundAddress

▸ **fundAddress**(`address`, `timeoutInSeconds?`): `Promise`\<`bigint`\>

Fund the wallet from the faucet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The bech32 encoded address of the address to fund. |
| `timeoutInSeconds?` | `number` | The timeout in seconds to wait for the funding to complete. |

#### Returns

`Promise`\<`bigint`\>

The amount available on the wallet address.
