# Interface: IAttestationAttestRequest\<T\>

Attest the data and return the collated attestation details.

## Type parameters

• **T** = `unknown`

## Properties

### body

> **body**: `object`

The data to be used in the signing.

#### controllerAddress

> **controllerAddress**: `string`

The controller address for the attestation.

#### verificationMethodId

> **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

#### data

> **data**: `T`

The data object to attest.

#### namespace?

> `optional` **namespace**: `string`

The namespace of the connector to use for the attestation, defaults to service configured namespace.
