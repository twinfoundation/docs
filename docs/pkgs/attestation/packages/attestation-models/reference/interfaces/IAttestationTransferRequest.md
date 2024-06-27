# Interface: IAttestationTransferRequest

Transfer the attestation to a new holder.

## Properties

### path

> **path**: `object`

The parameters to be used in the transfer.

#### attestationId

> **attestationId**: `string`

The attestation id to verify.

***

### body

> **body**: `object`

The parameters to be used in the transfer.

#### holderControllerAddress

> **holderControllerAddress**: `string`

The new holder controller address.

#### holderIdentity

> **holderIdentity**: `string`

The new holder identity.
