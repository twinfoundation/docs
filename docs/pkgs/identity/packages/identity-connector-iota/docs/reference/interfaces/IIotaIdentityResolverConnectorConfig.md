# Interface: IIotaIdentityResolverConnectorConfig

Configuration for the IOTA Identity Resolver Connector.

## Extends

- [`IIotaIdentityConnectorConfig`](IIotaIdentityConnectorConfig.md)

## Properties

### walletAddressIndex?

> `optional` **walletAddressIndex**: `number`

The wallet address index to use for funding and controlling the identity.

#### Default

```ts
0
```

#### Inherited from

[`IIotaIdentityConnectorConfig`](IIotaIdentityConnectorConfig.md).[`walletAddressIndex`](IIotaIdentityConnectorConfig.md#walletaddressindex)

***

### identityPkgId?

> `optional` **identityPkgId**: `string`

The package ID for the identity contract on the network.
If not provided, a default value will be used based on the detected network type.
For testnet: "0x222741bbdff74b42df48a7b4733185e9b24becb8ccfbafe8eac864ab4e4cc555"
For devnet: "0x03242ae6b87406bd0eb5d669fbe874ed4003694c0be9c6a9ee7c315e6461a553"

#### Inherited from

[`IIotaIdentityConnectorConfig`](IIotaIdentityConnectorConfig.md).[`identityPkgId`](IIotaIdentityConnectorConfig.md#identitypkgid)

***

### standardGasPrice?

> `optional` **standardGasPrice**: `number`

The standard gas price in nanos per computation unit for gas station transactions.
(1 Nano = 0.000000001 IOTA)
This should match the protocol's reference gas price.

#### Default

```ts
1000
```

#### Inherited from

[`IIotaIdentityConnectorConfig`](IIotaIdentityConnectorConfig.md).[`standardGasPrice`](IIotaIdentityConnectorConfig.md#standardgasprice)
