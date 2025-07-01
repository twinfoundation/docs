# Interface: IDataTypeHandler

Interface describing a type which can handle a specific data type.

## Properties

### context

> **context**: `string`

The context for the type.

***

### type

> **type**: `string`

The type for the item.

***

### defaultValue?

> `optional` **defaultValue**: `unknown`

The default value for the item to use when constructing a new object.

## Methods

### jsonSchema()?

> `optional` **jsonSchema**(): `Promise`\<`undefined` \| `SchemaObject`\>

Get the JSON schema for the data type.

#### Returns

`Promise`\<`undefined` \| `SchemaObject`\>

The JSON schema for the data type.

***

### validate()?

> `optional` **validate**(`propertyName`, `value`, `failures`, `container?`): `Promise`\<`boolean`\>

A method for validating the data type.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

`unknown`

The value to validate.

##### failures

`IValidationFailure`[]

List of failures to add to.

##### container?

`unknown`

The object which contains this one.

#### Returns

`Promise`\<`boolean`\>

True if the item is valid.
