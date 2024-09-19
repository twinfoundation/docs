# Function: actionCommandVerifiableCredentialUnrevoke()

> **actionCommandVerifiableCredentialUnrevoke**(`opts`): `Promise`\<`void`\>

Action the verifiable credential unrevoke command.

## Parameters

• **opts**

The options for the command.

• **opts.seed**: `string`

The seed to generate the private key for the controller.

• **opts.did**: `string`

The id of the document to unrevoke the index.

• **opts.revocationIndex**: `string`

The revocation index for the credential.

• **opts.node**: `string`

The node URL.

## Returns

`Promise`\<`void`\>
