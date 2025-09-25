# Interface: IVerifiableCredentialAuthenticationGeneratorConfig

Configuration for the Verifiable Credential Authentication Generator.

## Properties

### tokenTtlInSeconds?

> `optional` **tokenTtlInSeconds**: `number`

The time-to-live (TTL) for token in seconds.

#### Default

```ts
60 (1 minute)
```

***

### verificationMethodId

> **verificationMethodId**: `string`

The id of the identity method to use when creating/verifying tokens.
