# Interface: IEpcisEventDetails

EPCIS Event Details.

## Extends

- [`IEpcisEvent`](IEpcisEvent.md)

## Extended by

- [`IObjectEvent`](IObjectEvent.md)

## Properties

### @context?

> `optional` **@context**: `IJsonLdContextDefinition`

JSON-LD @context.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`@context`](IEpcisEvent.md#@context)

***

### id?

> `optional` **id**: `string`

UUID of the event.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`id`](IEpcisEvent.md#id)

***

### eventID?

> `optional` **eventID**: `string`

The id of the event. Marked here as optional as we usually won't store it on Tangle.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`eventID`](IEpcisEvent.md#eventid)

***

### type

> **type**: `string`

Type of Event.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`type`](IEpcisEvent.md#type)

***

### eventTime

> **eventTime**: `string`

Timestamp in UTC.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`eventTime`](IEpcisEvent.md#eventtime)

***

### eventTimeZoneOffset

> **eventTimeZoneOffset**: `string`

Timezone offset. Useful if we want to represent timestamp in local timezone.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`eventTimeZoneOffset`](IEpcisEvent.md#eventtimezoneoffset)

***

### recordTime?

> `optional` **recordTime**: `string`

When the event was recorded. It will be automatically generated.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`recordTime`](IEpcisEvent.md#recordtime)

***

### sourceList?

> `optional` **sourceList**: [`ISource`](ISource.md)[]

Source list. Semantics according to EPCIS standard.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`sourceList`](IEpcisEvent.md#sourcelist)

***

### destinationList?

> `optional` **destinationList**: [`IDestination`](IDestination.md)[]

Destination list. Semantics according to EPCIS standard.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`destinationList`](IEpcisEvent.md#destinationlist)

***

### action

> **action**: [`ActionTypes`](../type-aliases/ActionTypes.md)

Action: ADD, OBSERVE, DELETE.

***

### readPoint?

> `optional` **readPoint**: [`ISimpleLocation`](ISimpleLocation.md)

The location of reading point.

***

### bizLocation?

> `optional` **bizLocation**: [`ISimpleLocation`](ISimpleLocation.md)

The biz location where the item ends up.

***

### bizStep?

> `optional` **bizStep**: [`BizStepTypes`](../type-aliases/BizStepTypes.md)

The business step as per EPCIS.

***

### disposition?

> `optional` **disposition**: [`DispositionTypes`](../type-aliases/DispositionTypes.md)

The disposition as per EPCIS.

***

### bizTransactionList?

> `optional` **bizTransactionList**: [`IBizTransaction`](IBizTransaction.md)[]

The list of related business transactions.
