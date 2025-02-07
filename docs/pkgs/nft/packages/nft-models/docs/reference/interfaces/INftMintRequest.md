# Interface: INftMintRequest

Mint the data and return the NFT id.

## Properties

### body

> **body**: `object`

The data to be used in the minting.

#### tag

> **tag**: `string`

The tag for the NFT.

#### immutableMetadata?

> `optional` **immutableMetadata**: `unknown`

The immutable metadata for the NFT.

#### metadata?

> `optional` **metadata**: `unknown`

The metadata for the NFT.

#### namespace?

> `optional` **namespace**: `string`

The namespace of the connector to use for the NFT, defaults to component configured namespace.
