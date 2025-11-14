# Class: Did

Helper methods for Ids.

## Constructors

### Constructor

> **new Did**(): `Did`

#### Returns

`Did`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### parse()

> `static` **parse**(`id`): `object`

Parse and id in to it's constituent parts.

#### Parameters

##### id

`string`

The id to parse.

#### Returns

`object`

The parsed id.

##### method

> **method**: `string`

##### network?

> `optional` **network**: `string`

##### id

> **id**: `string`

#### Throws

GeneralError if the id is not valid.

***

### guard()

> `static` **guard**(`source`, `property`, `value`): `asserts value is string`

Guard a string as a DID.

#### Parameters

##### source

`string`

The source of the error.

##### property

`string`

The name of the property.

##### value

`unknown`

The urn to parse.

#### Returns

`asserts value is string`

#### Throws

GuardError If the value does not match the assertion.
