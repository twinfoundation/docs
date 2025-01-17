# Interface: IEpcisQueryDocument

EPCIS Query Document.

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

> **type**: `string`

JSON-LD Type.

***

### schemaVersion?

> `optional` **schemaVersion**: `string`

Schema version.

***

### creationDate?

> `optional` **creationDate**: `string`

Creation Date.

***

### epcisBody

> **epcisBody**: `object`

The EPCIS Body.

#### queryResults

> **queryResults**: `object`

The results of the query.

##### queryResults.subscriptionID?

> `optional` **subscriptionID**: `string`

The concerned subscription.

##### queryResults.queryName

> **queryName**: `string`

The concerned query.

##### queryResults.resultsBody

> **resultsBody**: `object`

And now the results.

##### queryResults.resultsBody.eventList

> **eventList**: [`IEpcisEvent`](IEpcisEvent.md)[]

The list of events.
