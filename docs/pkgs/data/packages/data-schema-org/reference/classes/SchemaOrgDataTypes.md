# Class: SchemaOrgDataTypes

Handle all the data types for schema.org.

## Constructors

### new SchemaOrgDataTypes()

> **new SchemaOrgDataTypes**(): [`SchemaOrgDataTypes`](SchemaOrgDataTypes.md)

#### Returns

[`SchemaOrgDataTypes`](SchemaOrgDataTypes.md)

## Properties

### TYPE\_TEXT

> `static` **TYPE\_TEXT**: `string`

Represents text storage.

***

### TYPE\_INTEGER

> `static` **TYPE\_INTEGER**: `string`

Represents integer number values.

***

### TYPE\_FLOAT

> `static` **TYPE\_FLOAT**: `string`

Represents floating point numbers.

***

### TYPE\_BOOLEAN

> `static` **TYPE\_BOOLEAN**: `string`

Represents a boolean.

***

### TYPE\_URL

> `static` **TYPE\_URL**: `string`

Represents a url.

***

### TYPE\_DATE

> `static` **TYPE\_DATE**: `string`

Represents a date as an ISO format string.

***

### TYPE\_DATE\_TIME

> `static` **TYPE\_DATE\_TIME**: `string`

Represents a date time as an ISO format string.

***

### TYPE\_TIME

> `static` **TYPE\_TIME**: `string`

Represents a time as an ISO format string.

***

### TYPE\_IMAGE

> `static` **TYPE\_IMAGE**: `string`

Represents a url which points to an image.

***

### TYPE\_GEO\_COORDINATES

> `static` **TYPE\_GEO\_COORDINATES**: `string`

Represents a location.

***

### TYPE\_STRUCTURED\_VALUE

> `static` **TYPE\_STRUCTURED\_VALUE**: `string`

Represents a structured value.

## Methods

### registerTypes()

> `static` **registerTypes**(): `void`

Register all the data types.

#### Returns

`void`

***

### validateGeoCoordinates()

> `static` **validateGeoCoordinates**(`propertyName`, `value`, `failures`): `value is GeoCoordinatesLeaf`

Validate if the property is valid geo-coordinates.

#### Parameters

• **propertyName**: `string`

The name of the property being validated.

• **value**: `unknown`

The value to test.

• **failures**: `IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is GeoCoordinatesLeaf`

True if the value is geo-coordinates.
