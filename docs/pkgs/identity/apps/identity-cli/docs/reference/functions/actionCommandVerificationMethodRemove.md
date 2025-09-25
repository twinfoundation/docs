# Function: actionCommandVerificationMethodRemove()

> **actionCommandVerificationMethodRemove**(`opts`): `Promise`\<`void`\>

Action the verification method remove command.

## Parameters

### opts

The options for the command.

#### seed

`string`

The private key for the controller.

#### id

`string`

The id of the verification method to remove.

#### addressIndex?

`string`

The address index to use for key derivation (if applicable).

#### connector?

`"iota"`

The connector to perform the operations with.

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
