# Class: SocketRouteProcessor

Process the socket request and hands it on to the route handler.

## Implements

- `ISocketRouteProcessor`

## Constructors

### Constructor

> **new SocketRouteProcessor**(`options?`): `SocketRouteProcessor`

Create a new instance of SocketRouteProcessor.

#### Parameters

##### options?

[`ISocketRouteProcessorConstructorOptions`](../interfaces/ISocketRouteProcessorConstructorOptions.md)

Options for the processor.

#### Returns

`SocketRouteProcessor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`ISocketRouteProcessor.CLASS_NAME`

## Methods

### connected()

> **connected**(`request`, `route`, `loggingComponentType?`): `Promise`\<`void`\>

Process the connected event.

#### Parameters

##### request

`ISocketServerRequest`

The server request object containing the socket id and other parameters.

##### route

The route being requested, if a matching one was found.

`undefined` | `ISocketRoute`\<`any`, `any`\>

##### loggingComponentType?

`string`

The logging component type for the request.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.

#### Implementation of

`ISocketRouteProcessor.connected`

***

### disconnected()

> **disconnected**(`request`, `route`, `loggingComponentType?`): `Promise`\<`void`\>

Process the disconnected event.

#### Parameters

##### request

`ISocketServerRequest`

The server request object containing the socket id and other parameters.

##### route

The route being requested, if a matching one was found.

`undefined` | `ISocketRoute`\<`any`, `any`\>

##### loggingComponentType?

`string`

The logging component type for the request.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.

#### Implementation of

`ISocketRouteProcessor.disconnected`

***

### process()

> **process**(`request`, `response`, `route`, `requestIdentity`, `processorState`, `responseEmitter`, `loggingComponentType?`): `Promise`\<`void`\>

Process the REST request for the specified route.

#### Parameters

##### request

`ISocketServerRequest`

The incoming request.

##### response

`IHttpResponse`

The outgoing response.

##### route

The route to process.

`undefined` | `ISocketRoute`\<`any`, `any`\>

##### requestIdentity

`IHttpRequestIdentity`

The identity context for the request.

##### processorState

The state handed through the processors.

##### responseEmitter

(`topic`, `response`) => `Promise`\<`void`\>

The function to emit a response.

##### loggingComponentType?

`string`

The logging component type for the request.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`ISocketRouteProcessor.process`
