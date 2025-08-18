# Class: EventBusService

Class for performing event bus operations over web sockets.

## Implements

- `IEventBusConnector`

## Constructors

### Constructor

> **new EventBusService**(`options?`): `EventBusService`

Create a new instance of EventBusService.

#### Parameters

##### options?

[`IEventBusServiceConstructorOptions`](../interfaces/IEventBusServiceConstructorOptions.md)

The options for the connector.

#### Returns

`EventBusService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IEventBusConnector.CLASS_NAME`

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

`EventBusCallback`\<`T`\>

The callback to be called when the event occurs on the bus.

#### Returns

`Promise`\<`string`\>

The id of the subscription, to be used in unsubscribe.

#### Implementation of

`IEventBusConnector.subscribe`

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

#### Implementation of

`IEventBusConnector.unsubscribe`

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

#### Implementation of

`IEventBusConnector.publish`
