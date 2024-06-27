# Function: actionCommandAttestationTransfer()

> **actionCommandAttestationTransfer**(`opts`): `Promise`\<`void`\>

Action the attestation transfer command.

## Parameters

• **opts**

The options for the command.

• **opts.seed**: `string`

The seed required for signing by the issuer.

• **opts.id**: `string`

The id of the attestation to transfer in urn format.

• **opts.holderAddress**: `string`

The new holder address of the attestation.

• **opts.holderIdentity**: `string`

The new holder identity of the attestation.

• **opts.node**: `string`

The node URL.

• **opts.explorer**: `string`

The explorer URL.

## Returns

`Promise`\<`void`\>
