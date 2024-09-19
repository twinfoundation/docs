# Interface: IAssociationEvent

Association Event.

## Extends

- `IBaseAggregationEvent`

## Properties

### type

> **type**: `"AssociationEvent"`

Type.

#### Overrides

`IBaseAggregationEvent.type`

***

### parentID?

> `optional` **parentID**: `string`

Parent is only optional when action is OBSERVE.

#### Inherited from

`IBaseAggregationEvent.parentID`

***

### childEPCs?

> `optional` **childEPCs**: `string`[]

The children EPC which can be empty when action is DELETE.

#### Inherited from

`IBaseAggregationEvent.childEPCs`

***

### childQuantityList?

> `optional` **childQuantityList**: [`IQuantity`](IQuantity.md)[]

Quantity in case of class-level event visibility data.

#### Inherited from

`IBaseAggregationEvent.childQuantityList`

***

### @context?

> `optional` **@context**: `IJsonLdContextDefinition`

JSON-LD @context.

#### Inherited from

`IBaseAggregationEvent.@context`

***

### id?

> `optional` **id**: `string`

UUID of the event.

#### Inherited from

`IBaseAggregationEvent.id`

***

### eventID?

> `optional` **eventID**: `string`

The id of the event. Marked here as optional as we usually won't store it on Tangle.

#### Inherited from

`IBaseAggregationEvent.eventID`

***

### eventTime

> **eventTime**: `string`

Timestamp in UTC.

#### Inherited from

`IBaseAggregationEvent.eventTime`

***

### eventTimeZoneOffset

> **eventTimeZoneOffset**: `string`

Timezone offset. Useful if we want to represent timestamp in local timezone.

#### Inherited from

`IBaseAggregationEvent.eventTimeZoneOffset`

***

### recordTime?

> `optional` **recordTime**: `string`

When the event was recorded. It will be automatically generated.

#### Inherited from

`IBaseAggregationEvent.recordTime`

***

### sourceList?

> `optional` **sourceList**: [`ISource`](ISource.md)[]

Source list. Semantics according to EPCIS standard.

#### Inherited from

`IBaseAggregationEvent.sourceList`

***

### destinationList?

> `optional` **destinationList**: [`IDestination`](IDestination.md)[]

Destination list. Semantics according to EPCIS standard.

#### Inherited from

`IBaseAggregationEvent.destinationList`

***

### action

> **action**: [`ActionTypes`](../type-aliases/ActionTypes.md)

Action: ADD, OBSERVE, DELETE.

#### Inherited from

`IBaseAggregationEvent.action`

***

### readPoint?

> `optional` **readPoint**: [`ISimpleLocation`](ISimpleLocation.md)

The location of reading point.

#### Inherited from

`IBaseAggregationEvent.readPoint`

***

### bizLocation?

> `optional` **bizLocation**: [`ISimpleLocation`](ISimpleLocation.md)

The biz location where the item ends up.

#### Inherited from

`IBaseAggregationEvent.bizLocation`

***

### bizStep?

> `optional` **bizStep**: [`BizStepTypes`](../type-aliases/BizStepTypes.md)

The business step as per EPCIS.

#### Inherited from

`IBaseAggregationEvent.bizStep`

***

### disposition?

> `optional` **disposition**: [`DispositionTypes`](../type-aliases/DispositionTypes.md)

The disposition as per EPCIS.

#### Inherited from

`IBaseAggregationEvent.disposition`

***

### bizTransactionList?

> `optional` **bizTransactionList**: [`IBizTransaction`](IBizTransaction.md)[]

The list of related business transactions.

#### Inherited from

`IBaseAggregationEvent.bizTransactionList`
