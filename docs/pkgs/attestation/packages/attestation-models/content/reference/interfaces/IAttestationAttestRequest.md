# Interface: IAttestationAttestRequest

Attest the data and return the collated attestation details.

## Properties

### body

> **body**: `object`

The data to be used in the signing.

#### verificationMethodId

> **verificationMethodId**: `string`

The identity verification method to use for attesting the data.

#### data

> **data**: `unknown`

The data object to attest.

#### namespace?

> `optional` **namespace**: `string`

The namespace of the connector to use for the attestation, defaults to component configured namespace.
