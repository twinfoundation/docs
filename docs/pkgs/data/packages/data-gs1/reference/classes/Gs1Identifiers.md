# Class: Gs1Identifiers

Handle all identifier types for GS1.

## Constructors

### new Gs1Identifiers()

> **new Gs1Identifiers**(): [`Gs1Identifiers`](Gs1Identifiers.md)

#### Returns

[`Gs1Identifiers`](Gs1Identifiers.md)

## Properties

### NAMESPACE\_EPC\_ID

> `static` **NAMESPACE\_EPC\_ID**: `string` = `"epc:id"`

Identifier epc id namespace.

***

### NAMESPACE\_EPC\_ID\_GTIN

> `static` **NAMESPACE\_EPC\_ID\_GTIN**: `string`

Identifier epc:id:gtin namespace.

***

### NAMESPACE\_EPC\_ID\_GLN

> `static` **NAMESPACE\_EPC\_ID\_GLN**: `string`

Identifier epc:id:sgln namespace.

***

### NAMESPACE\_EPC\_CLASS

> `static` **NAMESPACE\_EPC\_CLASS**: `string` = `"epc:class"`

Identifier epc id namespace.

## Methods

### registerIdentifiers()

> `static` **registerIdentifiers**(): `void`

Register all the identifiers.

#### Returns

`void`

***

### validateEpcId()

> `static` **validateEpcId**(`propertyName`, `value`, `failures`): `value is string`

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

### validateEpcIdGtin()

> `static` **validateEpcIdGtin**(`propertyName`, `value`, `failures`): `value is string`

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

### validateEpcIdGln()

> `static` **validateEpcIdGln**(`propertyName`, `value`, `failures`): `value is string`

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

### validateEpcClass()

> `static` **validateEpcClass**(`propertyName`, `value`, `failures`): `value is string`

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
