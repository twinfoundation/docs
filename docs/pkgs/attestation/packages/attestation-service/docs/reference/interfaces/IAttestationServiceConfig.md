# Interface: IAttestationServiceConfig

Configuration for the Attestation Service.

## Properties

### defaultNamespace?

> `optional` **defaultNamespace**: `string`

What is the default connector to use for attestation. If not provided the first connector from the factory will be used.

***

### verificationMethodId?

> `optional` **verificationMethodId**: `string`

The verification method id to use for the attestation.

#### Default

```ts
attestation-assertion
```
