# Class: SchemaOrgValidation

Handle validation for schema.org.

## Constructors

### Constructor

> **new SchemaOrgValidation**(): `SchemaOrgValidation`

#### Returns

`SchemaOrgValidation`

## Methods

### geoCoordinates()

> `static` **geoCoordinates**(`propertyName`, `value`, `failures`): `value is GeoCoordinatesLeaf`

Validate if the property is valid geo-coordinates.

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

`value is GeoCoordinatesLeaf`

True if the value is geo-coordinates.
