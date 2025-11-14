# Class: ContextIdHelper

Class to help with context IDs.

## Constructors

### Constructor

> **new ContextIdHelper**(): `ContextIdHelper`

#### Returns

`ContextIdHelper`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### guard()

> `static` **guard**\<`T`, `K`\>(`contextIds`, `key`): `asserts contextIds is T & { [P in string]: string }`

Perform a runtime guard on the provided context ID value.

#### Type Parameters

##### T

`T` *extends* `object`

##### K

`K` *extends* `string`

#### Parameters

##### contextIds

The context IDs to guard.

`T` | `undefined`

##### key

`K`

The context ID key to guard.

#### Returns

`asserts contextIds is T & { [P in string]: string }`

#### Throws

Guard error if the value is invalid.

***

### short()

> `static` **short**(`contextIds`, `key`): `string`

Gets the short version of a context ID.

#### Parameters

##### contextIds

The context IDs to get the short version from.

[`IContextIds`](../interfaces/IContextIds.md) | `undefined`

##### key

`string`

The context ID key to get the short version for.

#### Returns

`string`

The short version of the context ID.

#### Throws

Guard error if the value is invalid.

***

### guardAll()

> `static` **guardAll**\<`T`, `K`\>(`contextIds`, `keys`): `asserts contextIds is T & { [P in string]: string }`

Perform a runtime guard on the provided context ID values.

#### Type Parameters

##### T

`T` *extends* `object`

##### K

`K` *extends* `string`

#### Parameters

##### contextIds

The context IDs to guard.

`T` | `undefined`

##### keys

The context ID keys to guard.

readonly `K`[] | `undefined`

#### Returns

`asserts contextIds is T & { [P in string]: string }`

#### Throws

Guard error if the value is invalid.

***

### shortAll()

> `static` **shortAll**(`contextIds`, `keys`): [`IContextIds`](../interfaces/IContextIds.md)

Gets the short versions of multiple context IDs.

#### Parameters

##### contextIds

The context IDs to get the short versions from.

[`IContextIds`](../interfaces/IContextIds.md) | `undefined`

##### keys

The context ID keys to get the short versions for.

`string`[] | `undefined`

#### Returns

[`IContextIds`](../interfaces/IContextIds.md)

The short versions of the context IDs.

***

### shortCombined()

> `static` **shortCombined**(`contextIds`, `keys`, `separator`): `string` \| `undefined`

Gets the combined short version.

#### Parameters

##### contextIds

The context IDs to get the short versions from.

[`IContextIds`](../interfaces/IContextIds.md) | `undefined`

##### keys

The context ID keys to get the short versions for.

`string`[] | `undefined`

##### separator

`string` = `"/"`

The separator to use between parts.

#### Returns

`string` \| `undefined`

The short version combined.

***

### shortSplit()

> `static` **shortSplit**(`keys`, `combined`, `separator`): [`IContextIds`](../interfaces/IContextIds.md)

Split a combined short version in to the separate context IDs.

#### Parameters

##### keys

`string`[]

The context ID keys to get the short versions for.

##### combined

`string`

The combined short version to separate.

##### separator

`string` = `"/"`

The separator used between parts.

#### Returns

[`IContextIds`](../interfaces/IContextIds.md)

The short version combined.

#### Throws

GeneralError if the number of parts does not match the number of keys.

***

### combinedContextKey()

> `static` **combinedContextKey**(`contextIds`, `keys`, `separator`): `string` \| `undefined`

Create a combined key.

#### Parameters

##### contextIds

The context IDs to create the combined key for.

[`IContextIds`](../interfaces/IContextIds.md) | `undefined`

##### keys

The context ID keys to get the short versions for.

`string`[] | `undefined`

##### separator

`string` = `"/"`

The separator to use between parts.

#### Returns

`string` \| `undefined`

The short version combined.

***

### pickKeysFromAvailable()

> `static` **pickKeysFromAvailable**(`availableKeys?`, `desiredKeys?`): `string`[]

Pick only the desired keys from the available keys.

#### Parameters

##### availableKeys?

`string`[]

The available keys to pick from.

##### desiredKeys?

`string`[]

The desired keys to pick.

#### Returns

`string`[]

The picked keys.
