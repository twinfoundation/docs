# Interface: ISyncReset

Request to reset the local storage.

## Properties

### storageKey

> **storageKey**: `string`

The key of the storage for the entities in the batch.

***

### resetMode

> **resetMode**: [`SyncNodeIdMode`](../type-aliases/SyncNodeIdMode.md)

Reset mode, this will use the nodeId in the entities to determine which are local/remote.
