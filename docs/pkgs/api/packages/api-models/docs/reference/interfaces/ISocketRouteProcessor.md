# Interface: ISocketRouteProcessor

The definition for a processor for handling socket routes.

## Extends

- [`IBaseRouteProcessor`](IBaseRouteProcessor.md)\<[`ISocketRoute`](ISocketRoute.md), [`ISocketServerRequest`](ISocketServerRequest.md)\>

## Methods

### features()?

> `optional` **features**(): `string`[]

Features supported by this processor.
If a route has any of these features listed, this processor will be run for that route.
If this is not implemented, the processor will run for all routes.

#### Returns

`string`[]

The features supported by this processor.

#### Inherited from

[`IBaseRouteProcessor`](IBaseRouteProcessor.md).[`features`](IBaseRouteProcessor.md#features)

***

### pre()?

> `optional` **pre**(`request`, `response`, `route`, `requestIdentity`, `processorState`, `loggingComponentType?`): `Promise`\<`void`\>

Pre process the REST request for the specified route.

#### Parameters

##### request

[`ISocketServerRequest`](ISocketServerRequest.md)

The request to handle.

##### response

[`IHttpResponse`](IHttpResponse.md)

The response data to send if any.

##### route

The route being requested, if a matching one was found.

`undefined` | [`ISocketRoute`](ISocketRoute.md)\<`any`, `any`\>

##### requestIdentity

[`IHttpRequestIdentity`](IHttpRequestIdentity.md)

The identity context for the request.

##### processorState

The state handed through the processors.

##### loggingComponentType?

`string`

The logging component type for the request.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.

#### Inherited from

[`IBaseRouteProcessor`](IBaseRouteProcessor.md).[`pre`](IBaseRouteProcessor.md#pre)

***

### post()?

> `optional` **post**(`request`, `response`, `route`, `requestIdentity`, `processorState`, `loggingComponentType?`): `Promise`\<`void`\>

Post process the REST request for the specified route.

#### Parameters

##### request

[`ISocketServerRequest`](ISocketServerRequest.md)

The request to handle.

##### response

[`IHttpResponse`](IHttpResponse.md)

The response data to send if any.

##### route

The route being requested, if a matching one was found.

`undefined` | [`ISocketRoute`](ISocketRoute.md)\<`any`, `any`\>

##### requestIdentity

[`IHttpRequestIdentity`](IHttpRequestIdentity.md)

The identity context for the request.

##### processorState

The state handed through the processors.

##### loggingComponentType?

`string`

The logging component type for the request.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.

#### Inherited from

[`IBaseRouteProcessor`](IBaseRouteProcessor.md).[`post`](IBaseRouteProcessor.md#post)

***

### connected()?

> `optional` **connected**(`request`, `route`, `loggingComponentType?`): `Promise`\<`void`\>

Process the connected event.

#### Parameters

##### request

[`ISocketServerRequest`](ISocketServerRequest.md)

The server request object containing the socket id and other parameters.

##### route

The route being requested, if a matching one was found.

`undefined` | [`ISocketRoute`](ISocketRoute.md)\<`any`, `any`\>

##### loggingComponentType?

`string`

The logging component type for the request.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.

***

### disconnected()?

> `optional` **disconnected**(`request`, `route`, `loggingComponentType?`): `Promise`\<`void`\>

Process the disconnected event.

#### Parameters

##### request

[`ISocketServerRequest`](ISocketServerRequest.md)

The server request object containing the socket id and other parameters.

##### route

The route being requested, if a matching one was found.

`undefined` | [`ISocketRoute`](ISocketRoute.md)\<`any`, `any`\>

##### loggingComponentType?

`string`

The logging component type for the request.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.

***

### process()?

> `optional` **process**(`request`, `response`, `route`, `requestIdentity`, `processorState`, `responseEmitter`, `loggingComponentType?`): `Promise`\<`void`\>

Process the REST request for the specified route.

#### Parameters

##### request

[`ISocketServerRequest`](ISocketServerRequest.md)

The server request object containing the socket id and other parameters.

##### response

[`IHttpResponse`](IHttpResponse.md)

The response data to send if any.

##### route

The route being requested, if a matching one was found.

`undefined` | [`ISocketRoute`](ISocketRoute.md)\<`any`, `any`\>

##### requestIdentity

[`IHttpRequestIdentity`](IHttpRequestIdentity.md)

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

Promise that resolves when the request is processed.
