# Class: VdaIdentifiersValidation

Validation for identifier types for VDA.

## Constructors

### new VdaIdentifiersValidation()

> **new VdaIdentifiersValidation**(): [`VdaIdentifiersValidation`](VdaIdentifiersValidation.md)

#### Returns

[`VdaIdentifiersValidation`](VdaIdentifiersValidation.md)

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

> `static` **extractReadPoint**(`urn`): `undefined` \| [`IVdaReadPoint`](../interfaces/IVdaReadPoint.md)

Function to validate and extract RFID read points URNs.

#### Parameters

##### urn

`string`

The URN to validate.

#### Returns

`undefined` \| [`IVdaReadPoint`](../interfaces/IVdaReadPoint.md)

The extracted read point object or undefined.

***

### extractBizLocation()

> `static` **extractBizLocation**(`urn`): `undefined` \| [`IVdaBizLocation`](../interfaces/IVdaBizLocation.md)

Function to validate and extract Biz Location URN.

#### Parameters

##### urn

`string`

The URN to validate.

#### Returns

`undefined` \| [`IVdaBizLocation`](../interfaces/IVdaBizLocation.md)

The extracted biz location object or undefined.

***

### extractUriPlp()

> `static` **extractUriPlp**(`id`): `undefined` \| [`IVdaUriPlates`](../interfaces/IVdaUriPlates.md)

Function to validate VDA URI Packages License Plates.

#### Parameters

##### id

`string`

The VDA URI to validate.

#### Returns

`undefined` \| [`IVdaUriPlates`](../interfaces/IVdaUriPlates.md)

The VDA URI object or undefined.

***

### extractIdentifier()

> `static` **extractIdentifier**(`epc`): `undefined` \| [`IVdaObjectIdentifier`](../interfaces/IVdaObjectIdentifier.md)

VDA object identifier verifier function.

#### Parameters

##### epc

`string`

The epc to validate.

#### Returns

`undefined` \| [`IVdaObjectIdentifier`](../interfaces/IVdaObjectIdentifier.md)

The VDA object or undefined.
