# Function: actionCommandNftBurn()

> **actionCommandNftBurn**(`opts`): `Promise`\<`void`\>

Action the nft burn command.

## Parameters

### opts

The options for the command.

#### seed

`string`

The seed required for signing by the issuer.

#### id

`string`

The id of the NFT to burn in urn format.

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
