# Interface: IBaseRouteProcessor\<T, R\>

The definition for a base processor for handling REST routes.

## Extends

- `IComponent`

## Extended by

- [`IRestRouteProcessor`](IRestRouteProcessor.md)
- [`ISocketRouteProcessor`](ISocketRouteProcessor.md)

## Type Parameters

### T

`T` = [`IBaseRoute`](IBaseRoute.md)

### R

`R` = [`IHttpServerRequest`](IHttpServerRequest.md)

## Methods

### pre()?

> `optional` **pre**(`request`, `response`, `route`, `requestIdentity`, `processorState`, `loggingComponentType?`): `Promise`\<`void`\>

Pre process the REST request for the specified route.

#### Parameters

##### request

`R`

The request to handle.

##### response

[`IHttpResponse`](IHttpResponse.md)

The response data to send if any.

##### route

The route being requested, if a matching one was found.

`undefined` | `T`

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

***

### post()?

> `optional` **post**(`request`, `response`, `route`, `requestIdentity`, `processorState`, `loggingComponentType?`): `Promise`\<`void`\>

Post process the REST request for the specified route.

#### Parameters

##### request

`R`

The request to handle.

##### response

[`IHttpResponse`](IHttpResponse.md)

The response data to send if any.

##### route

The route being requested, if a matching one was found.

`undefined` | `T`

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
