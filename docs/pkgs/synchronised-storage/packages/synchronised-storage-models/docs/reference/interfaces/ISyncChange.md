# Interface: ISyncChange\<T\>

The object definition for a sync change.

## Type Parameters

### T

`T` *extends* [`ISynchronisedEntity`](ISynchronisedEntity.md) = [`ISynchronisedEntity`](ISynchronisedEntity.md)

## Properties

### operation

> **operation**: [`SyncChangeOperation`](../type-aliases/SyncChangeOperation.md)

Operation.

***

### id

> **id**: `string`

The item id.

***

### entity?

> `optional` **entity**: `Omit`\<`T`, `"id"` \| `"nodeIdentity"`\>

The entity to set.
