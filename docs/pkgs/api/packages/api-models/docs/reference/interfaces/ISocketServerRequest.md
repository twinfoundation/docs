# Interface: ISocketServerRequest\<T\>

Model for the standard parameters for an http request.

## Extends

- [`IHttpServerRequest`](IHttpServerRequest.md)\<`T`\>

## Type Parameters

### T

`T` = `any`

## Properties

### headers?

> `optional` **headers**: `IHttpHeaders`

Incoming Http Headers.

#### Inherited from

[`IHttpServerRequest`](IHttpServerRequest.md).[`headers`](IHttpServerRequest.md#headers)

***

### pathParams?

> `optional` **pathParams**: [`IHttpRequestPathParams`](IHttpRequestPathParams.md)

The path parameters.

#### Inherited from

[`IHttpServerRequest`](IHttpServerRequest.md).[`pathParams`](IHttpServerRequest.md#pathparams)

***

### query?

> `optional` **query**: [`IHttpRequestQuery`](IHttpRequestQuery.md)

The query parameters.

#### Inherited from

[`IHttpServerRequest`](IHttpServerRequest.md).[`query`](IHttpServerRequest.md#query)

***

### body?

> `optional` **body**: `T`

Data to return send as the body.

#### Inherited from

[`IHttpServerRequest`](IHttpServerRequest.md).[`body`](IHttpServerRequest.md#body)

***

### authentication?

> `optional` **authentication**: `unknown`

Used to authenticate and will be passed to the configured authentication provider for the request.

#### Inherited from

[`IHttpServerRequest`](IHttpServerRequest.md).[`authentication`](IHttpServerRequest.md#authentication)

***

### method?

> `optional` **method**: `HttpMethod`

The request method.

#### Inherited from

[`IHttpServerRequest`](IHttpServerRequest.md).[`method`](IHttpServerRequest.md#method)

***

### url?

> `optional` **url**: `string`

The request url.

#### Inherited from

[`IHttpServerRequest`](IHttpServerRequest.md).[`url`](IHttpServerRequest.md#url)

***

### socketId

> **socketId**: `string`

The socket id.
