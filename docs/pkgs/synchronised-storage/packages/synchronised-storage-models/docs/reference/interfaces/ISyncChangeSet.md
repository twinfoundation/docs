# Interface: ISyncChangeSet

The object definition for a sync change set.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/synchronised-storage"`

The LD Context for the change set.

***

### type

> **type**: `"ChangeSet"`

The LD Type for the change set.

***

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

### nodeId

> **nodeId**: `string`

The identity of the node that created the change set.

***

### changes

> **changes**: [`ISyncChange`](ISyncChange.md)[]

The changes to apply after a snapshot.
