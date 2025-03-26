# Interface: IFaucetConnector

Interface describing a faucet connector.

## Extends

- `IComponent`

## Methods

### fundAddress()

> **fundAddress**(`identity`, `address`, `timeoutInSeconds`?): `Promise`\<`bigint`\>

Fund the wallet from the faucet.

#### Parameters

##### identity

`string`

The identity of the user to access the vault keys.

##### address

`string`

The bech32 encoded address of the address to fund.

##### timeoutInSeconds?

`number`

The timeout in seconds to wait for the funding to complete.

#### Returns

`Promise`\<`bigint`\>

The amount added to the address by the faucet.
