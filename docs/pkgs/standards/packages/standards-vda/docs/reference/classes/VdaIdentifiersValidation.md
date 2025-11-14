# Class: VdaIdentifiersValidation

Validation for identifier types for VDA.

## Constructors

### Constructor

> **new VdaIdentifiersValidation**(): `VdaIdentifiersValidation`

#### Returns

`VdaIdentifiersValidation`

## Methods

### jaifId()

> `static` **jaifId**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

`unknown`

The value to test.

##### failures

`IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### jaifIdLocation()

> `static` **jaifIdLocation**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc vda id location.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

`unknown`

The value to test.

##### failures

`IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### jaifIdItem()

> `static` **jaifIdItem**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc vda id item.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

`unknown`

The value to test.

##### failures

`IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### uriPlp()

> `static` **uriPlp**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc id gtin.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

`unknown`

The value to test.

##### failures

`IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### extractReadPoint()

> `static` **extractReadPoint**(`urn`): [`IVdaReadPoint`](../interfaces/IVdaReadPoint.md) \| `undefined`

Function to validate and extract RFID read points URNs.

#### Parameters

##### urn

`string`

The URN to validate.

#### Returns

[`IVdaReadPoint`](../interfaces/IVdaReadPoint.md) \| `undefined`

The extracted read point object or undefined.

***

### extractBizLocation()

> `static` **extractBizLocation**(`urn`): [`IVdaBizLocation`](../interfaces/IVdaBizLocation.md) \| `undefined`

Function to validate and extract Biz Location URN.

#### Parameters

##### urn

`string`

The URN to validate.

#### Returns

[`IVdaBizLocation`](../interfaces/IVdaBizLocation.md) \| `undefined`

The extracted biz location object or undefined.

***

### extractUriPlp()

> `static` **extractUriPlp**(`id`): [`IVdaUriPlates`](../interfaces/IVdaUriPlates.md) \| `undefined`

Function to validate VDA URI Packages License Plates.

#### Parameters

##### id

`string`

The VDA URI to validate.

#### Returns

[`IVdaUriPlates`](../interfaces/IVdaUriPlates.md) \| `undefined`

The VDA URI object or undefined.

***

### extractIdentifier()

> `static` **extractIdentifier**(`epc`): [`IVdaObjectIdentifier`](../interfaces/IVdaObjectIdentifier.md) \| `undefined`

VDA object identifier verifier function.

#### Parameters

##### epc

`string`

The epc to validate.

#### Returns

[`IVdaObjectIdentifier`](../interfaces/IVdaObjectIdentifier.md) \| `undefined`

The VDA object or undefined.
