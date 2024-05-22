# Interface: IAttestationSignRequest

Sign the data set and return the proof.

## Properties

### body

> **body**: `object`

The data to be used in the signing.

#### data

> **data**: `string`

The base64 encoded data to sign.

#### keyId

> **keyId**: `string`

The key id from a vault to sign the data.

#### namespace?

> `optional` **namespace**: `string`

The namespace to store the data in, defaults to service configured namespace.
