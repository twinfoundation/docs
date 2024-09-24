# Interface: IAttestationVerifyResponse

The response to verifying the attestation.

## Properties

### body

> **body**: `object`

The data returned from the verification response.

#### verified

> **verified**: `boolean`

Whether the attestation is verified.

#### failure?

> `optional` **failure**: `string`

The failure message if the attestation is not verified.

#### information?

> `optional` **information**: `Partial`\<[`IAttestationInformation`](IAttestationInformation.md)\<`IJsonLdNodeObject`\>\>

The attestation information.
