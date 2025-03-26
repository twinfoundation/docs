# Function: actionCommandTransfer()

> **actionCommandTransfer**(`opts`): `Promise`\<`void`\>

Action the transfer command.

## Parameters

### opts

The options for the command.

#### seed

`string`

The seed to use for the wallet.

#### address

`string`

The address to source the funds from.

#### destAddress

`string`

The address to send the funds to.

#### amount

`string`

The amount of funds to transfer.

#### connector?

[`WalletConnectorTypes`](../type-aliases/WalletConnectorTypes.md)

The connector to perform the operations with.

#### node

`string`

The node URL.

#### network?

`string`

The network to use for the connector.

#### explorer

`string`

The explorer URL.

## Returns

`Promise`\<`void`\>
