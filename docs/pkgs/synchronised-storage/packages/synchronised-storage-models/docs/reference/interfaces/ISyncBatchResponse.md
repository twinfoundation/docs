# Interface: ISyncBatchResponse

Response for a local batch.

## Properties

### storageKey

> **storageKey**: `string`

The key of the storage for the entities in the batch.

***

### entities

> **entities**: [`ISynchronisedEntity`](ISynchronisedEntity.md)[]

The entities in the batch.

***

### lastEntry

> **lastEntry**: `boolean`

Is this the last entry in the batch?
