# Class: EventBusSocketClient

Event bus which publishes using REST API and websockets.

## Extends

- `BaseSocketClient`

## Implements

- `IEventBusComponent`

## Constructors

### Constructor

> **new EventBusSocketClient**(`options`): `EventBusSocketClient`

Create a new instance of EventBusSocketClient.

#### Parameters

##### options

[`IEventBusSocketClientConstructorOptions`](../interfaces/IEventBusSocketClientConstructorOptions.md)

Options for the client.

#### Returns

`EventBusSocketClient`

#### Overrides

`BaseSocketClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IEventBusComponent.className`

***

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

`IEventBusComponent.subscribe`

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

`IEventBusComponent.unsubscribe`

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

`IEventBusComponent.publish`

***

### handleConnected()

> `protected` **handleConnected**(): `Promise`\<`void`\>

Handle the socket connection.

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseSocketClient.handleConnected`

***

### handleError()

> `protected` **handleError**(`err`): `Promise`\<`void`\>

Handle an error.

#### Parameters

##### err

`IError`

The error to handle.

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseSocketClient.handleError`
