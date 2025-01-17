# Interface: IAttestationInformation

Interface describing the collated attestation information.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/attestation/"` \| \[`"https://schema.twindev.org/attestation/"`, `...string[]`\]

JSON-LD Context.

***

### type

> **type**: `"Information"`

JSON-LD Type.

***

### id

> **id**: `string`

The unique identifier of the attestation.

***

### dateCreated

> **dateCreated**: `string`

Created date/time of the attestation in ISO format.

***

### dateTransferred?

> `optional` **dateTransferred**: `string`

Transferred date/time of the attestation in ISO format, can be blank if holder identity is owner.

***

### ownerIdentity

> **ownerIdentity**: `string`

The identity of the owner.

***

### holderIdentity?

> `optional` **holderIdentity**: `string`

The identity of the current holder, can be undefined if owner is still the holder.

***

### attestationObject

> **attestationObject**: `IJsonLdNodeObject`

The data that was attested.

***

### proof?

> `optional` **proof**: `IJsonLdNodeObject`

The proof for the attested data.

***

### verified?

> `optional` **verified**: `boolean`

Whether the attestation has been verified.

***

### verificationFailure?

> `optional` **verificationFailure**: `string`

The verification failure message.
