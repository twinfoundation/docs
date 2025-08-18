# Class: SyncSnapshotEntry\<T\>

Class representing an entry for the sync snapshot.

## Type Parameters

### T

`T` *extends* `ISynchronisedEntity` = `ISynchronisedEntity`

## Constructors

### Constructor

> **new SyncSnapshotEntry**\<`T`\>(): `SyncSnapshotEntry`\<`T`\>

#### Returns

`SyncSnapshotEntry`\<`T`\>

## Properties

### id

> **id**: `string`

The id for the snapshot.

***

### version

> **version**: `string`

The version for the snapshot.

***

### storageKey

> **storageKey**: `string`

The storage key for the snapshot i.e. which entity is being synchronized.

***

### dateCreated

> **dateCreated**: `string`

The date the snapshot was created.

***

### dateModified

> **dateModified**: `string`

The date the snapshot was last modified.

***

### isLocal

> **isLocal**: `boolean`

The flag to determine if this is the snapshot is the local one containing changes for this node.

***

### isConsolidated

> **isConsolidated**: `boolean`

The flag to determine if this is a consolidated snapshot.

***

### epoch

> **epoch**: `number`

The epoch for the changeset.

***

### changeSetStorageIds?

> `optional` **changeSetStorageIds**: `string`[]

The ids of the storage for the change sets in the snapshot, if this is not a local snapshot.

***

### changes?

> `optional` **changes**: `ISyncChange`\<`T`\>[]

The changes that were made in this snapshot, if this is a local snapshot.
