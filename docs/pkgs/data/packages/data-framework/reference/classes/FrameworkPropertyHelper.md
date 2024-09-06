# Class: FrameworkPropertyHelper

Class to help with properties for framework types.

## Extends

- `PropertyHelper`

## Constructors

### new FrameworkPropertyHelper()

> **new FrameworkPropertyHelper**(): [`FrameworkPropertyHelper`](FrameworkPropertyHelper.md)

#### Returns

[`FrameworkPropertyHelper`](FrameworkPropertyHelper.md)

#### Inherited from

`PropertyHelper.constructor`

## Methods

### getValue()

> `static` **getValue**\<`T`, `U`\>(`properties`, `key`, `type`?): `undefined` \| `T`

Get property with the specific key.

#### Type parameters

• **T**

• **U** *extends* `IProperty` = `IProperty`

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

#### Inherited from

`PropertyHelper.getValue`

***

### setValue()

> `static` **setValue**\<`T`, `U`\>(`properties`, `key`, `type`, `value`, `additionalProperties`?): `void`

Set a property in to the list.

#### Type parameters

• **T**

• **U** *extends* `IProperty` = `IProperty`

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

#### Inherited from

`PropertyHelper.setValue`

***

### removeValue()

> `static` **removeValue**\<`U`\>(`properties`, `key`): `void`

Remove property with the specific key.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to look in.

• **key**: `string`

The key of the item to remove.

#### Returns

`void`

#### Inherited from

`PropertyHelper.removeValue`

***

### filterInclude()

> `static` **filterInclude**\<`U`\>(`properties`?, `includeKeys`?): `undefined` \| `U`[]

Reduce the keys in the property list.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties?**: `U`[]

The properties list to filter.

• **includeKeys?**: `string`[]

The keys to include.

#### Returns

`undefined` \| `U`[]

The filtered list.

#### Inherited from

`PropertyHelper.filterInclude`

***

### filterExclude()

> `static` **filterExclude**\<`U`\>(`properties`?, `excludeKeys`?): `undefined` \| `U`[]

Filter the keys from the properties.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties?**: `U`[]

The properties list to filter.

• **excludeKeys?**: `string`[]

The keys to filter.

#### Returns

`undefined` \| `U`[]

The filtered list.

#### Inherited from

`PropertyHelper.filterExclude`

***

### merge()

> `static` **merge**\<`U`\>(`properties1`?, `properties2`?): `U`[]

Merge two property lists.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties1?**: `U`[]

The current profile properties.

• **properties2?**: `U`[]

The new properties to merge in to the first list.

#### Returns

`U`[]

The merged list.

#### Inherited from

`PropertyHelper.merge`

***

### getUrn()

> `static` **getUrn**\<`U`\>(`properties`, `key`): `undefined` \| `string`

Get a urn from the list.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to get from.

• **key**: `string`

The key of the item to add.

#### Returns

`undefined` \| `string`

The value if found.

***

### setUrn()

> `static` **setUrn**\<`U`\>(`properties`, `key`, `value`, `additionalProperties`?): `void`

Set a urn in to the list.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to add to.

• **key**: `string`

The key of the item to add.

• **value**: `undefined` \| `string`

The value of the item to add.

• **additionalProperties?**: \{ \[key in string \| number \| symbol\]?: unknown \}

Additional properties to add to the item.

#### Returns

`void`

***

### getTimestampMilliseconds()

> `static` **getTimestampMilliseconds**\<`U`\>(`properties`, `key`): `undefined` \| `number`

Get a timestamp in milliseconds from the list.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to get from.

• **key**: `string`

The key of the item to add.

#### Returns

`undefined` \| `number`

The value if found.

***

### setTimestampMilliseconds()

> `static` **setTimestampMilliseconds**\<`U`\>(`properties`, `key`, `value`, `additionalProperties`?): `void`

Set a timestamp in milliseconds in to the list.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to add to.

• **key**: `string`

The key of the item to add.

• **value**: `undefined` \| `number`

The value of the item to add.

• **additionalProperties?**: \{ \[key in string \| number \| symbol\]?: unknown \}

Additional properties to add to the item.

#### Returns

`void`

***

### getTimestampSeconds()

> `static` **getTimestampSeconds**\<`U`\>(`properties`, `key`): `undefined` \| `number`

Get a timestamp in seconds from the list.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to get from.

• **key**: `string`

The key of the item to add.

#### Returns

`undefined` \| `number`

The value if found.

***

### setTimestampSeconds()

> `static` **setTimestampSeconds**\<`U`\>(`properties`, `key`, `value`, `additionalProperties`?): `void`

Set a timestamp in seconds in to the list.

#### Type parameters

• **U** *extends* `IProperty` = `IProperty`

#### Parameters

• **properties**: `undefined` \| `U`[]

The properties list to add to.

• **key**: `string`

The key of the item to add.

• **value**: `undefined` \| `number`

The value of the item to add.

• **additionalProperties?**: \{ \[key in string \| number \| symbol\]?: unknown \}

Additional properties to add to the item.

#### Returns

`void`
