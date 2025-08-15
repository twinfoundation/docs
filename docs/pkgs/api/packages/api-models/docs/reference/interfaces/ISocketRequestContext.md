# Interface: ISocketRequestContext

Context data from the socket request.

## Extends

- [`IHttpRequestContext`](IHttpRequestContext.md)

## Properties

### serverRequest

> **serverRequest**: [`IHttpServerRequest`](IHttpServerRequest.md)

The raw HTTP request.

#### Inherited from

[`IHttpRequestContext`](IHttpRequestContext.md).[`serverRequest`](IHttpRequestContext.md#serverrequest)

***

### processorState

> **processorState**: `object`

The state handed through the processors.

#### Index Signature

\[`id`: `string`\]: `unknown`

#### Inherited from

[`IHttpRequestContext`](IHttpRequestContext.md).[`processorState`](IHttpRequestContext.md#processorstate)

***

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

Logging component type for the request.

#### Inherited from

[`IHttpRequestContext`](IHttpRequestContext.md).[`loggingComponentType`](IHttpRequestContext.md#loggingcomponenttype)

***

### nodeIdentity?

> `optional` **nodeIdentity**: `string`

The identity of the node the request is being performed on.

#### Inherited from

[`IHttpRequestContext`](IHttpRequestContext.md).[`nodeIdentity`](IHttpRequestContext.md#nodeidentity)

***

### userIdentity?

> `optional` **userIdentity**: `string`

The identity of the requestor if there is an authenticated user.

#### Inherited from

[`IHttpRequestContext`](IHttpRequestContext.md).[`userIdentity`](IHttpRequestContext.md#useridentity)

***

### socketId

> **socketId**: `string`

The id of the socket.
