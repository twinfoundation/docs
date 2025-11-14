# Class: Coerce

Coerce an object from one type to another.

## Constructors

### Constructor

> **new Coerce**(): `Coerce`

#### Returns

`Coerce`

## Methods

### string()

> `static` **string**(`value`): `string` \| `undefined`

Coerce the value to a string.

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`string` \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### number()

> `static` **number**(`value`): `number` \| `undefined`

Coerce the value to a number.

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`number` \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### integer()

> `static` **integer**(`value`): `number` \| `undefined`

Coerce the value to an integer.

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`number` \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### bigint()

> `static` **bigint**(`value`): `bigint` \| `undefined`

Coerce the value to a bigint.

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`bigint` \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### boolean()

> `static` **boolean**(`value`): `boolean` \| `undefined`

Coerce the value to a boolean.

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`boolean` \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### date()

> `static` **date**(`value`): `Date` \| `undefined`

Coerce the value to a date.

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`Date` \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### dateTime()

> `static` **dateTime**(`value`): `Date` \| `undefined`

Coerce the value to a date/time.

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`Date` \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### time()

> `static` **time**(`value`): `Date` \| `undefined`

Coerce the value to a time.

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`Date` \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### object()

> `static` **object**\<`T`\>(`value`): `T` \| `undefined`

Coerce the value to an object.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`T` \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### uint8Array()

> `static` **uint8Array**(`value`): `Uint8Array`\<`ArrayBufferLike`\> \| `undefined`

Coerce the value to a Uint8Array.

#### Parameters

##### value

`unknown`

The value to coerce.

#### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`

The value if it can be coerced.

#### Throws

TypeError If the value can not be coerced.

***

### byType()

> `static` **byType**(`value`, `type?`): `unknown`

Coerces a value based on the coercion type.

#### Parameters

##### value

`unknown`

The value to coerce.

##### type?

[`CoerceType`](../type-aliases/CoerceType.md)

The coercion type to perform.

#### Returns

`unknown`

The coerced value.
