# Interface: IAuditableItemGraphCredential

The data stored immutably for the graph in a verifiable credential.

## Properties

### created

> **created**: `number`

The timestamp of when the changeset was created.

***

### userIdentity

> **userIdentity**: `string`

The user identity that created the changes.

***

### signature

> **signature**: `string`

The signature for the changeset.

***

### hash

> **hash**: `string`

The signature for the changeset.

***

### integrity?

> `optional` **integrity**: `string`

The integrity data for this changeset, encrypted.
