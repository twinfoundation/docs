# Interface: IRestRouteProcessor

The definition for a processor for handling REST routes.

## Extends

- [`IBaseRouteProcessor`](IBaseRouteProcessor.md)\<[`IRestRoute`](IRestRoute.md)\>

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

> `optional` **pre**(`request`, `response`, `route`, `contextIds`, `processorState`, `loggingComponentType?`): `Promise`\<`void`\>

Pre process the REST request for the specified route.

#### Parameters

##### request

[`IHttpServerRequest`](IHttpServerRequest.md)

The request to handle.

##### response

[`IHttpResponse`](IHttpResponse.md)

The response data to send if any.

##### route

The route being requested, if a matching one was found.

[`IRestRoute`](IRestRoute.md)\<`any`, `any`\> | `undefined`

##### contextIds

`IContextIds`

The context IDs of the request.

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

> `optional` **post**(`request`, `response`, `route`, `contextIds`, `processorState`, `loggingComponentType?`): `Promise`\<`void`\>

Post process the REST request for the specified route.

#### Parameters

##### request

[`IHttpServerRequest`](IHttpServerRequest.md)

The request to handle.

##### response

[`IHttpResponse`](IHttpResponse.md)

The response data to send if any.

##### route

The route being requested, if a matching one was found.

[`IRestRoute`](IRestRoute.md)\<`any`, `any`\> | `undefined`

##### contextIds

`IContextIds`

The context IDs of the request.

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

### process()?

> `optional` **process**(`request`, `response`, `route`, `processorState`, `loggingComponentType?`): `Promise`\<`void`\>

Process the REST request for the specified route.

#### Parameters

##### request

[`IHttpServerRequest`](IHttpServerRequest.md)

The request to handle.

##### response

[`IHttpResponse`](IHttpResponse.md)

The response data to send if any.

##### route

The route being requested, if a matching one was found.

[`IRestRoute`](IRestRoute.md)\<`any`, `any`\> | `undefined`

##### processorState

The state handed through the processors.

##### loggingComponentType?

`string`

The logging component type for the request.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.
