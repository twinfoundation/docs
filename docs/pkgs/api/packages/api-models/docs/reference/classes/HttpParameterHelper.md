# Class: HttpParameterHelper

Class to help with handling http parameters.

## Constructors

### Constructor

> **new HttpParameterHelper**(): `HttpParameterHelper`

#### Returns

`HttpParameterHelper`

## Methods

### arrayFromString()

> `static` **arrayFromString**\<`T`\>(`values?`): `T`[] \| `undefined`

Convert list query to array.

#### Type Parameters

##### T

`T` = `string`

#### Parameters

##### values?

`string`

The values query string.

#### Returns

`T`[] \| `undefined`

The array of values.

***

### arrayToString()

> `static` **arrayToString**\<`T`\>(`values?`): `string` \| `undefined`

Convert array of values to query string.

#### Type Parameters

##### T

`T` = `string`

#### Parameters

##### values?

`T`[]

The values to combine string.

#### Returns

`string` \| `undefined`

The combined.

***

### objectFromString()

> `static` **objectFromString**\<`T`\>(`value?`): `T` \| `undefined`

Convert object string to object.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### value?

`string`

The value query string.

#### Returns

`T` \| `undefined`

The object.

***

### objectToString()

> `static` **objectToString**\<`T`\>(`value?`): `string` \| `undefined`

Convert object to query string.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### value?

`T`

The value to convert to a string.

#### Returns

`string` \| `undefined`

The converted object.
