# Interface: IGasStationExecuteResponse

Interface for the gas station execute transaction response.

## Properties

### effects

> **effects**: `object`

The transaction effects from the IOTA network.
This contains the full IOTA transaction effects object.

#### Index Signature

\[`key`: `string`\]: `unknown`

Additional effects data from the IOTA network.
This includes messageVersion, status, executedEpoch, gasUsed, etc.

#### transactionDigest

> **transactionDigest**: `string`

The transaction digest.

***

### error?

> `optional` **error**: `string` \| `null`

Error message if the request failed.
