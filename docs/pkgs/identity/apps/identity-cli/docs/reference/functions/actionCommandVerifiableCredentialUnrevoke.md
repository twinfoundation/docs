# Function: actionCommandVerifiableCredentialUnrevoke()

> **actionCommandVerifiableCredentialUnrevoke**(`opts`): `Promise`\<`void`\>

Action the verifiable credential unrevoke command.

## Parameters

### opts

The options for the command.

#### seed

`string`

The seed to generate the private key for the controller.

#### did

`string`

The id of the document to unrevoke the index.

#### revocationIndex

`string`

The revocation index for the credential.

#### node

`string`

The node URL.

## Returns

`Promise`\<`void`\>
