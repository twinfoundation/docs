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

#### connector?

[`IdentityConnectorTypes`](../type-aliases/IdentityConnectorTypes.md)

The connector to perform the operations with.

#### node

`string`

The node URL.

#### network?

`string`

The network to use for connector.

## Returns

`Promise`\<`void`\>
