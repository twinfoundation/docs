# Class: JsonSchemaHelper

A helper for JSON schemas.

## Constructors

### new JsonSchemaHelper()

> **new JsonSchemaHelper**(): [`JsonSchemaHelper`](JsonSchemaHelper.md)

#### Returns

[`JsonSchemaHelper`](JsonSchemaHelper.md)

## Properties

### SCHEMA\_VERSION

> `readonly` `static` **SCHEMA\_VERSION**: `"https://json-schema.org/draft/2020-12/schema"` = `"https://json-schema.org/draft/2020-12/schema"`

The schema version.

## Methods

### validate()

> `static` **validate**\<`T`\>(`schema`, `data`, `additionalTypes`?): `Promise`\<[`ISchemaValidationResult`](../interfaces/ISchemaValidationResult.md)\>

Validates data against the schema.

#### Type Parameters

• **T** = `unknown`

#### Parameters

• **schema**: `JSONSchema7`

The schema to validate the data with.

• **data**: `T`

The data to be validated.

• **additionalTypes?**

Additional types to add for reference, not already in DataTypeHandlerFactory.

#### Returns

`Promise`\<[`ISchemaValidationResult`](../interfaces/ISchemaValidationResult.md)\>

Result containing errors if there are any.

***

### getPropertyType()

> `static` **getPropertyType**(`schema`, `propertyName`): `undefined` \| `string`

Get the property type from a schema.

#### Parameters

• **schema**: `JSONSchema7`

The schema to extract the types from.

• **propertyName**: `string`

The name of the property to get the type for.

#### Returns

`undefined` \| `string`

The types of the property.

***

### entitySchemaToJsonSchema()

> `static` **entitySchemaToJsonSchema**(`entitySchema`, `baseDomain`?): `JSONSchema7`

Convert an entity schema to JSON schema e.g https://example.com/schemas/.

#### Parameters

• **entitySchema**: `undefined` \| `IEntitySchema`\<`unknown`\>

The entity schema to convert.

• **baseDomain?**: `string`

The base domain for local schemas e.g. https://example.com/

#### Returns

`JSONSchema7`

The JSON schema for the entity.
