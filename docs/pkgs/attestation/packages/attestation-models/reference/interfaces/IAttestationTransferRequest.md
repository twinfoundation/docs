# Interface: IAttestationTransferRequest

Transfer the attestation to a new holder.

## Properties

### pathParams

> **pathParams**: `object`

The parameters to be used in the transfer.

#### id

> **id**: `string`

The attestation id to verify.

***

### body

> **body**: `object`

The parameters to be used in the transfer.

#### holderIdentity

> **holderIdentity**: `string`

The new holder identity.

#### holderAddress

> **holderAddress**: `string`

The new holder controller address.
