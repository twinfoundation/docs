# Interface: IHttpRequestContext

Context data from the HTTP request.

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
