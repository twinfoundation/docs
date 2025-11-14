# Class: EntitySchemaHelper

Class to help with entity schema operations.

## Constructors

### Constructor

> **new EntitySchemaHelper**(): `EntitySchemaHelper`

#### Returns

`EntitySchemaHelper`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### getSchema()

> `static` **getSchema**\<`T`\>(`target`): [`IEntitySchema`](../interfaces/IEntitySchema.md)\<`T`\>

Get the schema for the specified object.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### target

`any`

The object to get the schema data for.

#### Returns

[`IEntitySchema`](../interfaces/IEntitySchema.md)\<`T`\>

The schema for the object if it can be found.

***

### getPrimaryKey()

> `static` **getPrimaryKey**\<`T`\>(`entitySchema`): [`IEntitySchemaProperty`](../interfaces/IEntitySchemaProperty.md)\<`T`\>

Get the primary key from the entity schema.

#### Type Parameters

##### T

`T`

#### Parameters

##### entitySchema

[`IEntitySchema`](../interfaces/IEntitySchema.md)\<`T`\>

The entity schema to find the primary key from.

#### Returns

[`IEntitySchemaProperty`](../interfaces/IEntitySchemaProperty.md)\<`T`\>

The key if only one was found.

#### Throws

If no primary key was found, or more than one.

***

### getSortProperties()

> `static` **getSortProperties**\<`T`\>(`entitySchema`): [`IEntitySort`](../interfaces/IEntitySort.md)\<`T`\>[] \| `undefined`

Get the sort properties from the schema.

#### Type Parameters

##### T

`T`

#### Parameters

##### entitySchema

[`IEntitySchema`](../interfaces/IEntitySchema.md)\<`T`\>

The entity schema to find the primary key from.

#### Returns

[`IEntitySort`](../interfaces/IEntitySort.md)\<`T`\>[] \| `undefined`

The sort keys from the schema or undefined if there are none.

***

### buildSortProperties()

> `static` **buildSortProperties**\<`T`\>(`entitySchema`, `overrideSortKeys?`): [`IEntitySort`](../interfaces/IEntitySort.md)\<`T`\>[] \| `undefined`

Build sort properties from the schema and override if necessary.

#### Type Parameters

##### T

`T`

#### Parameters

##### entitySchema

[`IEntitySchema`](../interfaces/IEntitySchema.md)\<`T`\>

The entity schema to retrieve the default sort keys.

##### overrideSortKeys?

`object`[]

The override sort keys.

#### Returns

[`IEntitySort`](../interfaces/IEntitySort.md)\<`T`\>[] \| `undefined`

The finalised sort keys.

***

### validateEntity()

> `static` **validateEntity**\<`T`\>(`entity`, `entitySchema`): `void`

Validate the entity against the schema.

#### Type Parameters

##### T

`T`

#### Parameters

##### entity

`T`

The entity to validate.

##### entitySchema

[`IEntitySchema`](../interfaces/IEntitySchema.md)\<`T`\>

The schema to validate against.

#### Returns

`void`

#### Throws

If the entity is invalid.
