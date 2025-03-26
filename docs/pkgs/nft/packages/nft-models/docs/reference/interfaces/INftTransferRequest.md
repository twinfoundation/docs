# Interface: INftTransferRequest

Transfer the NFT and update the metadata.

## Properties

### pathParams

> **pathParams**: `object`

The data to be used in the transfer.

#### id

> **id**: `string`

The id of the NFT to transfer in urn format.

***

### body

> **body**: `object`

The data to be used in the transfer.

#### recipientIdentity

> **recipientIdentity**: `string`

The recipient identity for the NFT.

#### recipientAddress

> **recipientAddress**: `string`

The recipient address for the NFT.

#### metadata?

> `optional` **metadata**: `unknown`

The metadata for the NFT.
