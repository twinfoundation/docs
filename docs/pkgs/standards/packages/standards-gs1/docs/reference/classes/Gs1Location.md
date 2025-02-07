# Class: Gs1Location

Interface describing a GS1 Location master data.
Spec https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-1-r-2017-05-05.pdf .
Section 10.2 .

## Constructors

### new Gs1Location()

> **new Gs1Location**(): [`Gs1Location`](Gs1Location.md)

#### Returns

[`Gs1Location`](Gs1Location.md)

## Properties

### id

> **id**: `string`

The GS1 sgln identifier.

***

### site?

> `optional` **site**: `string`

Identifies the site in which the location is contained.

***

### sst?

> `optional` **sst**: [`SubSiteTypes`](../type-aliases/SubSiteTypes.md)

Sub site type describes the primary business function of the sub site location.

***

### ssa?

> `optional` **ssa**: [`SubSiteAttributes`](../type-aliases/SubSiteAttributes.md)

Sub site attribute further qualifies the business function of the sub site location.

***

### ssd?

> `optional` **ssd**: `string`

Sub site detail provides additional proprietary information.

***

### name?

> `optional` **name**: `string`

The name of the location.

***

### streetAddressOne?

> `optional` **streetAddressOne**: `string`

The street address line 1.

***

### streetAddressTwo?

> `optional` **streetAddressTwo**: `string`

The street address line 2.

***

### streetAddressThree?

> `optional` **streetAddressThree**: `string`

The street address line 3.

***

### city?

> `optional` **city**: `string`

City.

***

### state?

> `optional` **state**: `string`

State.

***

### postalCode?

> `optional` **postalCode**: `string`

Postal Code.

***

### countryCode?

> `optional` **countryCode**: `string`

Country Code The ISO 3166-1 alpha-2 code specifying the country for the address.

***

### latitude?

> `optional` **latitude**: `number`

The latitude of the location in degrees.

***

### longitude?

> `optional` **longitude**: `number`

The longitude of the location in degrees.
