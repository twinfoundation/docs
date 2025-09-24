# Interface: ISocketRoute\<T, U\>

Interface which defines a socket route.

## Extends

- [`IBaseRoute`](IBaseRoute.md)

## Type Parameters

### T

`T` *extends* [`IHttpRequest`](IHttpRequest.md) = `any`

### U

`U` *extends* [`IHttpResponse`](IHttpResponse.md) = `any`

## Properties

### operationId

> **operationId**: `string`

The id of the operation.

#### Inherited from

[`IBaseRoute`](IBaseRoute.md).[`operationId`](IBaseRoute.md#operationid)

***

### path

> **path**: `string`

The path to use for routing.

#### Inherited from

[`IBaseRoute`](IBaseRoute.md).[`path`](IBaseRoute.md#path)

***

### skipAuth?

> `optional` **skipAuth**: `boolean`

Skips the authentication for this route.

#### Inherited from

[`IBaseRoute`](IBaseRoute.md).[`skipAuth`](IBaseRoute.md#skipauth)

***

### processorFeatures?

> `optional` **processorFeatures**: `string`[]

The features supported by additional processors to run for this route.

#### Inherited from

[`IBaseRoute`](IBaseRoute.md).[`processorFeatures`](IBaseRoute.md#processorfeatures)

***

### handler()

> **handler**: (`socketRequestContext`, `request`, `emit`) => `void`

The handler module.

#### Parameters

##### socketRequestContext

[`ISocketRequestContext`](ISocketRequestContext.md)

The request context.

##### request

`T`

The request object.

##### emit

(`event`, `response`) => `Promise`\<`void`\>

The function to emit an event.

#### Returns

`void`

***

### connected()?

> `optional` **connected**: (`socketRequestContext`) => `void`

The connected handler.

#### Parameters

##### socketRequestContext

[`ISocketRequestContext`](ISocketRequestContext.md)

The request context.

#### Returns

`void`

***

### disconnected()?

> `optional` **disconnected**: (`socketRequestContext`) => `void`

The disconnected handler.

#### Parameters

##### socketRequestContext

[`ISocketRequestContext`](ISocketRequestContext.md)

The request context.

#### Returns

`void`
