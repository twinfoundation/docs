# Class: VdaIdentifiers

Handle all identifier types for VDA.

## Constructors

### new VdaIdentifiers()

> **new VdaIdentifiers**(): [`VdaIdentifiers`](VdaIdentifiers.md)

#### Returns

[`VdaIdentifiers`](VdaIdentifiers.md)

## Properties

### NAMESPACE\_JAIF\_ID

> `static` **NAMESPACE\_JAIF\_ID**: `string` = `"jaif:id"`

Identifier Joint Automotive Industry Format namespace.

***

### NAMESPACE\_JAIF\_ID\_LOCATION

> `static` **NAMESPACE\_JAIF\_ID\_LOCATION**: `string` = `"jaif:id@location"`

Specific extended namespace for location validation.

***

### NAMESPACE\_JAIF\_ID\_ITEM

> `static` **NAMESPACE\_JAIF\_ID\_ITEM**: `string` = `"jaif:id@item"`

Specific extended namespace for item validation.

## Methods

### registerIdentifiers()

> `static` **registerIdentifiers**(): `void`

Register all the identifiers.

#### Returns

`void`

***

### validateJaifId()

> `static` **validateJaifId**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc.

#### Parameters

• **propertyName**: `string`

The name of the property being validated.

• **value**: `unknown`

The value to test.

• **failures**: `IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### validateJaifIdLocation()

> `static` **validateJaifIdLocation**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc vda id location.

#### Parameters

• **propertyName**: `string`

The name of the property being validated.

• **value**: `unknown`

The value to test.

• **failures**: `IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### validateJaifIdItem()

> `static` **validateJaifIdItem**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc vda id item.

#### Parameters

• **propertyName**: `string`

The name of the property being validated.

• **value**: `unknown`

The value to test.

• **failures**: `IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### validateUriPlp()

> `static` **validateUriPlp**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc id gtin.

#### Parameters

• **propertyName**: `string`

The name of the property being validated.

• **value**: `unknown`

The value to test.

• **failures**: `IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### extractReadPoint()

> `static` **extractReadPoint**(`urn`): `undefined` \| [`IVdaReadPoint`](../interfaces/IVdaReadPoint.md)

Function to validate and extract RFID read points URNs.

#### Parameters

• **urn**: `string`

The URN to validate.

#### Returns

`undefined` \| [`IVdaReadPoint`](../interfaces/IVdaReadPoint.md)

The extracted read point object or undefined.

***

### extractBizLocation()

> `static` **extractBizLocation**(`urn`): `undefined` \| [`IVdaBizLocation`](../interfaces/IVdaBizLocation.md)

Function to validate and extract Biz Location URN.

#### Parameters

• **urn**: `string`

The URN to validate.

#### Returns

`undefined` \| [`IVdaBizLocation`](../interfaces/IVdaBizLocation.md)

The extracted biz location object or undefined.

***

### extractUriPlp()

> `static` **extractUriPlp**(`id`): `undefined` \| [`IVdaUriPlates`](../interfaces/IVdaUriPlates.md)

Function to validate VDA URI Packages License Plates.

#### Parameters

• **id**: `string`

The VDA URI to validate.

#### Returns

`undefined` \| [`IVdaUriPlates`](../interfaces/IVdaUriPlates.md)

The VDA URI object or undefined.

***

### extractIdentifier()

> `static` **extractIdentifier**(`epc`): `undefined` \| [`IVdaObjectIdentifier`](../interfaces/IVdaObjectIdentifier.md)

VDA object identifier verifier function.

#### Parameters

• **epc**: `string`

The epc to validate.

#### Returns

`undefined` \| [`IVdaObjectIdentifier`](../interfaces/IVdaObjectIdentifier.md)

The VDA object or undefined.
