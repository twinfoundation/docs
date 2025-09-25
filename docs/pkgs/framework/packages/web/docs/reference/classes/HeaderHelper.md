# Class: HeaderHelper

Class to helper with header operations.

## Constructors

### Constructor

> **new HeaderHelper**(): `HeaderHelper`

#### Returns

`HeaderHelper`

## Methods

### createBearer()

> `static` **createBearer**(`token`): `string`

Create a bearer token header.

#### Parameters

##### token

`unknown`

The token to create the header for.

#### Returns

`string`

The bearer token header.

***

### extractBearer()

> `static` **extractBearer**(`header`): `string`

Extract the bearer token from a header.

#### Parameters

##### header

`unknown`

The header value to extract the token from.

#### Returns

`string`

The extracted token if it exists.
