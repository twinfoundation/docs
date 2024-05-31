# Interface: IIrc27Metadata

Model defining the IRC27 NFT Standards.
https://github.com/iotaledger/tips/blob/main/tips/TIP-0027/tip-0027.md

## Properties

### standard

> **standard**: `"IRC27"`

The standard marker.

***

### version

> **version**: `"v1.0"`

The version

***

### type

> **type**: `string`

A mime type for the content of the NFT.

***

### uri

> **uri**: `string`

Url pointing to the NFT file location with MIME type defined in type.

***

### name

> **name**: `string`

Alphanumeric text string defining the human identifiable name for the NFT

***

### collectionName?

> `optional` **collectionName**: `string`

Alphanumeric text string defining the human identifiable collection name.

***

### royalties?

> `optional` **royalties**: `object`

Object containing key value pair where payment address mapped to the payout percentage.

#### Index signature

 \[`id`: `string`\]: `number`

***

### issuerName?

> `optional` **issuerName**: `string`

Alphanumeric text string to define the human identifiable name of the creator.

***

### description?

> `optional` **description**: `string`

Alphanumeric text string to define a basic description of the NFT.

***

### attributes?

> `optional` **attributes**: `object`[]

Array objects defining additional attributes of the NFT
