# Interface: IEntitySortDescriptor\<T\>

Definition of an entity property sort details.

## Type parameters

| Name |
| :--- |
| `T`  |

## Properties

### property

• **property**: keyof `T`

The name of the property.

---

### sortDirection

• **sortDirection**: [`SortDirection`](../enums/SortDirection.md)

Default sort direction for this column, leave empty if not sortable.

---

### type

• **type**: [`EntityPropertyDescriptorDataType`](../modules.md#entitypropertydescriptordatatype)

The type of the property.
