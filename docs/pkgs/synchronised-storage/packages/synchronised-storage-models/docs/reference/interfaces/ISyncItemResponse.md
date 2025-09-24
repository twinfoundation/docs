# Interface: ISyncItemResponse

Response for a sync item request.

## Properties

### storageKey

> **storageKey**: `string`

The key of the storage for the entities in the batch.

***

### id

> **id**: `string`

The id of the entity in the sync item response.

***

### entity?

> `optional` **entity**: [`ISynchronisedEntity`](ISynchronisedEntity.md)

The entity in the sync item response, undefined if not found.
