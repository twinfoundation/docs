# Class: RestRouteProcessor

Process the REST request and hands it on to the route handler.

## Implements

- `IRestRouteProcessor`

## Constructors

### Constructor

> **new RestRouteProcessor**(`options?`): `RestRouteProcessor`

Create a new instance of RouteProcessor.

#### Parameters

##### options?

[`IRestRouteProcessorConstructorOptions`](../interfaces/IRestRouteProcessorConstructorOptions.md)

Options for the processor.

#### Returns

`RestRouteProcessor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IRestRouteProcessor.className`

***

### process()

> **process**(`request`, `response`, `route`, `processorState`, `loggingComponentType?`): `Promise`\<`void`\>

Process the REST request for the specified route.

#### Parameters

##### request

`IHttpServerRequest`

The incoming request.

##### response

`IHttpResponse`

The outgoing response.

##### route

The route to process.

`IRestRoute`\<`any`, `any`\> | `undefined`

##### processorState

The state handed through the processors.

##### loggingComponentType?

`string`

The logging component type for the request.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IRestRouteProcessor.process`
