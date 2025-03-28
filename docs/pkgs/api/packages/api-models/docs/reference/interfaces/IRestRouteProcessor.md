# Interface: IRestRouteProcessor

The definition for a processor for handling REST routes.

## Extends

- [`IBaseRouteProcessor`](IBaseRouteProcessor.md)\<[`IRestRoute`](IRestRoute.md)\>

## Methods

### pre()?

> `optional` **pre**(`request`, `response`, `route`, `requestIdentity`, `processorState`): `Promise`\<`void`\>

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

`undefined` | [`IRestRoute`](IRestRoute.md)\<`any`, `any`\>

##### requestIdentity

[`IHttpRequestIdentity`](IHttpRequestIdentity.md)

The identity context for the request.

##### processorState

The state handed through the processors.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.

#### Inherited from

[`IBaseRouteProcessor`](IBaseRouteProcessor.md).[`pre`](IBaseRouteProcessor.md#pre)

***

### post()?

> `optional` **post**(`request`, `response`, `route`, `requestIdentity`, `processorState`): `Promise`\<`void`\>

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

`undefined` | [`IRestRoute`](IRestRoute.md)\<`any`, `any`\>

##### requestIdentity

[`IHttpRequestIdentity`](IHttpRequestIdentity.md)

The identity context for the request.

##### processorState

The state handed through the processors.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.

#### Inherited from

[`IBaseRouteProcessor`](IBaseRouteProcessor.md).[`post`](IBaseRouteProcessor.md#post)

***

### process()?

> `optional` **process**(`request`, `response`, `route`, `requestIdentity`, `processorState`): `Promise`\<`void`\>

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

`undefined` | [`IRestRoute`](IRestRoute.md)\<`any`, `any`\>

##### requestIdentity

[`IHttpRequestIdentity`](IHttpRequestIdentity.md)

The identity context for the request.

##### processorState

The state handed through the processors.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request is processed.
