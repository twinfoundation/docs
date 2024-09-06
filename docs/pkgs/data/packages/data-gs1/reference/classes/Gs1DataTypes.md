# Class: Gs1DataTypes

Handle all the data types for GS1.
Vocabulary https://www.gs1.org/voc .

## Constructors

### new Gs1DataTypes()

> **new Gs1DataTypes**(): [`Gs1DataTypes`](Gs1DataTypes.md)

#### Returns

[`Gs1DataTypes`](Gs1DataTypes.md)

## Properties

### TYPE\_MASTER\_DATA\_LOCATION

> `static` **TYPE\_MASTER\_DATA\_LOCATION**: `string` = `"gs1_location_masterdata"`

Represents a master data location.

## Methods

### registerTypes()

> `static` **registerTypes**(): `void`

Register all the data types.

#### Returns

`void`

***

### validateMasterDataLocation()

> `static` **validateMasterDataLocation**(`propertyName`, `value`, `failures`, `container`?): `value is Gs1Location`

Validate if the property is a valid location.

#### Parameters

• **propertyName**: `string`

The name of the property being validated.

• **value**: [`Gs1Location`](Gs1Location.md)

The value to test.

• **failures**: `IValidationFailure`[]

The list of failures to add to.

• **container?**: `unknown`

The object which contains this one.

#### Returns

`value is Gs1Location`

True if the value is a location.

***

### isEpcHex()

> `static` **isEpcHex**(`value`): `boolean`

Is the value an EPC identifier.

#### Parameters

• **value**: `string`

The value to test.

#### Returns

`boolean`

True if the value is an epc.

***

### isGeoUri()

> `static` **isGeoUri**(`value`): `boolean`

Is the value a valid geo uri https://en.wikipedia.org/wiki/Geo_URI_scheme.

#### Parameters

• **value**: `string`

The value to check.

#### Returns

`boolean`

True if the value matches a geo uri.
