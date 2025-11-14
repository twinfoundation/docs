# Interface: IContextIdHandler

Interface describing a context ID handler.

## Methods

### short()?

> `optional` **short**(`value`): `string`

The short form version of the context ID, should be unique enough to partition data.

#### Parameters

##### value

`string`

The full context ID value.

#### Returns

`string`

The short form version of the context ID.

***

### guard()?

> `optional` **guard**(`value`): `void`

Performs a runtime guard on the provided context ID value.

#### Parameters

##### value

`string`

The context ID value to guard.

#### Returns

`void`

#### Throws

Guard error if the value is invalid.
