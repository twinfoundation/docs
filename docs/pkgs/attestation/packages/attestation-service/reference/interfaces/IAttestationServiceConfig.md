# Interface: IAttestationServiceConfig

Configuration for the Attestation Service.

## Properties

### defaultNamespace?

> `optional` **defaultNamespace**: `string`

What is the default connector to use for attestation. If not provided the first connector from the factory will be used.

***

### walletAddressIndex?

> `optional` **walletAddressIndex**: `number`

The wallet address index to use for funding and controlling the attestations.

#### Default

```ts
0
```

***

### excludeNodeIdentity?

> `optional` **excludeNodeIdentity**: `boolean`

The node identity automatically gets added to the data payload being attested. This can be excluded if required.

#### Default

```ts
false
```
