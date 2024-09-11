# Class: Gs1IdentifiersValidation

Validation for GS1 identifiers.

## Constructors

### new Gs1IdentifiersValidation()

> **new Gs1IdentifiersValidation**(): [`Gs1IdentifiersValidation`](Gs1IdentifiersValidation.md)

#### Returns

[`Gs1IdentifiersValidation`](Gs1IdentifiersValidation.md)

## Methods

### epcId()

> `static` **epcId**(`propertyName`, `value`, `failures`): `value is string`

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

### epcIdGtin()

> `static` **epcIdGtin**(`propertyName`, `value`, `failures`): `value is string`

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

### epcIdGln()

> `static` **epcIdGln**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc id gln.

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

### epcClass()

> `static` **epcClass**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc class.

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

### extractEpcIdGtin()

> `static` **extractEpcIdGtin**(`epc`): `undefined` \| `string`

Extract the EPC gtin from the URI.

#### Parameters

• **epc**: `string`

The uri to extract from.

#### Returns

`undefined` \| `string`

The extracted data or undefined.

***

### extractEpcIdGln()

> `static` **extractEpcIdGln**(`epc`): `undefined` \| `string`

Extract the EPC gln from the URI.

#### Parameters

• **epc**: `string`

The uri to extract from.

#### Returns

`undefined` \| `string`

The extracted data or undefined.

***

### extractEpcClassUri()

> `static` **extractEpcClassUri**(`epc`): `undefined` \| [`IEPCClassUri`](../interfaces/IEPCClassUri.md)

Extract The EPC Class from the URI.

#### Parameters

• **epc**: `string`

The uri to extract from.

#### Returns

`undefined` \| [`IEPCClassUri`](../interfaces/IEPCClassUri.md)

The extracted data or undefined.
