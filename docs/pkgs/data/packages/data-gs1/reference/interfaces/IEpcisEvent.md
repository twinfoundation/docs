# Interface: IEpcisEvent

EPCIS Event.

## Extended by

- [`IEpcisEventDetails`](IEpcisEventDetails.md)

## Properties

### @context?

> `optional` **@context**: `ContextDefinition`

JSON-LD @context.

***

### id?

> `optional` **id**: `string`

UUID of the event.

***

### eventID?

> `optional` **eventID**: `string`

The id of the event. Marked here as optional as we usually won't store it on Tangle.

***

### type

> **type**: `string`

Type of Event.

***

### eventTime

> **eventTime**: `string`

Timestamp in UTC.

***

### eventTimeZoneOffset

> **eventTimeZoneOffset**: `string`

Timezone offset. Useful if we want to represent timestamp in local timezone.

***

### recordTime?

> `optional` **recordTime**: `string`

When the event was recorded. It will be automatically generated.

***

### sourceList?

> `optional` **sourceList**: [`ISource`](ISource.md)[]

Source list. Semantics according to EPCIS standard.

***

### destinationList?

> `optional` **destinationList**: [`IDestination`](IDestination.md)[]

Destination list. Semantics according to EPCIS standard.
