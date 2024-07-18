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

#### recipient

> **recipient**: `string`

The recipient for the NFT.

#### metadata?

> `optional` **metadata**: `unknown`

The metadata for the NFT.
