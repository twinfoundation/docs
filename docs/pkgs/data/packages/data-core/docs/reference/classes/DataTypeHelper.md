# Class: DataTypeHelper

Class to help with data types.

## Constructors

### Constructor

> **new DataTypeHelper**(): `DataTypeHelper`

#### Returns

`DataTypeHelper`

## Methods

### validate()

> `static` **validate**(`propertyName`, `dataType`, `data`, `validationFailures`, `options?`): `Promise`\<`boolean`\>

Validate a data type.

#### Parameters

##### propertyName

`string`

The name of the property being validated to use in error messages.

##### dataType

The data type to validate.

`string` | `undefined`

##### data

`unknown`

The data to validate.

##### validationFailures

`IValidationFailure`[]

The list of validation failures to add to.

##### options?

Optional options for validation.

###### validationMode?

[`ValidationMode`](../type-aliases/ValidationMode.md)

The validation mode to use, defaults to either.

###### failOnMissingType?

`boolean`

If true, will fail validation if the data type is missing, defaults to false.

#### Returns

`Promise`\<`boolean`\>

True if the data was valid.
