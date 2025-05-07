# Function: actionCommandVerifiableCredentialRevoke()

> **actionCommandVerifiableCredentialRevoke**(`opts`): `Promise`\<`void`\>

Action the verifiable credential revoke command.

## Parameters

### opts

The options for the command.

#### seed

`string`

The seed to generate the private key for the controller.

#### did

`string`

The id of the document to revoke the index.

#### revocationIndex

`string`

The revocation index for the credential.

#### connector?

`"iota"`

The connector to perform the operations with.

#### node

`string`

The node URL.

#### network?

`string`

The network to use for connector.

## Returns

`Promise`\<`void`\>
