# Class: AuditableItemGraphProperty

Class representing property in an auditable item graph.

## Constructors

### new AuditableItemGraphProperty()

> **new AuditableItemGraphProperty**(): [`AuditableItemGraphProperty`](AuditableItemGraphProperty.md)

#### Returns

[`AuditableItemGraphProperty`](AuditableItemGraphProperty.md)

## Properties

### id

> **id**: `string`

The id of the property.

***

### created

> **created**: `number`

The timestamp of when the property was created.

***

### deleted?

> `optional` **deleted**: `number`

The timestamp of when the property was deleted, as we never actually remove items.

***

### type

> **type**: `string`

Is type of the item.

***

### value

> **value**: `unknown`

The value for the item.
