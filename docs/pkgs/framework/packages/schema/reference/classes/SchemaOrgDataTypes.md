# Class: SchemaOrgDataTypes

Handle all the data types for schema.org.

## Constructors

### constructor

• **new SchemaOrgDataTypes**(): [`SchemaOrgDataTypes`](SchemaOrgDataTypes.md)

#### Returns

[`SchemaOrgDataTypes`](SchemaOrgDataTypes.md)

## Properties

### TYPE_BOOLEAN

▪ `Static` **TYPE_BOOLEAN**: `string` = `"https://schema.org/Boolean"`

Represents a boolean.

---

### TYPE_DATE

▪ `Static` **TYPE_DATE**: `string` = `"https://schema.org/Date"`

Represents a date as an ISO format string.

---

### TYPE_DATE_TIME

▪ `Static` **TYPE_DATE_TIME**: `string` = `"https://schema.org/DateTime"`

Represents a date time as an ISO format string.

---

### TYPE_FLOAT

▪ `Static` **TYPE_FLOAT**: `string` = `"https://schema.org/Float"`

Represents floating point numbers.

---

### TYPE_GEO_COORDINATES

▪ `Static` **TYPE_GEO_COORDINATES**: `string` = `"https://schema.org/GeoCoordinates"`

Represents a location.

---

### TYPE_IMAGE

▪ `Static` **TYPE_IMAGE**: `string` = `"https://schema.org/image"`

Represents a url which points to an image.

---

### TYPE_INTEGER

▪ `Static` **TYPE_INTEGER**: `string` = `"https://schema.org/Integer"`

Represents integer number values.

---

### TYPE_STRUCTURED_VALUE

▪ `Static` **TYPE_STRUCTURED_VALUE**: `string` = `"https://schema.org/StructuredValue"`

Represents a structured value.

---

### TYPE_TEXT

▪ `Static` **TYPE_TEXT**: `string` = `"https://schema.org/Text"`

Represents text storage.

---

### TYPE_TIME

▪ `Static` **TYPE_TIME**: `string` = `"https://schema.org/Time"`

Represents a time as an ISO format string.

---

### TYPE_URL

▪ `Static` **TYPE_URL**: `string` = `"https://schema.org/URL"`

Represents a url.

## Methods

### registerTypes

▸ **registerTypes**(): `void`

Register all the data types.

#### Returns

`void`

---

### validateGeoCoordinates

▸ **validateGeoCoordinates**(`propertyName`, `value`, `failures`): value is GeoCoordinatesLeaf

Validate if the property is valid geo-coordinates.

#### Parameters

| Name           | Type                   | Description                               |
| :------------- | :--------------------- | :---------------------------------------- |
| `propertyName` | `string`               | The name of the property being validated. |
| `value`        | `unknown`              | The value to test.                        |
| `failures`     | `IValidationFailure`[] | The list of failures to add to.           |

#### Returns

value is GeoCoordinatesLeaf

True if the value is geo-coordinates.
