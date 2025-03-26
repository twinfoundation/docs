# Function: actionCommandNftTransfer()

> **actionCommandNftTransfer**(`opts`): `Promise`\<`void`\>

Action the nft transfer command.

## Parameters

### opts

The options for the command.

#### seed

`string`

The seed required for signing by the issuer.

#### id

`string`

The id of the NFT to transfer in urn format.

#### recipientIdentity

`string`

The recipient address of the NFT.

#### recipientAddress

`string`

The recipient address of the NFT.

#### connector?

[`NftConnectorTypes`](../type-aliases/NftConnectorTypes.md)

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
