# Interface: IAttestationInformation\<T\>

Interface describing the collated attestation information.

## Type parameters

• **T** = `unknown`

## Properties

### id

> **id**: `string`

The unique identifier of the attestation.

***

### created

> **created**: `string`

Created date/time of the attestation in ISO format.

***

### ownerIdentity

> **ownerIdentity**: `string`

The identity of the owner.

***

### transferred?

> `optional` **transferred**: `string`

Transferred date/time of the attestation in ISO format, can be blank if holder identity is owner.

***

### holderIdentity?

> `optional` **holderIdentity**: `string`

The identity of the current holder, can be undefined if owner is still the holder.

***

### data

> **data**: `T`

The data that was attested.

***

### proof

> **proof**: [`IAttestationProof`](IAttestationProof.md)

The proof for the attested data.
