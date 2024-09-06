# Interface: IObjectEvent

Defines an EPCIS 2.0 Object Event.

## Extends

- [`IEpcisEventDetails`](IEpcisEventDetails.md)

## Properties

### @context?

> `optional` **@context**: `ContextDefinition`

JSON-LD @context.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`@context`](IEpcisEventDetails.md#@context)

***

### id?

> `optional` **id**: `string`

UUID of the event.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`id`](IEpcisEventDetails.md#id)

***

### eventID?

> `optional` **eventID**: `string`

The id of the event. Marked here as optional as we usually won't store it on Tangle.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`eventID`](IEpcisEventDetails.md#eventid)

***

### eventTime

> **eventTime**: `string`

Timestamp in UTC.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`eventTime`](IEpcisEventDetails.md#eventtime)

***

### eventTimeZoneOffset

> **eventTimeZoneOffset**: `string`

Timezone offset. Useful if we want to represent timestamp in local timezone.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`eventTimeZoneOffset`](IEpcisEventDetails.md#eventtimezoneoffset)

***

### recordTime?

> `optional` **recordTime**: `string`

When the event was recorded. It will be automatically generated.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`recordTime`](IEpcisEventDetails.md#recordtime)

***

### sourceList?

> `optional` **sourceList**: [`ISource`](ISource.md)[]

Source list. Semantics according to EPCIS standard.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`sourceList`](IEpcisEventDetails.md#sourcelist)

***

### destinationList?

> `optional` **destinationList**: [`IDestination`](IDestination.md)[]

Destination list. Semantics according to EPCIS standard.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`destinationList`](IEpcisEventDetails.md#destinationlist)

***

### action

> **action**: [`ActionTypes`](../type-aliases/ActionTypes.md)

Action: ADD, OBSERVE, DELETE.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`action`](IEpcisEventDetails.md#action)

***

### readPoint?

> `optional` **readPoint**: [`ISimpleLocation`](ISimpleLocation.md)

The location of reading point.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`readPoint`](IEpcisEventDetails.md#readpoint)

***

### bizLocation?

> `optional` **bizLocation**: [`ISimpleLocation`](ISimpleLocation.md)

The biz location where the item ends up.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`bizLocation`](IEpcisEventDetails.md#bizlocation)

***

### bizStep?

> `optional` **bizStep**: [`BizStepTypes`](../type-aliases/BizStepTypes.md)

The business step as per EPCIS.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`bizStep`](IEpcisEventDetails.md#bizstep)

***

### disposition?

> `optional` **disposition**: [`DispositionTypes`](../type-aliases/DispositionTypes.md)

The disposition as per EPCIS.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`disposition`](IEpcisEventDetails.md#disposition)

***

### bizTransactionList?

> `optional` **bizTransactionList**: [`IBizTransaction`](IBizTransaction.md)[]

The list of related business transactions.

#### Inherited from

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`bizTransactionList`](IEpcisEventDetails.md#biztransactionlist)

***

### type

> **type**: `"ObjectEvent"`

Fixed to ObjectEvent.

#### Overrides

[`IEpcisEventDetails`](IEpcisEventDetails.md).[`type`](IEpcisEventDetails.md#type)

***

### epcList

> **epcList**: `string`[]

List of EPCs involved.

***

### quantityList?

> `optional` **quantityList**: [`IQuantity`](IQuantity.md)[]

Quantity in case of class-level event visibility data.

***

### sensorElementList?

> `optional` **sensorElementList**: [`ISensorElement`](ISensorElement.md)[]

Sensor element list.
