# Interface: IAuditableItemGraphChange

Interface describing a change in a property.

## Properties

### itemType

> **itemType**: `string`

Which item type was changed.

***

### parentId?

> `optional` **parentId**: `string`

Which item is the parent of this change.

***

### operation

> **operation**: `"add"` \| `"delete"`

The operation that was performed on the item.

***

### properties

> **properties**: `object`

The properties from the modified object.

#### Index signature

 \[`id`: `string`\]: `unknown`
