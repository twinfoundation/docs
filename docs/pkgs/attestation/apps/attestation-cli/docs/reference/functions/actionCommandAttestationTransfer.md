# Function: actionCommandAttestationTransfer()

> **actionCommandAttestationTransfer**(`opts`): `Promise`\<`void`\>

Action the attestation transfer command.

## Parameters

### opts

The options for the command.

#### seed

`string`

The seed required for signing by the issuer.

#### id

`string`

The id of the attestation to transfer in urn format.

#### holderIdentity

`string`

The new holder identity of the attestation.

#### holderAddress

`string`

The new holder address of the attestation.

#### node

`string`

The node URL.

#### network?

`string`

The network to use for connector.

#### explorer

`string`

The explorer URL.

## Returns

`Promise`\<`void`\>
