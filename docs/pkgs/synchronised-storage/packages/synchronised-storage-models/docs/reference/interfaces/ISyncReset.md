# Interface: ISyncReset

Request to reset the local storage.

## Properties

### storageKey

> **storageKey**: `string`

The key of the storage for the entities in the batch.

***

### resetMode

> **resetMode**: [`SyncNodeIdentityMode`](../type-aliases/SyncNodeIdentityMode.md)

Reset mode, this will use the nodeIdentity in the entities to determine which are local/remote.
