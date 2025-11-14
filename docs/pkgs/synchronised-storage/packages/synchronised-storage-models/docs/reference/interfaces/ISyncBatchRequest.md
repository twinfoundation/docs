# Interface: ISyncBatchRequest

Request for a local batch.

## Properties

### storageKey

> **storageKey**: `string`

The key of the storage for the entities in the batch.

***

### batchSize

> **batchSize**: `number`

The size of the batch.

***

### requestMode

> **requestMode**: [`SyncNodeIdMode`](../type-aliases/SyncNodeIdMode.md)

Determines which entries are required, for local it will match the nodeId, for remote it will not include matching nodeId, for all it will include all entries.
