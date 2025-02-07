# Interface: IIdentityProofVerifyRequest

Request to verify a proof.

## Properties

### body

> **body**: `object`

The data for the request.

#### bytes

> **bytes**: `string`

The data bytes base64 encoded.

#### proof

> **proof**: `IDidProof`

The proof to verify.
