# Class: AuditableItemGraphResource

Class describing the auditable item graph vertex resource.

## Constructors

### new AuditableItemGraphResource()

> **new AuditableItemGraphResource**(): [`AuditableItemGraphResource`](AuditableItemGraphResource.md)

#### Returns

[`AuditableItemGraphResource`](AuditableItemGraphResource.md)

## Properties

### id

> **id**: `string`

The id of the resource.

***

### dateCreated

> **dateCreated**: `string`

The date/time of when the resource was created.

***

### dateModified?

> `optional` **dateModified**: `string`

The date/time of when the resource was last modified.

***

### dateDeleted?

> `optional` **dateDeleted**: `string`

The timestamp of when the resource was deleted, as we never actually remove items.

***

### resourceObject?

> `optional` **resourceObject**: `IJsonLdNodeObject`

Object to associate with the resource as JSON-LD.
