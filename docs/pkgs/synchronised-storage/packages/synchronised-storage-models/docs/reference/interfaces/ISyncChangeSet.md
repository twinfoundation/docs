# Interface: ISyncChangeSet\<T\>

The object definition for a sync change set.

## Type Parameters

### T

`T` *extends* [`ISynchronisedEntity`](ISynchronisedEntity.md) = [`ISynchronisedEntity`](ISynchronisedEntity.md)

## Properties

### id

> **id**: `string`

The id of the change set.

***

### storageKey

> **storageKey**: `string`

The storage key of the change set. This is used to identify the entities being synchronised.

***

### dateCreated

> **dateCreated**: `string`

The date the change set was created.

***

### dateModified

> **dateModified**: `string`

The date the change set was last modified.

***

### changes

> **changes**: [`ISyncChange`](ISyncChange.md)\<`T`\>[]

The changes to apply after a snapshot.

***

### nodeIdentity

> **nodeIdentity**: `string`

The identity of the node that created the change set.

***

### proof?

> `optional` **proof**: `IProof`

The proof for the change set.
