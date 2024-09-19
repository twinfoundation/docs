# Interface: IEpcisDocument

EPCIS Document.

## Properties

### @context

> **@context**: `IJsonLdContextDefinition`

The @context.

***

### id?

> `optional` **id**: `string`

The JSON-LD document id.

***

### type

> **type**: `"EPCISDocument"`

JSON-LD Type.

***

### epcisBody

> **epcisBody**: `object`

The EPCIS Body.

#### eventList

> **eventList**: [`IEpcisEvent`](IEpcisEvent.md)[]

The list of events.
