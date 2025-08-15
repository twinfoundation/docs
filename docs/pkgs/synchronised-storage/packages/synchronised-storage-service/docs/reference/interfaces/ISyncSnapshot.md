# Interface: ISyncSnapshot

The object definition for a sync snapshot.

## Properties

### version

> **version**: `string`

The version of the sync state.

***

### id

> **id**: `string`

The id of the snapshot.

***

### dateCreated

> **dateCreated**: `string`

The date the snapshot was created.

***

### dateModified

> **dateModified**: `string`

The date the snapshot was last modified.

***

### isConsolidated

> **isConsolidated**: `boolean`

Is this a consolidated snapshot?

***

### epoch

> **epoch**: `number`

The epoch of the snapshot.

***

### changeSetStorageIds

> **changeSetStorageIds**: `string`[]

The ids of the storage for the change sets in the snapshot.
