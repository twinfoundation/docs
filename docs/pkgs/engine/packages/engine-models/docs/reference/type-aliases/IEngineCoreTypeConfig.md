# Type Alias: IEngineCoreTypeConfig\<T\>

> **IEngineCoreTypeConfig**\<`T`\> = `T` & `object`

Configuration for the engine core type.

## Type Declaration

### overrideInstanceType?

> `optional` **overrideInstanceType**: `string`

The instance type to override with.

### isDefault?

> `optional` **isDefault**: `boolean`

Whether this is the default instance.

### features?

> `optional` **features**: `string`[]

The features supported by this instance.

### restPath?

> `optional` **restPath**: `string`

The path for the REST API.

### restOptions?

> `optional` **restOptions**: `unknown`

The options for the REST API route generation.

### socketPath?

> `optional` **socketPath**: `string`

The path for the socket API.

### socketOptions?

> `optional` **socketOptions**: `unknown`

The options for the socket API route generation.

## Type Parameters

### T

`T` *extends* [`IEngineCoreTypeBaseConfig`](../interfaces/IEngineCoreTypeBaseConfig.md) = [`IEngineCoreTypeBaseConfig`](../interfaces/IEngineCoreTypeBaseConfig.md)
