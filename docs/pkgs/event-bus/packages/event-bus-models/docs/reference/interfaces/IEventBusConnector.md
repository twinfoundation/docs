# Interface: IEventBusConnector

Interface describing a event bus connector.

## Extends

- `IComponent`

## Methods

### subscribe()

> **subscribe**\<`T`\>(`topic`, `callback`): `Promise`\<`string`\>

Subscribe to the event bus.

#### Type Parameters

##### T

`T`

#### Parameters

##### topic

`string`

The topic being subscribed to.

##### callback

[`EventBusCallback`](../type-aliases/EventBusCallback.md)\<`T`\>

The callback to be called when the event occurs on the bus.

#### Returns

`Promise`\<`string`\>

The id of the subscription, to be used in unsubscribe.

***

### unsubscribe()

> **unsubscribe**(`subscriptionId`): `Promise`\<`void`\>

Unsubscribe from the event bus.

#### Parameters

##### subscriptionId

`string`

The subscription to unsubscribe.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### publish()

> **publish**\<`T`\>(`topic`, `data`): `Promise`\<`void`\>

Publish an event to the bus.

#### Type Parameters

##### T

`T`

#### Parameters

##### topic

`string`

The topic to publish.

##### data

`T`

The data to publish.

#### Returns

`Promise`\<`void`\>

Nothing.
