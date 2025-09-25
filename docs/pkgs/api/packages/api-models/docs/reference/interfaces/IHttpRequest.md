# Interface: IHttpRequest\<T\>

Model for the standard parameters for an http request.

## Extended by

- [`IHttpServerRequest`](IHttpServerRequest.md)
- [`INoContentRequest`](INoContentRequest.md)

## Type Parameters

### T

`T` = `any`

## Properties

### headers?

> `optional` **headers**: `IHttpHeaders`

Incoming Http Headers.

***

### pathParams?

> `optional` **pathParams**: [`IHttpRequestPathParams`](IHttpRequestPathParams.md)

The path parameters.

***

### query?

> `optional` **query**: [`IHttpRequestQuery`](IHttpRequestQuery.md)

The query parameters.

***

### body?

> `optional` **body**: `T`

Data to return send as the body.

***

### authentication?

> `optional` **authentication**: `unknown`

Used to authenticate and will be passed to the configured authentication provider for the request.
