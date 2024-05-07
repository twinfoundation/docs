# Class: PropertyHelper

Class to help with properties.

## Constructors

### constructor

• **new PropertyHelper**(): [`PropertyHelper`](PropertyHelper.md)

#### Returns

[`PropertyHelper`](PropertyHelper.md)

## Methods

### filterExclude

▸ **filterExclude**(`properties?`, `excludeKeys?`): `undefined` \| [`IProperty`](../interfaces/IProperty.md)[]

Filter the keys from the properties.

#### Parameters

| Name           | Type                                        | Description                    |
| :------------- | :------------------------------------------ | :----------------------------- |
| `properties?`  | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to filter. |
| `excludeKeys?` | `string`[]                                  | The keys to filter.            |

#### Returns

`undefined` \| [`IProperty`](../interfaces/IProperty.md)[]

The filtered list.

---

### filterInclude

▸ **filterInclude**(`properties?`, `includeKeys?`): `undefined` \| [`IProperty`](../interfaces/IProperty.md)[]

Reduce the keys in the property list.

#### Parameters

| Name           | Type                                        | Description                    |
| :------------- | :------------------------------------------ | :----------------------------- |
| `properties?`  | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to filter. |
| `includeKeys?` | `string`[]                                  | The keys to include.           |

#### Returns

`undefined` \| [`IProperty`](../interfaces/IProperty.md)[]

The filtered list.

---

### getBoolean

▸ **getBoolean**(`properties`, `key`): `undefined` \| `boolean`

Get a boolean from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `boolean`

The value if found.

---

### getDate

▸ **getDate**(`properties`, `key`): `undefined` \| `Date`

Get a date from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `Date`

The value if found.

---

### getDateTime

▸ **getDateTime**(`properties`, `key`): `undefined` \| `Date`

Get a date time from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `Date`

The value if found.

---

### getFloat

▸ **getFloat**(`properties`, `key`): `undefined` \| `number`

Get a float from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `number`

The value if found.

---

### getInteger

▸ **getInteger**(`properties`, `key`): `undefined` \| `number`

Get an integer from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `number`

The value if found.

---

### getText

▸ **getText**(`properties`, `key`): `undefined` \| `string`

Get some text from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `string`

The value if found.

---

### getTime

▸ **getTime**(`properties`, `key`): `undefined` \| `Date`

Get a time from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `Date`

The value if found.

---

### getTimestampMilliseconds

▸ **getTimestampMilliseconds**(`properties`, `key`): `undefined` \| `number`

Get a timestamp in milliseconds from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `number`

The value if found.

---

### getTimestampSeconds

▸ **getTimestampSeconds**(`properties`, `key`): `undefined` \| `number`

Get a timestamp in seconds from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `number`

The value if found.

---

### getUrn

▸ **getUrn**(`properties`, `key`): `undefined` \| `string`

Get a urn from the list.

#### Parameters

| Name         | Type                                                       | Description                      |
| :----------- | :--------------------------------------------------------- | :------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to get from. |
| `key`        | `string`                                                   | The key of the item to add.      |

#### Returns

`undefined` \| `string`

The value if found.

---

### getValue

▸ **getValue**\<`T`\>(`properties`, `key`, `type?`): `undefined` \| `T`

Get property with the specific key.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                       | Description                                                     |
| :----------- | :--------------------------------------------------------- | :-------------------------------------------------------------- |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to look in.                                 |
| `key`        | `string`                                                   | The key of the item to find.                                    |
| `type?`      | `string`                                                   | Will only return the value if the type matches or is undefined. |

#### Returns

`undefined` \| `T`

The item if it was found.

---

### merge

▸ **merge**(`properties1?`, `properties2?`): [`IProperty`](../interfaces/IProperty.md)[]

Merge two property lists.

#### Parameters

| Name           | Type                                        | Description                                       |
| :------------- | :------------------------------------------ | :------------------------------------------------ |
| `properties1?` | [`IProperty`](../interfaces/IProperty.md)[] | The current profile properties.                   |
| `properties2?` | [`IProperty`](../interfaces/IProperty.md)[] | The new properties to merge in to the first list. |

#### Returns

[`IProperty`](../interfaces/IProperty.md)[]

The merged list.

---

### removeValue

▸ **removeValue**(`properties`, `key`): `void`

Remove property with the specific key.

#### Parameters

| Name         | Type                                                       | Description                     |
| :----------- | :--------------------------------------------------------- | :------------------------------ |
| `properties` | `undefined` \| [`IProperty`](../interfaces/IProperty.md)[] | The properties list to look in. |
| `key`        | `string`                                                   | The key of the item to remove.  |

#### Returns

`void`

---

### setBoolean

▸ **setBoolean**(`properties`, `key`, `value`): `void`

Set a boolean in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `boolean`                    | The value of the item to add.  |

#### Returns

`void`

---

### setDate

▸ **setDate**(`properties`, `key`, `value`): `void`

Set a date in ISO format in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `Date`                       | The value of the item to add.  |

#### Returns

`void`

---

### setDateTime

▸ **setDateTime**(`properties`, `key`, `value`): `void`

Set a date time in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `Date`                       | The value of the item to add.  |

#### Returns

`void`

---

### setFloat

▸ **setFloat**(`properties`, `key`, `value`): `void`

Set a float in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `number`                     | The value of the item to add.  |

#### Returns

`void`

---

### setInteger

▸ **setInteger**(`properties`, `key`, `value`): `void`

Set an integer in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `number`                     | The value of the item to add.  |

#### Returns

`void`

---

### setText

▸ **setText**(`properties`, `key`, `value`): `void`

Set some text in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `string`                     | The value of the item to add.  |

#### Returns

`void`

---

### setTime

▸ **setTime**(`properties`, `key`, `value`): `void`

Set a time in standard format in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `Date`                       | The value of the item to add.  |

#### Returns

`void`

---

### setTimestampMilliseconds

▸ **setTimestampMilliseconds**(`properties`, `key`, `value`): `void`

Set a timestamp in milliseconds in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `number`                     | The value of the item to add.  |

#### Returns

`void`

---

### setTimestampSeconds

▸ **setTimestampSeconds**(`properties`, `key`, `value`): `void`

Set a timestamp in seconds in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `number`                     | The value of the item to add.  |

#### Returns

`void`

---

### setUrn

▸ **setUrn**(`properties`, `key`, `value`): `void`

Set a urn in to the list.

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `value`      | `undefined` \| `string`                     | The value of the item to add.  |

#### Returns

`void`

---

### setValue

▸ **setValue**\<`T`\>(`properties`, `key`, `type`, `value`): `void`

Set a property in to the list.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                        | Description                    |
| :----------- | :------------------------------------------ | :----------------------------- |
| `properties` | [`IProperty`](../interfaces/IProperty.md)[] | The properties list to add to. |
| `key`        | `string`                                    | The key of the item to add.    |
| `type`       | `string`                                    | The type of the item to add.   |
| `value`      | `undefined` \| `T`                          | The value of the item to add.  |

#### Returns

`void`
