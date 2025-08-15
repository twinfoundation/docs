# Interface: IHttpRequestContext

Context data from the HTTP request.

## Extends

- [`IHttpRequestIdentity`](IHttpRequestIdentity.md)

## Extended by

- [`ISocketRequestContext`](ISocketRequestContext.md)

## Properties

### serverRequest

> **serverRequest**: [`IHttpServerRequest`](IHttpServerRequest.md)

The raw HTTP request.

***

### processorState

> **processorState**: `object`

The state handed through the processors.

#### Index Signature

\[`id`: `string`\]: `unknown`

***

### loggingComponentType?

> `optional` **loggingComponentType**: `string`

Logging component type for the request.

***

### nodeIdentity?

> `optional` **nodeIdentity**: `string`

The identity of the node the request is being performed on.

#### Inherited from

[`IHttpRequestIdentity`](IHttpRequestIdentity.md).[`nodeIdentity`](IHttpRequestIdentity.md#nodeidentity)

***

### userIdentity?

> `optional` **userIdentity**: `string`

The identity of the requestor if there is an authenticated user.

#### Inherited from

[`IHttpRequestIdentity`](IHttpRequestIdentity.md).[`userIdentity`](IHttpRequestIdentity.md#useridentity)
