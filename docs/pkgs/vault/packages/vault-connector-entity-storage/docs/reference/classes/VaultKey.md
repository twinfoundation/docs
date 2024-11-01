# Class: VaultKey

Class defining a vault key.

## Constructors

### new VaultKey()

> **new VaultKey**(): [`VaultKey`](VaultKey.md)

#### Returns

[`VaultKey`](VaultKey.md)

## Properties

### id

> **id**: `string`

The id.

***

### type

> **type**: `VaultKeyType`

The type of the key e.g. Ed25519, Secp256k1.

***

### privateKey

> **privateKey**: `string`

The private key in base64 format.

***

### publicKey?

> `optional` **publicKey**: `string`

The public key in base64 format.
