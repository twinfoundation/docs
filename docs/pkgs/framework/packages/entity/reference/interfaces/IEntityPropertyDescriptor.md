# Interface: IEntityPropertyDescriptor\<T\>

Definition of an entity property.

## Type parameters

| Name |
| :--- |
| `T`  |

## Properties

### format

• `Optional` **format**: `string`

An additional hint for the format of the data.

---

### isPrimary

• `Optional` **isPrimary**: `boolean`

Is this the primary index property.

---

### isSecondary

• `Optional` **isSecondary**: `boolean`

Is this a secondary index property.

---

### itemType

• `Optional` **itemType**: `string`

The type of the item (only applies when type is either `list` or `object`).

---

### optional

• `Optional` **optional**: `boolean`

Is the property optional.

---

### property

• **property**: keyof `T`

The name of the property.

---

### size

• `Optional` **size**: `number`

The length of the property if applicable.

---

### sortDirection

• `Optional` **sortDirection**: [`SortDirection`](../enums/SortDirection.md)

Default sort direction for this column, leave empty if not sortable.

---

### type

• **type**: [`EntityPropertyDescriptorDataType`](../modules.md#entitypropertydescriptordatatype)

The type of the property.
