# Class: Gs1Validation

Validation for GS1 types.

## Constructors

### Constructor

> **new Gs1Validation**(): `Gs1Validation`

#### Returns

`Gs1Validation`

## Methods

### locationMasterData()

> `static` **locationMasterData**(`propertyName`, `value`, `failures`, `container?`): `value is Gs1Location`

Validate if the property is a valid location.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

[`Gs1Location`](Gs1Location.md)

The value to test.

##### failures

`IValidationFailure`[]

The list of failures to add to.

##### container?

`unknown`

The object which contains this one.

#### Returns

`value is Gs1Location`

True if the value is a location.
