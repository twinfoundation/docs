# Class: ContextIdProcessor

Adds an id to the request context ids.

## Implements

- `IBaseRouteProcessor`

## Constructors

### Constructor

> **new ContextIdProcessor**(`options`): `ContextIdProcessor`

Create a new instance of ContextIdProcessor.

#### Parameters

##### options

[`IContextIdProcessorConstructorOptions`](../interfaces/IContextIdProcessorConstructorOptions.md)

Options for the processor.

#### Returns

`ContextIdProcessor`

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

`IBaseRouteProcessor.className`

***

### start()

> **start**(`nodeLoggingComponentType?`): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Parameters

##### nodeLoggingComponentType?

`string`

The node logging component type.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IBaseRouteProcessor.start`

***

### pre()

> **pre**(`request`, `response`, `route`, `contextIds`, `processorState`): `Promise`\<`void`\>

Pre process the REST request for the specified route.

#### Parameters

##### request

`IHttpServerRequest`

The incoming request.

##### response

`IHttpResponse`

The outgoing response.

##### route

The route to process.

`IBaseRoute` | `undefined`

##### contextIds

`IContextIds`

The context IDs of the request.

##### processorState

The state handed through the processors.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IBaseRouteProcessor.pre`
