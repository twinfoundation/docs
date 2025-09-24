# Interface: INoContentRequest

A REST request with no input parameters.

## Extends

- [`IHttpRequest`](IHttpRequest.md)

## Properties

### authentication?

> `optional` **authentication**: `unknown`

Used to authenticate and will be passed to the configured authentication provider for the request.

#### Inherited from

[`IHttpRequest`](IHttpRequest.md).[`authentication`](IHttpRequest.md#authentication)

***

### headers?

> `optional` **headers**: `undefined`

Incoming Http Headers.

#### Overrides

[`IHttpRequest`](IHttpRequest.md).[`headers`](IHttpRequest.md#headers)

***

### pathParams?

> `optional` **pathParams**: `undefined`

The path parameters.

#### Overrides

[`IHttpRequest`](IHttpRequest.md).[`pathParams`](IHttpRequest.md#pathparams)

***

### query?

> `optional` **query**: `undefined`

The query parameters.

#### Overrides

[`IHttpRequest`](IHttpRequest.md).[`query`](IHttpRequest.md#query)

***

### body?

> `optional` **body**: `undefined`

Data to return send as the body.

#### Overrides

[`IHttpRequest`](IHttpRequest.md).[`body`](IHttpRequest.md#body)
