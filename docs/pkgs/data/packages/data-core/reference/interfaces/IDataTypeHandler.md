# Interface: IDataTypeHandler

Interface describing a type which can handle a specific data type.

## Properties

### type

> **type**: `string`

The type for the item.

***

### defaultValue?

> `optional` **defaultValue**: `unknown`

The default value for the item.

## Methods

### jsonSchema()?

> `optional` **jsonSchema**(): `Promise`\<`undefined` \| `JSONSchema7`\>

Get the JSON schema for the data type.

#### Returns

`Promise`\<`undefined` \| `JSONSchema7`\>

The JSON schema for the data type.

***

### validate()?

> `optional` **validate**(`propertyName`, `value`, `failures`, `container`?): `Promise`\<`boolean`\>

A method for validating the data type.

#### Parameters

• **propertyName**: `string`

The name of the property being validated.

• **value**: `unknown`

The value to validate.

• **failures**: `IValidationFailure`[]

List of failures to add to.

• **container?**: `unknown`

The object which contains this one.

#### Returns

`Promise`\<`boolean`\>

True if the item is valid.
