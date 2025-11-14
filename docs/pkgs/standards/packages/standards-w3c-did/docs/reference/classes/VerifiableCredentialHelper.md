# Class: VerifiableCredentialHelper

Helper methods for creating and verifying proofs.

## Constructors

### Constructor

> **new VerifiableCredentialHelper**(): `VerifiableCredentialHelper`

#### Returns

`VerifiableCredentialHelper`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### getValidUntil()

> `static` **getValidUntil**(`verifiableCredential`): `string` \| `undefined`

Get the valid until date from a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to extract the expiration date from.

#### Returns

`string` \| `undefined`

The expiration date, if available.

***

### getValidFrom()

> `static` **getValidFrom**(`verifiableCredential`): `string` \| `undefined`

Get the valid from from a verifiable credential.

#### Parameters

##### verifiableCredential

[`IDidVerifiableCredential`](../type-aliases/IDidVerifiableCredential.md)

The verifiable credential to extract the issuance date from.

#### Returns

`string` \| `undefined`

The issuance date, if available.
