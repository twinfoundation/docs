# Class: PropertyHelper

Class to help with properties.

## Constructors

### new PropertyHelper()

> **new PropertyHelper**(): [`PropertyHelper`](PropertyHelper.md)

#### Returns

[`PropertyHelper`](PropertyHelper.md)

## Methods

### getValue()

> `static` **getValue**\<`T`, `U`\>(`properties`, `key`, `type`?): `undefined` \| `T`

Get property with the specific key.

#### Type parameters

• **T**

• **U** *extends* [`IProperty`](../interfaces/IProperty.md) = [`IProperty`](../interfaces/IProperty.md)

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to look in.

• **key**: `string`

The key of the item to find.

• **type?**: `string`

Will only return the value if the type matches or is undefined.

#### Returns

`undefined` \| `T`

The item if it was found.

***

### setValue()

> `static` **setValue**\<`T`, `U`\>(`properties`, `key`, `type`, `value`, `additionalProperties`?): `void`

Set a property in to the list.

#### Type parameters

• **T**

• **U** *extends* [`IProperty`](../interfaces/IProperty.md) = [`IProperty`](../interfaces/IProperty.md)

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to add to.

• **key**: `string`

The key of the item to add.

• **type**: `string`

The type of the item to add.

• **value**: `undefined` \| `T`

The value of the item to add.

• **additionalProperties?**: \{ \[key in string \| number \| symbol\]?: unknown \}

Additional properties to add to the item.

#### Returns

`void`

***

### removeValue()

> `static` **removeValue**\<`U`\>(`properties`, `key`): `void`

Remove property with the specific key.

#### Type parameters

• **U** *extends* [`IProperty`](../interfaces/IProperty.md) = [`IProperty`](../interfaces/IProperty.md)

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to look in.

• **key**: `string`

The key of the item to remove.

#### Returns

`void`

***

### filterInclude()

> `static` **filterInclude**\<`U`\>(`properties`?, `includeKeys`?): `undefined` \| `U`[]

Reduce the keys in the property list.

#### Type parameters

• **U** *extends* [`IProperty`](../interfaces/IProperty.md) = [`IProperty`](../interfaces/IProperty.md)

#### Parameters

• **properties?**: `U`[]

The properties list to filter.

• **includeKeys?**: `string`[]

The keys to include.

#### Returns

`undefined` \| `U`[]

The filtered list.

***

### filterExclude()

> `static` **filterExclude**\<`U`\>(`properties`?, `excludeKeys`?): `undefined` \| `U`[]

Filter the keys from the properties.

#### Type parameters

• **U** *extends* [`IProperty`](../interfaces/IProperty.md) = [`IProperty`](../interfaces/IProperty.md)

#### Parameters

• **properties?**: `U`[]

The properties list to filter.

• **excludeKeys?**: `string`[]

The keys to filter.

#### Returns

`undefined` \| `U`[]

The filtered list.

***

### merge()

> `static` **merge**\<`U`\>(`properties1`?, `properties2`?): `U`[]

Merge two property lists.

#### Type parameters

• **U** *extends* [`IProperty`](../interfaces/IProperty.md) = [`IProperty`](../interfaces/IProperty.md)

#### Parameters

• **properties1?**: `U`[]

The current profile properties.

• **properties2?**: `U`[]

The new properties to merge in to the first list.

#### Returns

`U`[]

The merged list.
